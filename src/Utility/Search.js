import React, { useState } from 'react';
import './search.css';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const[value, setValue] = useState(""); 
  const navigate = useNavigate();

  const handleNavigation = () => {
     navigate(`/search/${value}`);
  };

  return (
    // <div className="search-bar">
    <div className="search-bar-custom">
      <input value={value} onChange={(e) => {setValue(e.target.value)}} type="text" placeholder="Search.."  name="gsearch" ></input>
      <button onClick={handleNavigation}>
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
};

export default Search;
