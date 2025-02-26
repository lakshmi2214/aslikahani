// import React, { useState } from 'react';
// import './search.css';
// import { useNavigate } from 'react-router-dom';

// const Search = () => {
//   const[value, setValue] = useState(""); 
//   const navigate = useNavigate();

//   const handleNavigation = () => {
//      navigate(`/search/${value}`);
//   };

//   return (
//     <div className="search-bar-custom">
//       <input value={value} onChange={(e) => {setValue(e.target.value)}} type="text" placeholder="Search.."  name="gsearch" ></input>
//       <button onClick={handleNavigation}>
//         <i className="fa fa-search"></i>
//       </button>
//     </div>
//   );
// };

// export default Search;


import React, { useState } from 'react';
import './search.css';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [value, setValue] = useState("");
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = () => {
    if (value.trim()) {
      setHasError(false);
      navigate(`/search/${value}`);
    } else {
      setHasError(true);
    }
  };

  return (
    <div className={`search-bar-custom ${hasError ? 'error' : ''}`}>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          if (hasError) setHasError(false);
        }}
        type="text"
        placeholder="Search..."
        name="gsearch"
      />
      <button onClick={handleNavigation} disabled={!value.trim()}>
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
};

export default Search;
