import React from 'react'
import { useNavigate } from "react-router-dom";

function Articles(props) {
    const navigate = useNavigate();

    const national = props.dataObject;
    return (
        <>

            {/* <div className='titleArtCont'>
                <div className='multi-artic'>
                    <h4><strong>Articles</strong></h4>
                </div>
                <div className='row row-gap-4'>
                    {national?.locations?.NationalNews.slice(0, 4).map((item, index) => {
                        return (
                            <div className='col-md-6 col-12' >
                                <div className='lft-rght-grid' onClick={() => handleNavigation(item, index)} key={index}>
                                    <div className='grid-left-imgico' onClick={() => handleNavigation(item, index)}>
                                        <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>
                                            <img src={item.image} className='img-fluid' alt='img1' />
                                        </a>
                                    </div>
                                    <div className='grid-right-txt'>
                                        <h5> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.title}</a></h5>
                                        <p>BY <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.authored_by}</a></p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div> */}
            <div className="updt-content-wrapper">
                <div className="updt-section">
                    <div className='arctl-headings'>
                        <h2 className="updt-section-title">National News</h2>
                        <button>View All</button>
                    </div>
                    <div className="updt-articles">
                        {national?.locations?.NationalNews.slice(0, 3).map((item, index) => {
                            return (
                                <a className='mst-anchor' href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>
                                    <div key={index} className="updt-article">
                                        <div className='updt-artcl'>
                                            <img alt="" className="img-fluid" src={item.image} />
                                        </div>
                                        <div className="updt-article-text">
                                            <h3>{item.title}</h3>
                                            <p>{item.authored_by}</p>
                                            <p>{item.created_at}</p>
                                            <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>READ MORE</a>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Articles