import { useTranslation } from 'react-i18next';
import './News.css';
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const News = () => {

    const [slidesToShow, setSlidesToShow] = useState(3);
    const sliderRef = useRef(null);

    // Detect window width on mount and resize
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width <= 768) setSlidesToShow(1);
            else if (width <= 1100) setSlidesToShow(2);
            else setSlidesToShow(3);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    const { t, i18n } = useTranslation();
    const articles = t("news.articles", { returnObjects: true });
    const [activeVideo, setActiveVideo] = useState(null);

    const openVideo = (videoUrl) => setActiveVideo(videoUrl);
    const closeVideo = () => setActiveVideo(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow,
        slidesToScroll: 1,
        arrows: true,
    };


    return (
        <section id="news" className="wrapper">
            <div className="textBlock">
                <h1>{t("menu.news")}</h1>
                <div className='slider-wrapper'>
                    <Slider ref={sliderRef} {...settings}>
                        {articles.map((article, index) => (
                            <div key={index} className="news-slide-wrapper-wrapper">
                                <div className="news-slide-wrapper">
                                    <div className="news-slide">
                                        <img
                                            src={"news/" + article.image}
                                            alt={article.headline}
                                        />
                                        <div className='article-text'>
                                            <p className='article-date'>{article.date}</p>
                                            <h2>{article.headline}</h2>
                                            <p>{article.text}</p>
                                            <a href={article.linkedinUrl} target="_blank" rel="noopener noreferrer">
                                                {t("news.more")}
                                            </a>
                                            {article.videoUrl && (
                                                <button onClick={() => openVideo(article.videoUrl)}>
                                                    {t("news.video")}
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider></div>

                {activeVideo && (
                    <div className="video-overlay" onClick={closeVideo}>
                        <div className="video-content" onClick={(e) => e.stopPropagation()}>
                            <iframe
                                src={activeVideo}
                                width="100%"
                                height="500px"
                                allowFullScreen
                                title="LinkedIn Video"
                            />
                            <button className="close-button" onClick={closeVideo}>✕</button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
};

export default News;