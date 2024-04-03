import React from 'react'
import { useNavigate } from "react-router-dom";

function Articles(props) {
    const navigate = useNavigate();
    const handleNavigation = (item) => {
        // console.log(item);

        navigate(`/${item.category}/${item.url}`, { state: { item } });
    }

    const national = props.dataObject;
    return (
        <>

            <div className='titleArtCont'>
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
                {/* <div className='col-md-6 col-12' style={{ padding: "5px" }}>
                        {national?.locations?.NationalNews.slice(2, 4).map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className='article-image zoom-in'>

                                        <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>
                                            <img src={item.image} alt='img1' style={{ width: "-webkit-fill-available", height: "180px" }} />
                                        </a>

                                        <div className='col-md-12 article-desc' style={{ padding: "initial" }}>
                                            <h5 className="w-100 ">
                                                <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.title}</a></h5>
                                            <p className="w-100">BY <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.authored_by} </a></p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div> */}

            </div>

        </>
    )
}

export default Articles