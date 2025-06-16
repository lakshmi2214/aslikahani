import React from "react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import XMLViewer from "react-xml-viewer";



function SiteMap(){
    const [map, setMap] = useState([]);
    useEffect(() => {
        const options = {
            headers: new Headers({'Content-Type': 'application/xml; charset=utf-8'})
        }
        const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/seo/get-sitemap`;
        fetch(url,options).then(response => response.text())
          .then(response => {
            setMap(response)
          })

    },[]);
    return(
        <>
        <XMLViewer xml={map} />

        </>
    )

}

const rootElement = document.getElementById("root");
ReactDOM.render(<SiteMap />, rootElement);
export default SiteMap 
