import React from 'react';
import { Axis, Chart, Geom, Legend, Tooltip } from 'bizcharts';
import DataSet from '@antv/data-set';

const dataTransform = data => {
  const ds = new DataSet();
  const dv = ds.createView().source(data);
  dv.transform({
    type: 'fold',
    fields: ['Base Scenario', 'Sad Scenario', 'Happy Scenario', 'Scenario 1', 'Scenario 2'],
    key: 'scenario',
    value: 'amount',
  });
  console.log(dv, 'dv');
  return dv;
};

const cols = {
  Date: {
    range: [0, 1],
    tickCount: 10,
  },
};

const DataChart = ({ data }) => (
  <div>
    <h3>Cashflow Chart</h3>
    <Chart height={400} data={dataTransform(data)} scale={cols} forceFit>
      <Legend />
      <Axis name="Date" title />
      <Axis
        name="amount"
        label={{
          formatter: val => `${val} mil VND`,
        }}
      />
      <Tooltip
        crosshairs={{
          type: 'y',
        }}
      />
      <Geom type="line" position="date*amount" size={2} color="scenario" />
      <Geom
        type="point"
        position="date*amount"
        size={4}
        shape="circle"
        color="scenario"
        style={{
          stroke: '#fff',
          lineWidth: 1,
        }}
      />
    </Chart>
  </div>
);

export default DataChart;
