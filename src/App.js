import React, { Component } from 'react';
import './App.css';
import logo from './kp_logo.jpeg';
import Person from './Person/Person';
import Users from './Users/Users';
import Header from './Header/Header';
import axios from 'axios';
import Modal from 'react-modal';
import {Link} from 'react-router-dom';
import AddUsers from './AddUsers';
import Table from './TableData';
import SecondTable from './SecondTable';



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

  // state = {
  //   cities: [
  //       {name : "Antioch"},
  //       {name : "Fremont"},
  //       {name : "Fresno"},
  //       {name : "Manteca"},
  //       {name : "Modesto"},
  //       {name : "Oakland"},
  //       {name : "Redwood City"},
  //       {name : "Santa Clara"},
  //       {name : "Richmond"},
  //       {name : "Sacramento"},
  //       {name : "Wallnut Creek"},
  //       {name : "Vallejo"}
  //   ],
  //   showData: false,
  //   modalShow:false
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
      <Header />
      
  { /*    {posts}
    <AddUsers />
        <Table />
      */}

    <SecondTable />
      </div>
    );
  }
}

export default App;
