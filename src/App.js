import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import SecondTable from './Components/Table/SecondTable';

import Home from './Components/Home/Home';
import Login from './Components/Login/Login';

import {BrowserRouter, Route, Switch} from 'react-router-dom';


class App extends Component {

// componentDidMount()
// {
//   axios.get('https://jsonplaceholder.typicode.com/posts').then(
//     response =>{
//       this.setState({posts:response.data});
//       //console.log(response)
//     }
//   );
// }


   showHandler = () =>
   {
     const doesShow = this.state.showData;
     this.setState({showData: !doesShow});
   }

  render() {
  //  let modalClose = () => this.setState({ modalShow: false });

//    let posts=null;
// if(this.state.showData)
// {
//   posts = (
//     <div className = 'App-intro' >Change Facility
//     <div className = 'colors'>All Facilities (NCAL)
//     <i class="material-icons" >clear</i>
//           <div className='Modal' >
//               {this.state.cities.map(post =>
//                   {
//                     return <Person name = {post.name}/>
//                   })}
//           </div>
//           </div>
//           </div>
//      );
// }
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
