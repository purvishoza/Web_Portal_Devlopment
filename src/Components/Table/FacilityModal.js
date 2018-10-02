import { Modal} from 'antd';
import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import SecondTable from './SecondTable';
class FacilityModal extends Component {
  state = {
    cities:[],
  }

async  componentDidMount()
  {
    console.log(this.props.property)
    console.log(this.props.cityname)
    await axios.get('https://evening-sea-55464.herokuapp.com/api/v1/cities').then(res => {
      this.setState({cities:res.data})
      console.log(res.data)
    });
    console.log(this.state.cities)
  }

  handleAddUser = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      visible: false,
      name:''
    });
  }

  handleChange = (e) =>{
    this.setState({
      name : e.target.value
    })
  }

  render() {

       let posts = (
         <div >All Facilities (NCAL)
               <div className = 'Modal'>
                   {this.state.cities.map(city =>
                     <a href={`/${city.id}`}> {city.name} </a>
                          // <Link to = {'/'+city.id} key = {city.id} onClick = {this.props.onCancel}> {city.name} </Link>
                       )}
               </div>
               </div>
          );

    return (
      <div>
        <Modal
          title="Change Facility"
          visible={this.props.visible}
           onCancel={this.props.onCancel}
          footer={null}
        >
        <div>{posts}</div>

        </Modal>
      </div>
    );
  }
}

export default FacilityModal
