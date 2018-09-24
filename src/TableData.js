import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Table } from 'antd';
import { Modal,Button } from 'antd';
import AddUser from './AddUsers';
import {Input} from 'antd';
const { TextArea } = Input;

const columns = [{
  title: 'NUID',
  dataIndex: 'id',
   render: text => <a href="#">{text}</a>
}, {
  title: 'Name',
  dataIndex: 'name',
}, {
  title: 'Email',
  dataIndex: 'email',
},
{
  title: 'Date Added',
  dataIndex: 'date',
},
{
  title: 'Action',
  dataIndex: 'action',
}
];

class TableData extends React.Component {
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
    visible: false
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

//  selectRow = (record) => {
  //   const selectedRowKeys = [...this.state.selectedRowKeys];
  //   if (selectedRowKeys.indexOf(record.key) >= 0) {
  //     selectedRowKeys.splice(selectedRowKeys.indexOf(record.key), 1);
  //   } else {
  //     selectedRowKeys.push(record.key);
  //   }
  //   this.setState({ selectedRowKeys });
  // }
  // onSelectedRowKeysChange = (selectedRowKeys) => {
  //   this.setState({ selectedRowKeys });
  // }
  render() {
  {/*  const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectedRowKeysChange,
    }; */ }
    return (
<div>
<Button type="primary" onClick={this.showModal}>
  Add user
</Button>
<AddUser visible={this.state.visible} onCancel={this.handleCancel} onSubmit = {this.addUser} />
      <Table
    //rowSelection={rowSelection}
        columns={columns}
        dataSource={this.state.data}

      />
      </div>
    );
  }
}

export default TableData