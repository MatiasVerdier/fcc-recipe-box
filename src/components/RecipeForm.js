import React from 'react';

class RecipeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeName: '',
      recipeIngredients: '',
    };
    
    this.onNameChange = this.onNameChange.bind(this);
    this.onIngredientsChange = this.onIngredientsChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  
  onNameChange(e) {
    this.setState({ recipeName: e.target.value });
  }
  
  onIngredientsChange(e) {
    this.setState({ recipeIngredients: e.target.value });
  }
  
  onFormSubmit(e) {
    e.preventDefault();
    const recipe = {
      id: new Date().getTime(),
      name: this.state.recipeName,
      ingredients: this.state.recipeIngredients,
    }
    this.props.onSave(recipe);
  }
  
  render() {
    return (
      <div className="ui vertical segment" style={{display: this.props.visible ? 'block' : 'none'}}>
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Recipe Name</label>
            <input type="text" placeholder="Recipe name" value={this.state.recipeName} onChange={this.onNameChange}/>
          </div>

          <div className="field">
            <label>Ingredients</label>
            <textarea value={this.recipeIngredients} onChange={this.onIngredientsChange} />
          </div>

          <div className="ui button" onClick={this.props.onFormCancel}>Cancel</div>
          <button className="ui primary button" type="submit">Create</button>
        </form>
      </div>
    );
  }
}

export default RecipeForm;