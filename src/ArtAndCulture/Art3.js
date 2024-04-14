import React from 'react';
import { useNavigate } from 'react-router-dom';

function Art3(props) {
    const navigate = useNavigate()
    const handleNavigation = (item) => {
        // console.log(item);

        navigate(`/Art-and-Culture/${item.url}`, { state: { item } });

    }
  return (
    <div className='row row-gap-4'>
    {props.dataObject?.locations?.ArtCultureGeneral.slice(8, 10).map((item, index) => {
        return (
            <div className='col-md-6 '>
                <div key={index} className='girdImagesHome big-right-Img innerpageHeightImg '>
                    <div className='home-image-main' onClick={() => handleNavigation(item, index)}>
                        <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>
                            <img src={item.image} className='img-fluid' alt='img1' />
                        </a>
                        <div className='overlayImg-text'>
                            <h5> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.title}</a></h5>
                            <p>BY <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.authored_by}</a></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    })}
</div>

  )
}

export default Art3