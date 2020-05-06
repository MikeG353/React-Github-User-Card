import React from 'react';
import axios from 'axios';
import Card from './Components/Card'
import './App.css';

export default class App extends React.Component {
  state = {};
  
  // lifecycle functions
  componentDidMount() {
    axios.get("https://api.github.com/users/MikeG353")
    .then(res => {
      
      this.setState({
        state: res.data        
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
  // handlers

  // will need a second get request to update the card
  fetchUser = e => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.login}`)
    .then(res => {
      this.setState({
        

      })
    })
  }
  

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Github User Card</h1>
          <Card  user={this.state} />
        </div>
      </div>
    )
  }
}
