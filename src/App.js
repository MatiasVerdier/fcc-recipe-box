import React, { Component } from 'react';
import RecipeList from './components/RecipeList';
import SearchBox from './components/SearchBox';
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
        <div className="ui vertical segment">
          <h1 className="ui header">List of recipes</h1>

          <SearchBox search={this.state.searchText} onSearch={this.onSearchChange}/>

          <button className="ui right floated circular icon button" onClick={this.showCreateForm}>
            <i className="icon plus"></i>
          </button>
        </div>

        <RecipeForm onFormSubmit={this.saveRecipe} onFormCancel={this.hideCreateForm} visible={this.state.isCreate} />

        <RecipeList recipes={this.state.recipes} visible={!this.state.isCreate} />
      </div>
    );
  }
}

export default App;