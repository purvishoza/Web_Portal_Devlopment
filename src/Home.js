import React,{Component} from 'react'
import axios from 'axios';
import { Card } from 'antd';
import {Link, BrowserRouter, withRouter} from 'react-router-dom';

class Home extends Component{
  state = {
    cities:[]
  }

async  componentDidMount()
  {
    await axios.get('http://10.227.213.194:8080/api/v1/cities').then(res => {
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
          <BrowserRouter><Link to = '#'>{city.name}</Link></BrowserRouter></p>
        </div>
      )
    })
    return(
      <Card style={{ width: 700 }} className='Modal'>
    {postList}
  </Card>

    )
  }
}

export default withRouter(Home)
