import React, {Component} from 'react';
import 'antd/dist/antd.css';
import { Table , Icon} from 'antd';
import { Button } from 'antd';
import AddUser from '../Users/AddUsers';
import axios from 'axios';
import { Menu, Dropdown } from 'antd';

const menu = (
  <Menu selectable>
    <Menu.Item key="0">
      <a>Admin</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a>Developer</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">Product</Menu.Item>
  </Menu>
);



const columns = [{
  title: 'NUID',
  dataIndex: 'id',
   render: text => <a>{text}</a>
}, {
  title: 'Name',
  dataIndex: 'name',
}, {
  title: 'Email',
  dataIndex: 'email',
},
{
  title: 'Address',
  dataIndex: 'date',
},
{
  title: 'Action',
  dataIndex: 'action',
// render: text =>  <Dropdown overlay={menu} trigger={['click']}><span><a href="javascript:;" className="ant-dropdown-link">
//         Roles <Icon type="down" />
//       </a></span></Dropdown>
}
];

class TableData extends Component {

  state = {
    // data : [{
    //   id: '1',
    //   name: 'John Brown',
    //   email: 'abc@gmail.com',
    //   date: 'New York No. 1 Lake Park',
    // }, {
    //   id: '2',
    //   name: 'Jim Green',
    //   email: 'pqr@gmail.com',
    //   date: 'London No. 1 Lake Park',
    // }, {
    //   id: '3',
    //   name: 'Joe Black',
    //   email: 'jjj@gmail.com',
    //   date: 'Sidney No. 1 Lake Park',
    // }, {
    //   id: '4',
    //   name: 'Disabled User',
    //   email: 'llj@gmail.com',
    //   date: 'Sidney No. 1 Lake Park',
    // }],
    data : [],
    columns : [{
      title: 'NUID',
      dataIndex: 'nuid',
       render: text => <a>{text}</a>
    }, {
      title: 'Name',
      dataIndex: 'name',
    }, {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Address',
      dataIndex: 'date',
    },
    {
      title: 'Action',
      dataIndex: 'action',

      render: text =>  <select>{
             this.state.roles.map((obj) => {
                 return <option value={obj.id}>{obj.role}</option>
             })
          }</select>
     //         Roles <Icon type="down" />
     //       </a></span></Dropdown>
    }
  ],
    selectedRowKeys: [],
    visible: false,
    roles:[]
  }


  componentDidMount(){

    axios.all([
    axios.get('https://evening-sea-55464.herokuapp.com/api/v1/users'),
    axios.get('https://evening-sea-55464.herokuapp.com/api/v1/roles')
  ])
  .then(axios.spread((usersRes, rolesRes) => {
    this.setState({data:usersRes.data});
    this.setState({roles:rolesRes.data})
  }));
     // axios.get('https://evening-sea-55464.herokuapp.com/api/v1/user_roles').then(res => {
     //   this.setState({data:res.data});
     //   console.log(res.data)
     // })}
     //
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

  selectRow = (record) => {
     const selectedRowKeys = [...this.state.selectedRowKeys];
     if (selectedRowKeys.indexOf(record.key) >= 0) {
       selectedRowKeys.splice(selectedRowKeys.indexOf(record.key), 1);
     } else {
       selectedRowKeys.push(record.key);
     }
     this.setState({ selectedRowKeys });
   }
   onSelectedRowKeysChange = (selectedRowKeys) => {
     this.setState({ selectedRowKeys });
   }

  render() {

    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectedRowKeysChange,
    };
    return (
<div>
<Button type="primary" onClick={this.showModal}>
  Add user
</Button>
<AddUser visible={this.state.visible} onCancel={this.handleCancel} onSubmit = {this.addUser} />
      <Table
        rowSelection={rowSelection}
        columns={this.state.columns}
        dataSource={this.state.data}
        rowKey="uid"

      />
      </div>
    );
  }
}

export default TableData
