import React from 'react';
import RecipeItem from './RecipeItem';

const RecipeList = (props) => {
  const recipes = props.recipes.map((recipe) => {
    return <RecipeItem key={recipe.id} recipe={recipe} />
  });
    
  return (
    <div className="ui vertical segment" style={{display: props.visible ? 'block' : 'none'}}>
      <div className="ui four doubling cards">
        { recipes }
      </div>
    </div>
  )
}

export default RecipeList;