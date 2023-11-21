import React from 'react'
import './article.css'
import sidebanner from "../images/banner2.jpg"

function Grids() {
  return (
    <>
    
    <div class="wrappers">
{/* <div class="header">Header (Absolute)</div> */}
<div class="sidebar-1">
  <div class="sticky-spacer"></div>
  <div class="sticky-content">                <img src={sidebanner} alt='banner1' style={{ width: "-webkit-fill-available" }} />
</div>
</div>
<div class="content">
  <div class="sticky-spacer"></div>
  <div class="sticky-content">
    Scrollable content<br/><br/>
    line 1<br/><br/>
    line 2<br/><br/>
    line 3<br/><br/>
    line 4<br/><br/>
    line 5<br/><br/>
    line 6<br/><br/>
    line 7<br/><br/>
    line 8<br/><br/>
    line 9<br/><br/>
    line 10<br/><br/>
    line 11<br/><br/>
    line 12<br/><br/>
    line 13<br/><br/>
    line 14<br/><br/>
    line 15<br/><br/>
    line 16<br/><br/>
    line 17<br/><br/>
    line 18<br/><br/>
    line 19<br/><br/>
    line 20
  </div>
</div>
<div class="sidebar-2">
  <div class="sticky-spacer"></div>
  <div class="sticky-content">
  <img src={sidebanner} alt='banner1' style={{ width: "-webkit-fill-available" }} />

  </div>
</div>
{/* <div class="footer">Footer (Absolute)</div> */}
</div>
    
    </>
  )
}

export default Grids