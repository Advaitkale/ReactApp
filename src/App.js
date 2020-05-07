import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './Person/Person.css';
import Person from './Person/Person'



class App extends Component {

    state = {
        name: 'Adu',
        age:20
    }
    switchNameHandler = () => {
        this.setState({
            name: 'Advait',
            age: 20});
    }
    switchNameHandlerBack = () => {
        this.setState({
            name: 'Adu',
            age: 30
        });
    }

    changedNameHandler = (event) => {
        this.setState({
            name: event.target.value,
            age: 20
        });
    }

    render() {
        return (
            <div className='App'>
                <h1>Hello This is My First React App !!! Good Luck !!</h1>
                <Person name={this.state.name} age={this.state.age} changed={this.changedNameHandler} >He likes Apples !!</Person>
                <button onClick={this.switchNameHandler}>Change Name</button>
                <button onClick={this.switchNameHandlerBack}>Undo Name</button>

            </div>

        );

    };
}



export default App;
