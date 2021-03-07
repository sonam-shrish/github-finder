import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios'
import {Component} from 'react'


class App extends Component {
  state= {
    users:[],
    loading: false
  }
  componentDidMount() {
    axios.get('https://api.github.com/users').then(res=>{console.log(res.data)
  this.setState({
    users:res.data,
    loading:true
  })} )//the res.data is an array of objects
  }
  
  
  render () {

  return (
    <div className="App">
      <Navbar/>
      <div className='container'>
      <Users users={this.state.users}/>
      </div>
    </div>
  );
}

}

export default App;
