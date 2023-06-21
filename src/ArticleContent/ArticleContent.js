import React from 'react'
import Navbar from '../Utility/Navbar'
// import HeadingImg from './HeadingImg'
import RelatedArticleContent from './RelatedContent/RelatedArticleContent'
import AboutAuthor from './AboutAuthor'
// import MostReadPost from './MostReadPost'
// import AdvertizementArticle from './AdvertisementArticle'
// import RssSubscription from './RssSubscription'
// import ArchivePostArticle from './ArchivePostArticle'
import SristarAd2 from '../Advertisements/SristarAd2'
import ChaiTheoryAd from '../Advertisements/ChaiTheoryAd'
import SristarAd1 from '../Advertisements/SristarAd1'
import FooterCategory from '../FooterCategory/FooterCategory'


function ArticleContent() {
  return (
    <div>
      <Navbar />
      
      <section className="main-content"> 
            <div className="container">
            <div className="row">
               <RelatedArticleContent /> 
              <div className="col-md-5 col-sm-12 col-xs-12" id="side-bar-right-2">
                                <div className="theiaStickySidebar">
                                <aside>
                                  <ChaiTheoryAd/>
                                 {/* <AboutAuthor />  */}
                                
                           <SristarAd2/>
                           <SristarAd1/>
                        </aside>
                    </div>
                    </div>
            </div>
            </div>
            </section>
          <FooterCategory/>
    </div>
  )
}

export default ArticleContent
