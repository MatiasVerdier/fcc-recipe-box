import React from 'react';

const RecipeItem = (props) => {
  const { recipe } = props;
  return (
    <div className="ui card">
      <div className="content">
        <div className="header">{recipe.name}</div>
      </div>
      <div className="content">
        <h4 className="ui sub header">Ingredients</h4>
        <p className="description">
          {recipe.ingredients}
        </p>
      </div>
      <div className="extra content">
        <button className="ui button">Join Project</button>
      </div>
    </div>
  )
}

export default RecipeItem;