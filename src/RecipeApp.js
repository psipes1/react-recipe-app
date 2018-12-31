import React, { Component } from 'react';
import Recipe from './recipe';
import Navbar from './navbar';
import RecipeList from './recipeList';
import './RecipeApp.css';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
       <RecipeList />
       </div>
    );
  }
}

export default RecipeApp;
