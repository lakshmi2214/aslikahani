import React from "react";

function BannerAd1(props) {
    
    return (
        <>
            <div className="ad-div text-center">

                {props.addObject?.categories?.slice(0, 1).map((item) => {
                    return (
                        item.advertisements.BottomBannerAd1.map((item, index) => {
                            // console.log(item)
                            return (

                                <div key={index}>
                                    <a href={item.url} target="_blank" rel="noreferrer">
                                        <img src={item.image} className="img-responsive" alt="itm-img" style={{width:"85%"}}/>
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
export default BannerAd1;






