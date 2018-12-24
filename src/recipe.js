import React, {Component} from 'react';

class Recipe extends Component {
    render(){
        
        const {title} = this.props;
        const ingredients = this.props.ingredients.map(function(ingred, i){
            return (
            <li key={i}>{ingred}</li>
            );
        });
        
        return(
            <div>
            <div>Recipe {title}</div>
            <ul>
            {ingredients}
            </ul>
            </div>
            );
        
    }
    
    
    
}

export default Recipe;