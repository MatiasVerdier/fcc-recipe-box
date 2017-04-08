const getRecipes = () => {
  return JSON.parse(localStorage.getItem('recipes') || '[]');
}

const saveRecipes = (recipes) => {
  localStorage.setItem('recipes', JSON.stringify(recipes));
}

const addRecipe = (recipe) => {
  let recipes = getRecipes();
  recipes.push(recipe);
  saveRecipes(recipes);
  return getRecipes();
}


export default {
  getRecipes,
  addRecipe,
};