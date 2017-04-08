import React from 'react';

const SearchBox = (props) => {
  return (
    <div className="ui icon input">
      <input type="text" placeholder="Search recipe" value={props.search} onChange={props.onSearch}/>
      <i className="search icon"></i>
    </div>
  )
}

export default SearchBox;