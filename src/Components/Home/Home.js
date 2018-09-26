import React,{Component} from 'react'
import axios from 'axios';
import {Link, BrowserRouter} from 'react-router-dom';

class Home extends Component{
  state = {
    cities:[],
    name:''
  }

  async componentDidMount()
  {

  await   axios.get('http://100.124.69.3:8080/api/v1/cities').then(res => {
      this.setState({cities:res.data})
      console.log(res)
    });
  console.log(this.state.cities)
  }

  render(){
    let postList = this.state.cities.map(city =>
    {
      return (

          <div key = {city.id}>
          <p>
        <Link to = {'/'+city.id}>{city.name}</Link></p>
        </div>
      )
    })
    return(


        <div className = 'align'>All Facilities (NCAL)
        <div className = 'Modal1'>
            {postList}
        </div>
      </div>


    )
  }
}

export default Home
