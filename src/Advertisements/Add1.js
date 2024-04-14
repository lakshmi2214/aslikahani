import React from 'react'

function Add1(props) {
    return (
        <div>

            {/* <div className='col-md-12' style={{ border: "1px solid blue", textAlign: "center" }}> */}
            {props.addObject?.categories?.slice(0, 1).map((item) => {
                return (
                    item.advertisements.BottomBannerAd1.map((item, index) => {
                        return (
                            < div key={index} >
                                <div className='midAddImg my-xxl-4'>
                                    <a href={item.url} className='my-xxl-4'>
                                        <img src={item.image} alt='banner1' className='img-fluid'/>
                                    </a>
                                </div>
                            </div >

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

{/* <div key={index}>
<a href={item.url} target="_blank" rel="noreferrer">
    <img src={item.image} className="img-responsive" alt="itm-img" />
</a>
</div> */}