import React,{Component} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import FacilityModal from '../Table/FacilityModal';

class Home extends Component{
  state = {
    cities:[],
    name:''
  }

  componentDidMount()
  {

  axios.get('http://100.124.68.138:8080/api/v1/cities/').then(res => {
      this.setState({cities:res.data})
      console.log("Viral" + JSON.stringify(res))
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
<div className="hr-sect">OR</div>
   <div className = 'Modal1'>
            {postList}
        </div>
<FacilityModal cityname = {this.props} />
      </div>
    )
  }
}

export default Home
