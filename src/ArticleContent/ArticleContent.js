import React from 'react'
import RelatedArticleContent from './RelatedContent/RelatedArticleContent'
import ChaiTheoryAd from '../Advertisements/ChaiTheoryAd'
import FooterCategory from '../FooterCategory/FooterCategory'

function ArticleContent() {
  return (
    <div>
      <section className="main-content">
        <div className="container">
          <div className="row">
            <RelatedArticleContent />
            <div className="col-md-5 col-sm-12 col-xs-12" id="side-bar-right-2">
              <div className="theiaStickySidebar">
                <aside>
                  <ChaiTheoryAd />
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterCategory />
    </div>
  )
}

export default ArticleContent
