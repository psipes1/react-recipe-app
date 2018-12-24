import React, { Component } from 'react';
import Recipe from './recipe';

import './RecipeApp.css';

class RecipeApp extends Component {
  render() {
    return (
      
       <Recipe title="pasta" ingredients={["Flour", "Water"]}/>
       
    );
  }
}

export default RecipeApp;
