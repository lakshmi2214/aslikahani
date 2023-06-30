import React from "react";
import { useNavigate } from "react-router-dom";

function BannerAd2(props) {
    const navigate = useNavigate()
    const handleNavigation = (item) => {
        console.log(item);

        navigate(`${item.url}`, { state: { item } });
    }
    
    return (
        <>
            <div className="ad-div text-center">

                {props.addObject?.categories?.slice(0, 1).map((item, index) => {
                    return (
                        item.advertisements.BottomBannerAd2.map((item, index) => {
                            console.log(item)
                            return (

                                <div key={index}>
                                    <a href={item.url} target="_blank" onClick={() => handleNavigation(item, index)}>
                                        <img src={item.image} className="img-responsive" alt="" />
                                    </a>
                                </div>
                            )

                        })
                    )
                })}

            </div>
        </>
    )
}
export default BannerAd2;






