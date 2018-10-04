import React, {Component} from 'react';
import 'antd/dist/antd.css';
import { Table} from 'antd';
import { Button } from 'antd';
import AddUser from '../Users/AddUsers';
import axios from 'axios';

class TableData extends Component {

  state = {

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
      title: 'Date Added',
      dataIndex: 'date',
    },
    {
      title: 'Action',
      dataIndex: 'action',

      render: text =>  <select>{
             this.state.roles.map((obj) => {
                 return <option value={obj.id} key = {obj.id}>{obj.role}</option>
             })
          }</select>
     //         Roles <Icon type="down" />
     //       </a></span></Dropdown>
    }
  ],
    selectedRowKeys: [],
    loading: false,
    visible: false,
    roles:[]
  }


  componentDidMount(){

    axios.all([
    axios.get('https://floating-wildwood-49980.herokuapp.com/api/v1/users'),
    axios.get('https://floating-wildwood-49980.herokuapp.com/api/v1/roles')

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

   start = () => {
       this.setState({ loading: true });
       // ajax request after empty completing
       setTimeout(() => {
         this.setState({
           selectedRowKeys: [],
           loading: false,
         });
       }, 1000);
     }
     onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }

  render() {

    const { loading,selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      hideDefaultSelections: true,
      selections: [{
        key: 'all-data',
        text: 'All',
        onSelect: () => {
          this.setState({
            selectedRowKeys: [...Array(46).keys()], // 0...45
          });
        },
      },
      {
        key: 'None',
        text: 'Even',
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          this.setState({ selectedRowKeys: newSelectedRowKeys });
        },
      }],
      onSelection: this.onSelection,
    };
     const hasSelected = selectedRowKeys.length > 0;
    return (

<div>
<Button
            type="primary"
            onClick={this.start}
            disabled={!hasSelected}
            loading={loading}
          >
            Deactivate
          </Button><span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
<Button type="primary" onClick={this.showModal}>
  Add user
</Button>
<AddUser visible={this.state.visible} onCancel={this.handleCancel} onSubmit = {this.addUser} />
      <Table
        rowSelection={rowSelection}
        columns={this.state.columns}
        dataSource={this.state.data}
        key={Math.random()}

      />
      </div>
    );
  }
}

export default TableData
