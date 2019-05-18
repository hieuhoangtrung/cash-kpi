import React, { useState } from 'react';
import { Table, Button, Icon } from 'antd';
import moment from 'moment';
import { isString, orderBy } from 'lodash/fp';
import data from './mockData';
import './index.css';
import { EditableCell, EditableFormRow } from './EditableCell';
import Chart from '../chart';

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
    width: 150,
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
    width: 100,
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

const sampleData = [
  {
    id: 0,
    date: '01/01/2011',
    desc: 'Luong',
    amount: 1234,
    scenarios: [{ base: true }, { happy: false }, { sad: true }],
  },
];

const cashFlowCalculate = inputData => {
  const finedData = inputData.reduce((acc, item) => {
    if (isString(item.date) && !!item.amount) {
      const i = acc.findIndex(a => a.date === item.date);
      if (i > -1) {
        acc[i]['Base Scenario'] += item.base ? item.amount : 0;
        acc[i]['Happy Scenario'] += item.happy ? item.amount : 0;
        acc[i]['Scenario 1'] += item.s1 ? item.amount : 0;
        acc[i]['Scenario 2'] += item.s2 ? item.amount : 0;
        acc[i]['Sad Scenario'] += item.sad ? item.amount : 0;
      } else {
        const init = {
          date: item.date,
          'Base Scenario': item.base ? item.amount : 0,
          'Happy Scenario': item.happy ? item.amount : 0,
          'Scenario 1': item.s1 ? item.amount : 0,
          'Scenario 2': item.s2 ? item.amount : 0,
          'Sad Scenario': item.sad ? item.amount : 0,
        };
        acc.push(init);
      }
    }
    return acc;
  }, []);

  const sortedData = orderBy(a => moment(a.date, 'DD/MM/YYYY').format('YYYYMMDD'), ['asc'])(finedData);

  const accumulatedData = sortedData.reduce((acc, item, i) => {
    if (i === 0) {
      acc.push(item);
    } else {
      const newItem = {
        date: item.date,
        'Base Scenario': item['Base Scenario'] + acc[i - 1]['Base Scenario'],
        'Happy Scenario': item['Happy Scenario'] + acc[i - 1]['Happy Scenario'],
        'Scenario 1': item['Scenario 1'] + acc[i - 1]['Scenario 1'],
        'Scenario 2': item['Scenario 2'] + acc[i - 1]['Scenario 2'],
        'Sad Scenario': item['Sad Scenario'] + acc[i - 1]['Sad Scenario'],
      };
      acc.push(newItem);
    }
    return acc;
  }, []);

  return accumulatedData;
};

const EditableTable = () => {
  const [dataSource, setDataSource] = useState(data);
  const [count, setCount] = useState(data.length);

  const chartData = cashFlowCalculate(dataSource);

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
      <Chart data={chartData} />
      <Button onClick={handleAdd} type="dashed" style={{ marginBottom: 16 }}>
        <Icon type="plus" /> Add a row
      </Button>
      <Table
        components={components}
        rowClassName={() => 'editable-row'}
        bordered
        dataSource={dataSource}
        columns={revisedColumns}
        pagination={{ pageSize: 50, position: 'bottom' }}
        // scroll={{ y: 600 }}
        // rowSelection={rowSelection}
        rowKey="id"
        title={() => <strong>Table Data</strong>}
      />
    </div>
  );
};

export default EditableTable;
