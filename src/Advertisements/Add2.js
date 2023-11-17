import React from 'react'

function Add2(props) {
    return (
        <div>
            {props.addObject?.categories?.slice(0, 1).map((item) => {
                return (
                    item.advertisements.BottomBannerAd2.map((item, index) => {
                        console.log(item)
                        return (
                            <div key={index}>
                                <div className='pt-3'>
                                    <a href={item.url}>
                                        <img src={item.image} alt='banner2' style={{ width: "-webkit-fill-available" }} />
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

export default Add2;