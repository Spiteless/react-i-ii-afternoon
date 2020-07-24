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
        currentPage: 1,
      }
      this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    if (["left","right"].includes(e.target.name)) {
      this.changePage(e.target.value)
    }
    if ( "delete" === e.target.name) {
      this.deletePerson()
    }
    //e.target is the element that the event call came from
    //e.target.name is the name of that target element
    //[e.target.name]: e.target.value means:
    //      HTML prop name: value of HTML element
    this.setState({
        // [e.target.name]: e.target.value
    })
  }

  changePage(page){
    page = Number(page)
    let current = Number(this.state.currentPage)
    let length = this.state.data.length
    page += current
    if (page == 0) {
      page = length}
    if (page > length) {
      page = 1}
    this.setState({
      currentPage: page
    })
  }

  deletePerson(){
    let index = this.state.currentPage - 1
    let newData = this.state.data.map( (el) => {
      return (el !== this.state.data[index]) ? el : null})
    newData = newData.filter( (el) => (el !== null) ? true : false)
    this.setState({
      data: newData
    })
  }

  render(){
    
    return (
      <div className="App">
        <div className="main">
          <Header></Header>
          <Display
            data = {this.state.data[this.state.currentPage-1]}
            currentPage = {this.state.currentPage}
            maxPage = {this.state.data.length}
            />
          <Controls
            handleChange = {this.handleChange}
          />
        </div>
      </div>
          
    );
  }
}

export default App;
