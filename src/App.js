import React, {Component, useEffect} from 'react';
import data from './recentData.json';
import { time } from './time.json';
import Tables from './Tables';
import './App.css';
import { Card, Navbar, Nav, Form, FormControl, Button, Container, Alert } from 'react-bootstrap';
import Footers from './Footers';
import Headers from './Headers';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';

class App extends Component{
  constructor() {
    super();
    this.state = {
      data: [],
      searchfield: '',
      direction: {
        'States': 'asc',
        'New Cases': 'asc',
        'New Deaths': 'asc',
        'Total Cases': 'asc',
        'Total Deaths': 'asc'
      }
    }
    this.sortBy = this.sortBy.bind(this)
  }

  componentDidMount(){
    console.log('aa')

    fetch('/flask/data')
    .then(response => response.json())
    .then(users => this.setState({ data: data}))
    
    console.log('bb')
    
    fetch('/flask/runner')
    
    console.log('cc')
    

  }

  onSearchChange = (event) => {
    // console.log(event)
    this.setState({ searchfield: event.target.value })
  }

  sortBy = (key) => {
    // console.log(this.state.direction)
    if(key === 'States'){
      this.state.direction[key] === 'asc'
      ?this.setState({
        data: data.sort((a,b) => {
            if(b.States < a.States){
              return 1
            }else if(a.States < b.States){
              return -1
            }else{
              return 0
            }
          }),
        direction:{
          [key]: 'desc'
        }
      })
      :this.setState({
        data: data.sort((a,b) => {
            if(b.States > a.States){
              return 1
            }else if(a.States > b.States){
              return -1
            }else{
              return 0
            }
          }),
        direction:{
          [key]: 'asc'
        }
      })
    }else{
      this.setState({
        data: data.sort((a,b) => (
          this.state.direction[key] === 'asc'
          ? a[key] - b[key]
          : b[key] - a[key]
        )),
        direction: {
          [key]: this.state.direction[key] === 'asc'
          ? 'desc'
          : 'asc'
        }
      })
    }
  }

  render() {

    const { data, searchfield } = this.state;
    const filteredRobots = data.filter(dat => {
      return dat.States.toLowerCase().includes(searchfield.toLowerCase())
    })


    return (
    <div className="Jumbotron">
      <Headers searchChange={this.onSearchChange}/>
      <Scroll>     
      <Container className='py-5'>
        <Alert key='time' variant='info'>
    Last Updated on: { time } GMT+5:30
  </Alert>
      <ErrorBoundry>
       <Tables data={filteredRobots} sortBy={this.sortBy}/>
      </ErrorBoundry>
      </Container>
      </Scroll>
      <Footers/>
    </div>
    );  
  }

}

export default App;
