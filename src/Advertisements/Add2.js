import React from 'react'

function Add2(props) {
    return (
        <div>
            {props.addObject?.categories?.slice(0, 1).map((item) => {
                return (
                    item.advertisements.BottomBannerAd2.map((item, index) => {
                        // console.log(item)
                        return (
                            <div key={index}>
                                <div className='midAddImg my-xxl-4'>
                                    <a href={item.url} className='my-xxl-4'>
                                        <img src={item.image} alt='banner2' className='img-fluid' />
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