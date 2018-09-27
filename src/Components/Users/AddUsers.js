import { Modal} from 'antd';
import React, { Component } from 'react';
import {Input} from 'antd';
import { Menu, Dropdown, Icon } from 'antd';
const { TextArea } = Input;


const menu = (
  <Menu selectable>
    <Menu.Item key="0">
      <a >Admin</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a >Developer</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">Product</Menu.Item>
  </Menu>
);

class AddUsers extends Component {
  state = {
    id: null,
    name: null,
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
          <Dropdown overlay={menu} trigger={['click']}><span><a href="javascript:;" className="ant-dropdown-link">
                  Roles <Icon type="down" />
                </a></span></Dropdown>

        </Modal>
      </div>
    );
  }
}



export default AddUsers;
