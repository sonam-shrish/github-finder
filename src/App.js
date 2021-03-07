//the <Route /> syntax is kinda sloppy. So, check that out
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios'
import {Component} from 'react';
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import {Fragment} from 'react'
import About from './components/pages/About'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'


class App extends Component {
  state= {
    users:[],
    loading: false,
    alert:null

  }
  //Clear Users
  clearUsers = () => {
    this.setState({
      users:[],
      loading:false,
    })
  }

  //search users
  searchUsers = (text)=>
  {
    this.setState({
      loading:true
    })
    axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`).then(res=>{
  this.setState({
    users:res.data.items,
    loading:false
  })})
  }

  //set Alert
  setAlert = (msg, type) => {
    this.setState({alert:{msg, type}})//send the message and type of alert
    setTimeout(()=> this.setState({
      alert:null
    }), 4000)
  }
  // componentDidMount() {
  //   //In order not to exhaust the request we are equipping the request url with the client id and client secret which is stored in .env.local
  //   axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`).then(res=>{
  // this.setState({
  //   users:res.data,
  //   loading:false
  // })} )//the res.data is an array of objects
  // }
  
  
  render () {

  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className='container'>
      <Alert alert={this.state.alert} />
      
      <Switch>
        <Route exact path='/' render={props => (
          <Fragment>
          <Search 
          searchUsers = {this.searchUsers} 
          clearUsers={this.clearUsers} 
          setAlert={this.setAlert}
          showClear= {this.state.users.length!==0?true:false}/>
          <div className='container'>
          <Users loading={this.state.loading} users={this.state.users}/>
          </div>
          </Fragment>
        )} />
        <Route exact path='/about' component={About} />
      </Switch>


      
      </div>
    </div>
    </Router>
  );
}

}

export default App;
