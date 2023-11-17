import React from 'react'

function Add1(props) {
    return (
        <div>

            {/* <div className='col-md-12' style={{ border: "1px solid blue", textAlign: "center" }}> */}
                {props.addObject?.categories?.slice(0, 1).map((item) => {
                    return (
                        item.advertisements.BottomBannerAd1.map((item, index) => {
                            console.log(item)
                            return (
                                <div key={index}>
                                    <div className='pt-3'>
                                        <a href={item.url}>
                                            <img src={item.image} alt='banner1' style={{width:"-webkit-fill-available"}}/>
                                        </a>
                                        </div>
                                </div>
                            )
                        })
                    )
                }
                )}


            {/* </div> */}

        </div>
    )
}

export default Add1