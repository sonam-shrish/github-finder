import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios'
import {Component} from 'react';
import Search from './components/users/Search'


class App extends Component {
  state= {
    users:[],
    loading: false
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
    <div className="App">
      <Navbar/>
      <Search searchUsers = {this.searchUsers}/>
      <div className='container'>
      <Users loading={this.state.loading} users={this.state.users}/>
      </div>
    </div>
  );
}

}

export default App;
