import React, {Component} from 'react';
import './navbar.css';

class Navbar extends Component {
    render(){
        return(
            <header>
            <h2><a>Recipe App</a></h2>
                <nav>
                    
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">New Recipe</a></li>
                    <li><a href="#">Login</a></li>
                </nav>
                </header>
            );
        
    }
    
}

export default Navbar;