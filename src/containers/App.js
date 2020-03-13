import React, {Component} from 'react';
import Nav from '../components/Nav';
import Robots from './Robots';
import About from '../components/About';
import HomePage from '../components/HomePage';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';



class App extends Component {
    
    render () { 
        
        
        return (

        <Router>
            <div>
                <Nav />
                <Switch>
                <Route path="/home" exact component={HomePage} />
                <Route path="/about" exact component={About} />    
                <Route path="/robots" exact component={Robots} />
                </Switch>
             </div>   
        </Router>      
        );
    }

}

export default App;