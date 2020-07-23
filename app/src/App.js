import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.js'
import Controls from './Components/Controls'
import Display from './Components/Display'
import PageNum from './Components/PageNum'
import Header from './Components/Header'

class App extends React.Component {
  constructor(){
    super();
      this.state = {
        data: data,
        currentPage: 0,
        
      }
  }
  
  render(){
    
    return (
      <div className="App">
        <div className="main">
          <Header></Header>
          <Display
            data = {this.state.data[this.state.currentPage]}
            currentPage = {this.state.currentPage}
            maxPage = {this.state.data.length}
            />
          <Controls/>
        </div>
      </div>
          
    );
  }
}

export default App;
