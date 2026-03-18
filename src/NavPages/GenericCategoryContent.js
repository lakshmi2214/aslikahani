import React from 'react';
import { useNavigate } from 'react-router-dom';

export function CategoryContent1({ dataObject, categoryKey }) {
    const navigate = useNavigate();
    const handleNavigation = (item) => {
        navigate(`/${item.category}/${item.url}`, { state: { item } });
    };

    const articles = dataObject?.locations?.[categoryKey] || [];

    return (
        <div className='row row-gap-4'>
            {articles.slice(0, 3).map((item, index) => (
                <div key={index} className='col-md-12'>
                    {/* Featured Layout for Latest Posts */}
                    <div className='girdImagesHome big-left-Img featured-latest-card' style={{ marginBottom: '25px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', borderRadius: '12px', overflow: 'hidden' }}>
                        <div className='row no-gutters' style={{ display: 'flex', alignItems: 'center' }}>
                            <div className='col-md-7'>
                                <div className='home-image-main' onClick={() => handleNavigation(item)} style={{ cursor: 'pointer' }}>
                                    <a href={`${process.env.REACT_APP_DOMAIN_NAME}/${item.category}/${item.url}`}>
                                        <img src={item.image} className='img-fluid' alt='img1' style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                                    </a>
                                </div>
                            </div>
                            <div className='col-md-5'>
                                <div className='p-4' style={{ background: '#fff', height: '100%' }}>
                                    <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '15px' }}>
                                        <a href={`${process.env.REACT_APP_DOMAIN_NAME}/${item.category}/${item.url}`} style={{ color: '#242424', textDecoration: 'none' }}>{item.title}</a>
                                    </h2>
                                    <p style={{ color: '#666', fontSize: '1rem', marginBottom: '10px' }}>BY <strong>{item.authored_by}</strong></p>
                                    <p style={{ color: '#888', fontSize: '0.9rem' }}>{item.created_at}</p>
                                    <button onClick={() => handleNavigation(item)} style={{ marginTop: '20px', padding: '10px 20px', background: '#d32415', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: 'bold' }}>READ FULL STORY</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export function CategoryContent2({ dataObject, categoryKey }) {
    const navigate = useNavigate();
    const handleNavigation = (item) => {
        navigate(`/${item.category}/${item.url}`, { state: { item } });
    };

    const articles = dataObject?.locations?.[categoryKey] || [];

    return (
        <div className='row row-gap-4'>
            {articles.slice(4, 8).map((item, index) => (
                <div key={index} className='col-md-6 '>
                    <div className='girdImagesHome big-right-Img innerpageHeightImg '>
                        <div className='home-image-main' onClick={() => handleNavigation(item)}>
                            <a href={`${process.env.REACT_APP_DOMAIN_NAME}/${item.category}/${item.url}`}>
                                <img src={item.image} className='img-fluid' alt='img1' />
                            </a>
                            <div className='overlayImg-text'>
                                <h5> <a href={`${process.env.REACT_APP_DOMAIN_NAME}/${item.category}/${item.url}`}>{item.title}</a></h5>
                                <p>BY <a href={`${process.env.REACT_APP_DOMAIN_NAME}/${item.category}/${item.url}`}>{item.authored_by}</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export function SidePopularGeneric({ dataObject, categoryKey }) {
    const articles = dataObject?.locations?.[categoryKey] || [];

    return (
        <div className='col-md-12'>
            <div className='popular-side-cont'>
                <div className='popular-heading'>
                    <h5>POPULAR</h5>
                </div>
                {articles.slice(0, 4).map((item, index) => (
                    <div key={index} className='grid-popular'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <div className='poplrImg'>
                                    <a href={`${process.env.REACT_APP_DOMAIN_NAME}/${item.category}/${item.url}`}>
                                        <img className='img-fluid' src={item.image} alt='popular-img' />
                                    </a>
                                </div>
                            </div>
                            <div className='col-md-8' >
                                <div className='pplur-desc' >
                                    <h5><a href={`${process.env.REACT_APP_DOMAIN_NAME}/${item.category}/${item.url}`}>{item.title}</a></h5>
                                    <h5>{item.created_at}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export function SidePostGeneric({ dataObject, categoryKey }) {
    const articles = dataObject?.locations?.[categoryKey] || [];

    return (
        <div className='side-posts'>
            {articles.slice(4, 8).map((item, index) => (
                <div key={index} className='side-post-item'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <a href={`${process.env.REACT_APP_DOMAIN_NAME}/${item.category}/${item.url}`}>
                                <img src={item.image} className='img-fluid' alt='post-img' />
                            </a>
                        </div>
                        <div className='col-md-8'>
                            <h5><a href={`${process.env.REACT_APP_DOMAIN_NAME}/${item.category}/${item.url}`}>{item.title}</a></h5>
                            <p>{item.created_at}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
