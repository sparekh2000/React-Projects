import React, {useState} from "react";
import './SearchFilter.css';
import JSONData from '../MOCK_DATA.json';
import {ImCross} from 'react-icons/im';

function SearchFilter() {

    const [searchVal, setSearchVal] = useState('');

    function handleInputChange(e) {
        setSearchVal(e.target.value);
    }

    return (
      <div className="searchFilterContainer">
        <h1>Search Filter App</h1>
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Search ..."
            value={searchVal}
            onChange={handleInputChange}
          ></input>
          <ImCross className="crossIcon" size={15} onClick={() => setSearchVal('')}/>
        </div>

        <div className="valueContainer">
          {JSONData.filter(({ first_name }) =>
            first_name.toLowerCase().includes(searchVal.toLowerCase())
          ).map(({ id, first_name }) => (
            <div
              onClick={(e) => {
                setSearchVal(first_name);
              }}
              id={id}
            >
              {first_name}
            </div>
          ))}
        </div>
      </div>
    );
}

export default SearchFilter;