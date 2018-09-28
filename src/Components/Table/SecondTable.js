import React, {Component} from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import axios from 'axios';
import {Switch } from 'antd';
import FacilityModal from './FacilityModal';

const columns = [ {
  title: 'Insight Name',
  dataIndex: 'name',
}, {
  title: 'Threshold value',
  dataIndex: 'threshold',
},
{
  title: 'Enable/Disable',
  render: text => <Switch checkedChildren="On" uncheckedchildren="Off" onClick = {this.handleClick}   defaultunchecked = "true" />,
  dataIndex: 'visibility',
}
];


class SecondTable extends Component {
  state = {
    data : [{
      id: '1',
      name: 'John Brown',
      email: 'abc@gmail.com',
      date: 'New York No. 1 Lake Park',
    }, {
      id: '2',
      name: 'Jim Green',
      email: 'pqr@gmail.com',
      date: 'London No. 1 Lake Park',
    }, {
      id: '3',
      name: 'Joe Black',
      email: 'jjj@gmail.com',
      date: 'Sidney No. 1 Lake Park',
    }, {
      id: '4',
      name: 'Disabled User',
      email: 'llj@gmail.com',
      date: 'Sidney No. 1 Lake Park',
    }],
    selectedRowKeys: [],
    visible: false,
    city:null
  }
  componentDidMount()
  {
    const id = this.props.match.params.city_id
    console.log("Test" + id)
    axios.get('http://100.124.68.138:8080/api/v1/cities/'+id).then(res => {
      this.setState({city:res.data.name}) // this is a callback function
    });
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleAddUser = (e) => {
    e.preventDefault();
    this.setState({
      visible: false,
      city:this.state.cit
    });

  }

  handleCancel = (e) => {

    this.setState({
      visible: false,

    });

  }

  addUser = (user) => {
    user.id = Math.random;
    let data = [...this.state.data, user]

    this.setState({
      data: data,
      visible:false
    })
  }
  render() {

    return (
<div>
<a className = 'Link' onClick = {this.showModal}>
  Change Facility
</a>
<div className = 'align1'>{this.state.city}</div>
<FacilityModal visible={this.state.visible} onCancel={this.handleCancel} onSubmit = {this.handleCancel} property = {this.props}/>
      <Table
        columns={columns}
        dataSource={this.state.data}
      rowKey={this.props.match.params.city_id}
      />
      </div>
    );
  }
}

export default SecondTable
