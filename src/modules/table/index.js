import React, { useState } from 'react';
import { Table, Button, Icon } from 'antd';
import moment from 'moment';
import data from './mockData';
import './index.css';
import { EditableCell, EditableFormRow } from './EditableCell';

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};

const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    width: 110,
  },
  {
    title: 'Description',
    dataIndex: 'description',
    width: 200,
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    width: 150,
  },
  {
    title: 'Base',
    dataIndex: 'base',
    width: 150,
    isCheckbox: true,
  },
  {
    title: 'S1',
    dataIndex: 's1',
    width: 100,
    isCheckbox: true,
  },
  {
    title: 'S2',
    dataIndex: 's2',
    width: 100,
    isCheckbox: true,
  },
  {
    title: 'Happy',
    dataIndex: 'happy',
    width: 100,
    isCheckbox: true,
  },
  {
    title: 'Sad',
    dataIndex: 'sad',
    width: 100,
    isCheckbox: true,
  },
];

const EditableTable = () => {
  const [dataSource, setDataSource] = useState(data);
  const [count, setCount] = useState(data.length);

  const handleAdd = () => {
    const newData = {
      id: count,
      date: moment(),
      description: '',
      amount: 0,
      base: null,
      happy: null,
      s1: null,
      s2: null,
      sad: null,
      isEditing: true,
    };
    setCount(count + 1);
    setDataSource([...dataSource, newData]);
  };

  const handleSave = row => {
    const newData = [...dataSource];
    const index = newData.findIndex(item => row.id === item.id);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setDataSource(newData);
  };

  const components = {
    body: {
      row: EditableFormRow,
      cell: EditableCell,
    },
  };

  const revisedColumns = columns.map(col => {
    return {
      ...col,
      onCell: record => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        isCheckbox: col.isCheckbox,
        handleSave,
      }),
    };
  });
  return (
    <div>
      <Button onClick={handleAdd} type="dashed" style={{ marginBottom: 16 }}>
        <Icon type="plus" /> Add a row
      </Button>
      <Table
        components={components}
        rowClassName={() => 'editable-row'}
        bordered
        dataSource={dataSource}
        columns={revisedColumns}
        pagination={{ pageSize: 50 }}
        scroll={{ y: 600 }}
        rowSelection={rowSelection}
        rowKey="id"
      />
    </div>
  );
};

export default EditableTable;
