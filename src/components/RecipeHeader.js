import React from 'react';
import SearchBox from './SearchBox';

const RecipeHeader = ({ title, searchText, onSearchChange, onCreateClick }) => 
  <div className="ui vertical segment">
    <h1 className="ui header">{title}</h1>

    <SearchBox search={searchText} onSearch={onSearchChange}/>

    <button className="ui right floated circular icon button" onClick={onCreateClick}>
      <i className="icon plus"></i>
    </button>
  </div>

export default RecipeHeader;