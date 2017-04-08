import React, { Component } from 'react';
import RecipeList from './components/RecipeList';
import RecipeHeader from './components/RecipeHeader';
import RecipeForm from './components/RecipeForm';
import api from './api';

class App extends Component {
  constructor() {
    super();
    this.state = {
        recipes: [],
        searchText: '',
        isCreate: false,
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.showCreateForm = this.showCreateForm.bind(this);
    this.hideCreateForm = this.hideCreateForm.bind(this);
    this.saveRecipe = this.saveRecipe.bind(this);
  }
  
  componentDidMount() {
    let recipes = api.getRecipes();
    this.setState({ recipes });
  }
  
  onSearchChange(e) {
    this.setState({ searchText: e.target.value });
  }
  
  showCreateForm() {
    this.setState({ isCreate: true });
  }
  
  hideCreateForm() {
    this.setState({ isCreate: false });
  }
  
  saveRecipe(e) {
    e.preventDefault();
    this.hideCreateForm();
  }
  
  render() {
    return (
      <div className="ui container">

        <RecipeHeader
          title="List of recipes"
          searchText={this.state.searchText}
          onSearchChange={this.onSearchChange}
          onCreateClick={this.showCreateForm}
        />

        <RecipeForm onFormSubmit={this.saveRecipe} onFormCancel={this.hideCreateForm} visible={this.state.isCreate} />

        <RecipeList recipes={this.state.recipes} visible={!this.state.isCreate} />
        
      </div>
    );
  }
}

export default App;