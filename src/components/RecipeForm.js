import React from 'react';

class RecipeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeName: '',
      recipeIngredients: '',
    };
  }
  
  render() {
    return (
      <div className="ui vertical segment" style={{display: this.props.visible ? 'block' : 'none'}}>
        <form className="ui form" onSubmit={this.props.onFormSubmit}>
          <div className="field">
            <label>Recipe Name</label>
            <input type="text" placeholder="Recipe name" value={this.state.recipeName} />
          </div>

          <div className="field">
            <label>Ingredients</label>
            <textarea>{this.recipeIngredients}</textarea>
          </div>

          <div className="ui button" onClick={this.props.onFormCancel}>Cancel</div>
          <button className="ui primary button" type="submit">Create</button>
        </form>
      </div>
    );
  }
}

export default RecipeForm;