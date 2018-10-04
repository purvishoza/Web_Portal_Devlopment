import { Modal} from 'antd';
import React, { Component } from 'react';
import {Input} from 'antd';
import axios from 'axios';
const { TextArea } = Input;




class AddUsers extends Component {
  state = {
    id: null,
    name: null,
    roles:[]
   }

   componentDidMount(){
     axios.get('https://floating-wildwood-49980.herokuapp.com/api/v1/roles').then(res => {
       this.setState({roles:res.data});
       console.log(this.state.roles)
     })}


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
    return (
      <div>
        <Modal
          title="Add User(s) to Insight Driven Applications"
          visible={this.props.visible}
          onOk={this.handleAddUser}
          onCancel={this.props.onCancel}
          okText="Add User"
          cancelText="Cancel"
        >
          <p>Users</p>
          <TextArea placeholder="Name, email-address or NUID(s)" name = "name" onChange = {this.handleChange} value = {this.state.name} rows={4} />
          <p>Role Assignment</p>
          <select>{
                 this.state.roles.map((obj) => {
                     return <option value={obj.id} key={obj.id}>{obj.role}</option>
                 })
              }</select>

        </Modal>
      </div>
    );
  }
}



export default AddUsers;
