 
import React, { Component } from 'react';
import Searchbox from './Components/searchbox/search';
import './App.css';
import Cardlist from './Components/card-list/card-list';
class App extends Component {
  constructor(){
    super()
    this.state={
      monsters : [

      ],
      searchfield:''
    };
  }
  
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users").then(response =>  response.json()).then(uesrs => this.setState({monsters:uesrs}));
  }
  handlechange=(e)=> {
    this.setState({searchfield:e.target.value})
  }
  render() { 
    const {monsters,searchfield}=this.state
    const filterd=monsters.filter( monster=>
      monster.name.toLowerCase().includes(searchfield.toLocaleLowerCase()     )      )
    return (  
    <div className="App">
      <h1>monsters rolodex</h1>
      <Searchbox
      placeholder='Search Monsters'
      handlechange={this.handlechange}
      />
      <Cardlist monsters={filterd }>

      {
      
    }
      </Cardlist>
    
  </div>);
  }
}
 
export default App;

