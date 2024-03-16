import React from 'react';
import { Fragment } from 'react';
import './SearchBox.css';


const SearchBox = ({searchChange}) => {
    return (
        <>
        <div className = "pa3">
            <input className = "search_css"
            type = 'search' 
            placeholder = 'search robots' 
            onChange = {searchChange}
            /> 
        </div>
        </>
    );
}

export default SearchBox;