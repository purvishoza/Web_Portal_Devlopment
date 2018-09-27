import { Modal} from 'antd';
import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class FacilityModal extends Component {
  state = {
    cities:[]
  }

  async  componentDidMount()
  {
    await axios.get('http://100.124.66.66:8080/api/v1/cities').then(res => {
      this.setState({cities:res.data})
      console.log(res)
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
                       {
                         return <Link to = '#' key = {city.id}> {city.name} </Link>
                       })}
               </div>
               </div>

          );

    return (

      <div>
        <Modal
          title="Change Facility"
          visible={this.props.visible}
          onCancel={this.props.onCancel}
          onOk = {this.props.onSubmit}
        >
        <div>{posts}</div>
        </Modal>
      </div>
    );
  }
}



export default FacilityModal;
