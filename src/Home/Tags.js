import { useState } from "react";
import button from "../images/button.jpg"
import './tags.css'
function Tags(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='position-relative tagsCont'>
      <div className='moreOpen'>
        <button className={`${isOpen ? 'CsLss': 'MsLss'}`} onClick={() => setIsOpen(!isOpen)}>
          {/* {` ${isOpen ? 'Less': 'More' }`}  */}
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
      <div className={`badgesContainer ${isOpen ? "openBadge" : "closedBadeg"}`}>
        <div className='container'>
          <div className='hash-tagName'>
            <div className='tagslisting'>
              {props.dataObject?.locations?.trendingTags?.map((item) => {
                return (
                  <a href={process.env.REACT_APP_DOMAIN_NAME + '/search/' + item.tag_value}>
                    <div className="badges-list">{item.tag_name}</div></a>
                )
              })}
            </div>
            <div className='tagsImageCont'>
              <a className='img-bages' href={process.env.REACT_APP_DOMAIN_NAME + '/subscribe'}>
                <img src={button} className='img-fluid' alt='button-img' /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tags