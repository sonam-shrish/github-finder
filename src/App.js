//the <Route /> syntax is kinda sloppy. So, check that out
import './App.css';
import Navbar from './components/layout/Navbar';
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import {Fragment} from 'react'
import About from './components/pages/About'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import User from './components/users/User'
import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'
import Home from './components/pages/Home'
import NotFound from './components/pages/NotFound'

const App = (props) => {
  
  return (
    <GithubState>
      <AlertState>
    <Router>
    <div className="App">
      <Navbar/>
      <div className='container'>
      <Alert />
      
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
    /
        <Route exact path='/user/:login' component={User} />
        <Route component={NotFound} />
      </Switch>

      
      </div>
    </div>
    </Router>
    </AlertState>
    </GithubState>
  );

//path='/user/:login' what does it mean   :login is called the PARAM of login. {...users} is compulsory if it is
//not there we can not use it in User.js The path should be passed in as props
}

export default App;
