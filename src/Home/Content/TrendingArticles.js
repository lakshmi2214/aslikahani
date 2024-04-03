import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

function TrendingArticles(props) {
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();
    const handleNavigation = (item) => {

        navigate(`/${item.category}/${item.url}`, { state: { item } });
    }
    useEffect(() => {
        const checkMobile = () => {
            const isMobile = window.innerWidth >= 767;
            setIsMobile(isMobile);
        };

        checkMobile();

        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);
    return (
        <>
            <section className='mid-artcl'>
                <div className='min-tranding-article' >
                    <h3><span>Trending Articles</span></h3>
                </div>
                <div className='row'>
                    <div className='col-md-6' >

                        {props.dataObject?.locations?.TrendingNews.slice(0, 1).map((item, index) => {
                            return (
                                <div className='trnd-main-img' key={index}>
                                    <div className='mindzoom-in'>
                                        <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>

                                            <img className='img-fluid' src={item.image} alt='bigimage' />
                                        </a>
                                    </div>
                                    <div className='article-desc mid-tranding-text' >
                                        <h5> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.title}</a></h5>
                                        <p><span>BY</span> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}><strong>{item.authored_by}</strong></a>
                                            <span> / </span><span>{item.created_at}</span> </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='col-md-6' >
                        {props.dataObject?.locations?.TrendingNews.slice(1, 7).map((item, index) => {
                            return (
                                <div className='mid-trnd-grid' key={index} onClick={() => handleNavigation(item, index)} >
                                    <div className='row'>
                                        <div className='col-md-4' >
                                            <div className='trnd-img-cr'>
                                                <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>
                                                    <img className='img-fluid' src={item.image} alt='popular-img' />
                                                </a>
                                            </div>
                                        </div>
                                        <div className='col-md-8' >
                                            <div className='article-desc for-tnd-se'>
                                                <h5> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url} >{item.title}</a></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                {/* <div className='col-md-6' >
                            {props.dataObject?.locations?.TrendingNews.slice(4, 7).map((item, index) => {

                                return (
                                    <div key={index} onClick={() => handleNavigation(item, index)} >
                                        <div className='col-md-12' >
                                            <div className='col-md-4' >

                                                <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>
                                                    <img src={item.image} alt='popular-img' />
                                                </a>
                                            </div>

                                            <div className='col-md-8' >
                                                <div className='article-desc'>
                                                    <h5> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url} >{item.title}</a></h5>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div> */}
            </section>


        </>
    )
}

export default TrendingArticles