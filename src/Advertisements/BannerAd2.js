import React from "react";

function BannerAd2(props) {
   
    return (
        <>
            <div className="ad-div text-center ">

                {props.addObject?.categories?.slice(0, 1).map((item, index) => {
                    return (
                        item.advertisements.BottomBannerAd2.map((item, index) => {
                            // console.log(item)
                            return (

                                <div className="midAddImg" key={index}>
                                    <a href={item.url} target='blank' >
                                        <img src={item.image} className="img-fluid" alt="" />
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






