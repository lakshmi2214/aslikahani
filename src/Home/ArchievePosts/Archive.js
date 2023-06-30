import React from "react";
import New from "./New";
import Online from "./Online";



function Archive() {
    return(
        <>
              <section class="new-archives">
         <div class="container">
            <div class="row">
               <New />
               <div class="col-md-4 col-xs-12 col-sm-12">
                 <Online />
               </div>
            </div>
         </div>
      </section>
        </>
    );
}
export default Archive;