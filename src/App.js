import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import SecondTable from './Components/Table/SecondTable';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div >
          <BrowserRouter>
            <div className="App">
              <Header />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/login' component={Login} />
                    <Route path='/:city_id' component={SecondTable} />
                </Switch>
            </div>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
