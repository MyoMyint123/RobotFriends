import React from "react";

const SearchBox = ({ searchChange }) => (
    <div className="pd2">
        <input 
            className="pa3 ba b--green bg-lightest-blue"
            type="text"
            onChange={searchChange}
        />
    </div>
);

export default SearchBox;