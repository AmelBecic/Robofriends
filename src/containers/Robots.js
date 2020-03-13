import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';





class Robots extends Component {
    constructor () {
        super()
        this.state = {
            robots: [] , 
            searchfield: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {return response.json()})
        .then (users => this.setState({robots: users }));
    }
    
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
        
       
    }
    render () { 
        const {robots , searchfield} = this.state;
        const filteredRobots = robots.filter (robots => {
            return robots.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        if (searchfield === 'pussy'){
            return <div className='tc'>
                <h1 >Did you mean Nasir Hasanovic?</h1>
                <img src='https://scontent.fsjj2-1.fna.fbcdn.net/v/t1.0-9/38442513_2092453034132687_3963049461701148672_n.jpg?_nc_cat=104&_nc_sid=85a577&_nc_ohc=-s01fPjBgcsAX_koH99&_nc_ht=scontent.fsjj2-1.fna&oh=0f5e8d39aba85615c48d54c0fe28a142&oe=5EB89E86' alt=''/>
                
                </div>
        }
        
        return (
        
        <div>
            <div className='tc'>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList Korisnici = {filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>

            </div>
               
        );
    }

}

export default Robots;