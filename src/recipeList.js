import React, {Component} from 'react';
import Recipe from './recipe';
import PropTypes from 'prop-types';
import './recipeList.css';

class RecipeList extends Component {
    static defaultProps = {
    recipes: [
      {
        title: "Spaghetti",
        instructions: "Open jar of Spaghetti sauce.  Bring to simmer in pot.  Boil water.  Cook pasta until done (sling on wall).  Combine pasta and sauce",
        ingredients: ["Pasta", "8 cups water", "Sauce"],
        img: "spaghetti.jpg"
      },
      {
        title: "Foie Gras",
        instructions: "Add all ingredients and make it good.",
        ingredients: ["1-quart veal or chicken stock (low-sodium)", "1/4 cup aged​ balsamic vinegar", "2 tablespoon red currant jelly",
        "12 small dried mission​ figs (quartered)", "Salt and pepper to taste", "4 slices grade 'A' foie gras (2 to 3 ounces each)", "4 slices white bread (crust trimmed, toasted)"],
        img: "foiegras.jpg"
      },
      {
        title: "Red Beans and Rice",
        instructions: "Mix all ingredients and make it good",
        ingredients: ["Red Beans", "White Rice", "Cajun Spices", "Andouille Sausage", "Other stuff..."],
        img: "redbeans1.jpg"
      }
    ]
  }
  
  static propTypes = {
      recipes: PropTypes.arrayOf(PropTypes.object).isRequired
      
  }
  
    
    render(){
        const recipes = this.props.recipes.map(function(recipe, i){
           return (<Recipe key={i}{...recipe} />); 
            
        });
        
        return (
            <div className="recipe-list">
            {recipes}
            </div>
            );
        
    }
}

export default RecipeList;