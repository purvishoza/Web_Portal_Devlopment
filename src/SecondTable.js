import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Table } from 'antd';
import { Button } from 'antd';
import { Switch, Icon } from 'antd';

const columns = [ {
  title: 'Insight Name',
  dataIndex: 'name',
}, {
  title: 'Threshold value',
  dataIndex: 'threshold',
},
{
  title: 'Enable/Disable',
  render: text => <Switch checkedChildren="On" unCheckedChildren="Off" onClick = {this.handleClick}   defaultunChecked />,
  dataIndex: 'visibility',
}
];

const data = [{
  id: '1',
  name: 'John Brown',

}, {
  id: '2',
  name: 'Jim Green',

}, {
  id: '3',
  name: 'Joe Black',

}, {
  id: '4',
  name: 'Disabled User',

}];

class SecondTable extends React.Component {
  state = {
    selectedRowKeys: [],

  };

  handleClick = (e) => {
    this.setState({
      color: 'green'
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
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectedRowKeysChange,
    };
    return (
<div>
      <Button type="primary" onClick={this.showModal}>
        Save
      </Button>
      <Table

        columns={columns}
        dataSource={data}

      />
      </div>
    );
  }
}

export default SecondTable
