
import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from '../Utility/Navbar';

function ApiCategory() {

  const [result, setResult] = useState([]);

  useEffect(() => {
    const url = "https://newsbackend-388608.as.r.appspot.com/api/v1/category/list";
    fetch(url).then(response => response.json())
      .then(response => {
        setResult(response)
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <Navbar dataObject={result} />
    </div>
  );
}

export default ApiCategory;