import React from 'react';
import { Axis, Chart, Geom, Legend, Tooltip } from 'bizcharts';
import DataSet from '@antv/data-set';

const data = [
  {
    Date: '3/4/2019',
    'Base Scenario': 325000000,
    'Happy Scenario': 325000000,
    'Scenario 1': 325000000,
    'Scenario 2': 325000000,
    'Sad Scenario': 325000000,
  },
  {
    Date: '4/4/2019',
    'Base Scenario': 325000000,
    'Happy Scenario': 325000000,
    'Scenario 1': 325000000,
    'Scenario 2': 325000000,
    'Sad Scenario': 325000000,
  },
  {
    Date: '5/4/2019',
    'Base Scenario': 1635000000,
    'Happy Scenario': 1635000000,
    'Scenario 1': 885000000,
    'Scenario 2': 1635000000,
    'Sad Scenario': 1635000000,
  },
  {
    Date: '6/4/2019',
    'Base Scenario': 1515000000,
    'Happy Scenario': 1515000000,
    'Scenario 1': 885000000,
    'Scenario 2': 1515000000,
    'Sad Scenario': 1515000000,
  },
  {
    Date: '7/4/2019',
    'Base Scenario': 1515000000,
    'Happy Scenario': 1515000000,
    'Scenario 1': 885000000,
    'Scenario 2': 1515000000,
    'Sad Scenario': 1515000000,
  },
  {
    Date: '8/4/2019',
    'Base Scenario': 1515000000,
    'Happy Scenario': 1515000000,
    'Scenario 1': 885000000,
    'Scenario 2': 1515000000,
    'Sad Scenario': 1515000000,
  },
  {
    Date: '9/4/2019',
    'Base Scenario': 1515000000,
    'Happy Scenario': 1515000000,
    'Scenario 1': 885000000,
    'Scenario 2': 1515000000,
    'Sad Scenario': 1515000000,
  },
  {
    Date: '10/4/2019',
    'Base Scenario': 1515000000,
    'Happy Scenario': 1515000000,
    'Scenario 1': 885000000,
    'Scenario 2': 1515000000,
    'Sad Scenario': 1515000000,
  },
  {
    Date: '11/4/2019',
    'Base Scenario': 1515000000,
    'Happy Scenario': 1515000000,
    'Scenario 1': 885000000,
    'Scenario 2': 1515000000,
    'Sad Scenario': 1515000000,
  },
  {
    Date: '12/4/2019',
    'Base Scenario': 1515000000,
    'Happy Scenario': 1515000000,
    'Scenario 1': 885000000,
    'Scenario 2': 1515000000,
    'Sad Scenario': 1515000000,
  },
  {
    Date: '13/4/2019',
    'Base Scenario': 1515000000,
    'Happy Scenario': 1515000000,
    'Scenario 1': 885000000,
    'Scenario 2': 1515000000,
    'Sad Scenario': 1515000000,
  },
  {
    Date: '14/4/2019',
    'Base Scenario': 1515000000,
    'Happy Scenario': 1515000000,
    'Scenario 1': 885000000,
    'Scenario 2': 1515000000,
    'Sad Scenario': 1515000000,
  },
  {
    Date: '15/4/2019',
    'Base Scenario': 2705000000,
    'Happy Scenario': 2825000000,
    'Scenario 1': 1480000000,
    'Scenario 2': 2230000000,
    'Sad Scenario': 2825000000,
  },
  {
    Date: '16/4/2019',
    'Base Scenario': 3420000000,
    'Happy Scenario': 3540000000,
    'Scenario 1': 1445000000,
    'Scenario 2': 2945000000,
    'Sad Scenario': 3540000000,
  },
  {
    Date: '17/4/2019',
    'Base Scenario': 3300000000,
    'Happy Scenario': 3420000000,
    'Scenario 1': 1445000000,
    'Scenario 2': 2825000000,
    'Sad Scenario': 3420000000,
  },
  {
    Date: '18/4/2019',
    'Base Scenario': 4050000000,
    'Happy Scenario': 4170000000,
    'Scenario 1': 1445000000,
    'Scenario 2': 3575000000,
    'Sad Scenario': 4170000000,
  },
  {
    Date: '19/4/2019',
    'Base Scenario': 4050000000,
    'Happy Scenario': 4170000000,
    'Scenario 1': 1445000000,
    'Scenario 2': 3575000000,
    'Sad Scenario': 4170000000,
  },
  {
    Date: '20/4/2019',
    'Base Scenario': 3870000000,
    'Happy Scenario': 4050000000,
    'Scenario 1': 1385000000,
    'Scenario 2': 3515000000,
    'Sad Scenario': 4110000000,
  },
  {
    Date: '21/4/2019',
    'Base Scenario': 3870000000,
    'Happy Scenario': 4050000000,
    'Scenario 1': 1385000000,
    'Scenario 2': 3515000000,
    'Sad Scenario': 4110000000,
  },
  {
    Date: '22/4/2019',
    'Base Scenario': 3870000000,
    'Happy Scenario': 4050000000,
    'Scenario 1': 1385000000,
    'Scenario 2': 3515000000,
    'Sad Scenario': 4110000000,
  },
  {
    Date: '23/4/2019',
    'Base Scenario': 3870000000,
    'Happy Scenario': 4050000000,
    'Scenario 1': 1385000000,
    'Scenario 2': 3515000000,
    'Sad Scenario': 4110000000,
  },
  {
    Date: '24/4/2019',
    'Base Scenario': 3870000000,
    'Happy Scenario': 4050000000,
    'Scenario 1': 1385000000,
    'Scenario 2': 3515000000,
    'Sad Scenario': 4110000000,
  },
  {
    Date: '25/4/2019',
    'Base Scenario': 3870000000,
    'Happy Scenario': 4050000000,
    'Scenario 1': 1385000000,
    'Scenario 2': 3515000000,
    'Sad Scenario': 4110000000,
  },
  {
    Date: '26/4/2019',
    'Base Scenario': 3870000000,
    'Happy Scenario': 4050000000,
    'Scenario 1': 1385000000,
    'Scenario 2': 3515000000,
    'Sad Scenario': 4110000000,
  },
  {
    Date: '27/4/2019',
    'Base Scenario': 3870000000,
    'Happy Scenario': 4050000000,
    'Scenario 1': 1385000000,
    'Scenario 2': 3515000000,
    'Sad Scenario': 4110000000,
  },
  {
    Date: '28/4/2019',
    'Base Scenario': 3870000000,
    'Happy Scenario': 4050000000,
    'Scenario 1': 1385000000,
    'Scenario 2': 3515000000,
    'Sad Scenario': 4110000000,
  },
  {
    Date: '29/4/2019',
    'Base Scenario': 3870000000,
    'Happy Scenario': 4050000000,
    'Scenario 1': 1385000000,
    'Scenario 2': 3515000000,
    'Sad Scenario': 4110000000,
  },
  {
    Date: '30/4/2019',
    'Base Scenario': 4310000000,
    'Happy Scenario': 4490000000,
    'Scenario 1': 1980000000,
    'Scenario 2': 3515000000,
    'Sad Scenario': 4585000000,
  },
  {
    Date: '1/5/2019',
    'Base Scenario': 4310000000,
    'Happy Scenario': 4490000000,
    'Scenario 1': 1980000000,
    'Scenario 2': 3515000000,
    'Sad Scenario': 4585000000,
  },
  {
    Date: '2/5/2019',
    'Base Scenario': 4310000000,
    'Happy Scenario': 4490000000,
    'Scenario 1': 1980000000,
    'Scenario 2': 3515000000,
    'Sad Scenario': 4585000000,
  },
  {
    Date: '3/5/2019',
    'Base Scenario': 4310000000,
    'Happy Scenario': 4490000000,
    'Scenario 1': 1980000000,
    'Scenario 2': 3515000000,
    'Sad Scenario': 4585000000,
  },
  {
    Date: '4/5/2019',
    'Base Scenario': 4310000000,
    'Happy Scenario': 4490000000,
    'Scenario 1': 1980000000,
    'Scenario 2': 3515000000,
    'Sad Scenario': 4585000000,
  },
  {
    Date: '5/5/2019',
    'Base Scenario': 5655000000,
    'Happy Scenario': 5835000000,
    'Scenario 1': 3325000000,
    'Scenario 2': 4860000000,
    'Sad Scenario': 5930000000,
  },
  {
    Date: '6/5/2019',
    'Base Scenario': 5655000000,
    'Happy Scenario': 5835000000,
    'Scenario 1': 3325000000,
    'Scenario 2': 4860000000,
    'Sad Scenario': 5930000000,
  },
  {
    Date: '7/5/2019',
    'Base Scenario': 5655000000,
    'Happy Scenario': 5835000000,
    'Scenario 1': 3325000000,
    'Scenario 2': 4860000000,
    'Sad Scenario': 5930000000,
  },
  {
    Date: '8/5/2019',
    'Base Scenario': 5655000000,
    'Happy Scenario': 5835000000,
    'Scenario 1': 3325000000,
    'Scenario 2': 4860000000,
    'Sad Scenario': 5930000000,
  },
  {
    Date: '9/5/2019',
    'Base Scenario': 5655000000,
    'Happy Scenario': 5835000000,
    'Scenario 1': 3325000000,
    'Scenario 2': 4860000000,
    'Sad Scenario': 5930000000,
  },
  {
    Date: '10/5/2019',
    'Base Scenario': 5655000000,
    'Happy Scenario': 5835000000,
    'Scenario 1': 3325000000,
    'Scenario 2': 4860000000,
    'Sad Scenario': 5930000000,
  },
  {
    Date: '11/5/2019',
    'Base Scenario': 5655000000,
    'Happy Scenario': 5835000000,
    'Scenario 1': 3325000000,
    'Scenario 2': 4860000000,
    'Sad Scenario': 5930000000,
  },
  {
    Date: '12/5/2019',
    'Base Scenario': 5655000000,
    'Happy Scenario': 5835000000,
    'Scenario 1': 3325000000,
    'Scenario 2': 4860000000,
    'Sad Scenario': 5930000000,
  },
  {
    Date: '13/5/2019',
    'Base Scenario': 5655000000,
    'Happy Scenario': 5835000000,
    'Scenario 1': 3325000000,
    'Scenario 2': 4860000000,
    'Sad Scenario': 5930000000,
  },
  {
    Date: '14/5/2019',
    'Base Scenario': 5655000000,
    'Happy Scenario': 5835000000,
    'Scenario 1': 3325000000,
    'Scenario 2': 4860000000,
    'Sad Scenario': 5930000000,
  },
  {
    Date: '15/5/2019',
    'Base Scenario': 5500000000,
    'Happy Scenario': 5680000000,
    'Scenario 1': 3170000000,
    'Scenario 2': 4705000000,
    'Sad Scenario': 5775000000,
  },
  {
    Date: '16/5/2019',
    'Base Scenario': 6250000000,
    'Happy Scenario': 6430000000,
    'Scenario 1': 3920000000,
    'Scenario 2': 5455000000,
    'Sad Scenario': 6525000000,
  },
  {
    Date: '17/5/2019',
    'Base Scenario': 6250000000,
    'Happy Scenario': 6430000000,
    'Scenario 1': 3920000000,
    'Scenario 2': 5455000000,
    'Sad Scenario': 6525000000,
  },
  {
    Date: '18/5/2019',
    'Base Scenario': 6250000000,
    'Happy Scenario': 6430000000,
    'Scenario 1': 3920000000,
    'Scenario 2': 5455000000,
    'Sad Scenario': 6525000000,
  },
  {
    Date: '19/5/2019',
    'Base Scenario': 6250000000,
    'Happy Scenario': 6430000000,
    'Scenario 1': 3920000000,
    'Scenario 2': 5455000000,
    'Sad Scenario': 6525000000,
  },
  {
    Date: '20/5/2019',
    'Base Scenario': 6250000000,
    'Happy Scenario': 6395000000,
    'Scenario 1': 3885000000,
    'Scenario 2': 5420000000,
    'Sad Scenario': 6490000000,
  },
  {
    Date: '21/5/2019',
    'Base Scenario': 6250000000,
    'Happy Scenario': 6395000000,
    'Scenario 1': 3885000000,
    'Scenario 2': 5420000000,
    'Sad Scenario': 6490000000,
  },
  {
    Date: '22/5/2019',
    'Base Scenario': 6250000000,
    'Happy Scenario': 6395000000,
    'Scenario 1': 3885000000,
    'Scenario 2': 5420000000,
    'Sad Scenario': 6490000000,
  },
  {
    Date: '23/5/2019',
    'Base Scenario': 6250000000,
    'Happy Scenario': 6395000000,
    'Scenario 1': 3885000000,
    'Scenario 2': 5420000000,
    'Sad Scenario': 6490000000,
  },
  {
    Date: '24/5/2019',
    'Base Scenario': 6250000000,
    'Happy Scenario': 6395000000,
    'Scenario 1': 3885000000,
    'Scenario 2': 5420000000,
    'Sad Scenario': 6490000000,
  },
  {
    Date: '25/5/2019',
    'Base Scenario': 6250000000,
    'Happy Scenario': 6395000000,
    'Scenario 1': 3885000000,
    'Scenario 2': 5420000000,
    'Sad Scenario': 6490000000,
  },
  {
    Date: '26/5/2019',
    'Base Scenario': 6250000000,
    'Happy Scenario': 6395000000,
    'Scenario 1': 3885000000,
    'Scenario 2': 5420000000,
    'Sad Scenario': 6490000000,
  },
  {
    Date: '27/5/2019',
    'Base Scenario': 6250000000,
    'Happy Scenario': 6395000000,
    'Scenario 1': 3885000000,
    'Scenario 2': 5420000000,
    'Sad Scenario': 6490000000,
  },
  {
    Date: '28/5/2019',
    'Base Scenario': 6250000000,
    'Happy Scenario': 6395000000,
    'Scenario 1': 3885000000,
    'Scenario 2': 5420000000,
    'Sad Scenario': 6490000000,
  },
  {
    Date: '29/5/2019',
    'Base Scenario': 6250000000,
    'Happy Scenario': 6395000000,
    'Scenario 1': 3885000000,
    'Scenario 2': 5420000000,
    'Sad Scenario': 6490000000,
  },
  {
    Date: '30/5/2019',
    'Base Scenario': 6250000000,
    'Happy Scenario': 6395000000,
    'Scenario 1': 3885000000,
    'Scenario 2': 5420000000,
    'Sad Scenario': 6490000000,
  },
  {
    Date: '31/5/2019',
    'Base Scenario': 6250000000,
    'Happy Scenario': 6395000000,
    'Scenario 1': 3885000000,
    'Scenario 2': 5420000000,
    'Sad Scenario': 6490000000,
  },
  {
    Date: '1/6/2019',
    'Base Scenario': 6250000000,
    'Happy Scenario': 6275000000,
    'Scenario 1': 3765000000,
    'Scenario 2': 5300000000,
    'Sad Scenario': 6370000000,
  },
  {
    Date: '2/6/2019',
    'Base Scenario': 6250000000,
    'Happy Scenario': 6275000000,
    'Scenario 1': 3765000000,
    'Scenario 2': 5300000000,
    'Sad Scenario': 6370000000,
  },
  {
    Date: '3/6/2019',
    'Base Scenario': 6250000000,
    'Happy Scenario': 6275000000,
    'Scenario 1': 3765000000,
    'Scenario 2': 5300000000,
    'Sad Scenario': 6370000000,
  },
  {
    Date: '4/6/2019',
    'Base Scenario': 6250000000,
    'Happy Scenario': 6275000000,
    'Scenario 1': 3765000000,
    'Scenario 2': 5300000000,
    'Sad Scenario': 6370000000,
  },
  {
    Date: '5/6/2019',
    'Base Scenario': 6250000000,
    'Happy Scenario': 9025000000,
    'Scenario 1': 6515000000,
    'Scenario 2': 8050000000,
    'Sad Scenario': 9120000000,
  },
  {
    Date: '6/6/2019',
    'Base Scenario': 6250000000,
    'Happy Scenario': 9025000000,
    'Scenario 1': 6515000000,
    'Scenario 2': 8050000000,
    'Sad Scenario': 9120000000,
  },
  {
    Date: '7/6/2019',
    'Base Scenario': 6250000000,
    'Happy Scenario': 9025000000,
    'Scenario 1': 6515000000,
    'Scenario 2': 8050000000,
    'Sad Scenario': 9120000000,
  },
  {
    Date: '8/6/2019',
    'Base Scenario': 6250000000,
    'Happy Scenario': 9025000000,
    'Scenario 1': 6515000000,
    'Scenario 2': 8050000000,
    'Sad Scenario': 9120000000,
  },
  {
    Date: '9/6/2019',
    'Base Scenario': 6250000000,
    'Happy Scenario': 9025000000,
    'Scenario 1': 6515000000,
    'Scenario 2': 8050000000,
    'Sad Scenario': 9120000000,
  },
  {
    Date: '10/6/2019',
    'Base Scenario': 6250000000,
    'Happy Scenario': 9025000000,
    'Scenario 1': 6515000000,
    'Scenario 2': 8050000000,
    'Sad Scenario': 9120000000,
  },
  {
    Date: '11/6/2019',
    'Base Scenario': 6250000000,
    'Happy Scenario': 9025000000,
    'Scenario 1': 6515000000,
    'Scenario 2': 8050000000,
    'Sad Scenario': 9120000000,
  },
  {
    Date: '12/6/2019',
    'Base Scenario': 6250000000,
    'Happy Scenario': 9025000000,
    'Scenario 1': 6515000000,
    'Scenario 2': 8050000000,
    'Sad Scenario': 9120000000,
  },
  {
    Date: '13/6/2019',
    'Base Scenario': 6250000000,
    'Happy Scenario': 9025000000,
    'Scenario 1': 6515000000,
    'Scenario 2': 8050000000,
    'Sad Scenario': 9120000000,
  },
  {
    Date: '14/6/2019',
    'Base Scenario': 6250000000,
    'Happy Scenario': 9025000000,
    'Scenario 1': 6515000000,
    'Scenario 2': 8050000000,
    'Sad Scenario': 9120000000,
  },
  {
    Date: '15/6/2019',
    'Base Scenario': 6250000000,
    'Happy Scenario': 9490000000,
    'Scenario 1': 6980000000,
    'Scenario 2': 8515000000,
    'Sad Scenario': 9585000000,
  },
  {
    Date: '16/6/2019',
    'Base Scenario': 6250000000,
    'Happy Scenario': 10990000000,
    'Scenario 1': 8480000000,
    'Scenario 2': 10015000000,
    'Sad Scenario': 11085000000,
  },
  {
    Date: '17/6/2019',
    'Base Scenario': 6250000000,
    'Happy Scenario': 10990000000,
    'Scenario 1': 8480000000,
    'Scenario 2': 10015000000,
    'Sad Scenario': 11085000000,
  },
  {
    Date: '18/6/2019',
    'Base Scenario': 6250000000,
    'Happy Scenario': 10990000000,
    'Scenario 1': 8480000000,
    'Scenario 2': 10015000000,
    'Sad Scenario': 11085000000,
  },
  {
    Date: '19/6/2019',
    'Base Scenario': 6250000000,
    'Happy Scenario': 10990000000,
    'Scenario 1': 8480000000,
    'Scenario 2': 10015000000,
    'Sad Scenario': 11085000000,
  },
  {
    Date: '20/6/2019',
    'Base Scenario': 6250000000,
    'Happy Scenario': 11740000000,
    'Scenario 1': 9230000000,
    'Scenario 2': 10765000000,
    'Sad Scenario': 11835000000,
  },
  {
    Date: '21/6/2019',
    'Base Scenario': 6250000000,
    'Happy Scenario': 11740000000,
    'Scenario 1': 9230000000,
    'Scenario 2': 10765000000,
    'Sad Scenario': 11835000000,
  },
  {
    Date: '22/6/2019',
    'Base Scenario': 6250000000,
    'Happy Scenario': 11740000000,
    'Scenario 1': 9230000000,
    'Scenario 2': 10765000000,
    'Sad Scenario': 11835000000,
  },
  {
    Date: '23/6/2019',
    'Base Scenario': 6250000000,
    'Happy Scenario': 11740000000,
    'Scenario 1': 9230000000,
    'Scenario 2': 10765000000,
    'Sad Scenario': 11835000000,
  },
  {
    Date: '24/6/2019',
    'Base Scenario': 6250000000,
    'Happy Scenario': 11740000000,
    'Scenario 1': 9230000000,
    'Scenario 2': 10765000000,
    'Sad Scenario': 11835000000,
  },
  {
    Date: '25/6/2019',
    'Base Scenario': 6250000000,
    'Happy Scenario': 11740000000,
    'Scenario 1': 9230000000,
    'Scenario 2': 10765000000,
    'Sad Scenario': 11835000000,
  },
  {
    Date: '26/6/2019',
    'Base Scenario': 6250000000,
    'Happy Scenario': 11740000000,
    'Scenario 1': 9230000000,
    'Scenario 2': 10765000000,
    'Sad Scenario': 11835000000,
  },
  {
    Date: '27/6/2019',
    'Base Scenario': 6250000000,
    'Happy Scenario': 11740000000,
    'Scenario 1': 9230000000,
    'Scenario 2': 10765000000,
    'Sad Scenario': 11835000000,
  },
  {
    Date: '28/6/2019',
    'Base Scenario': 6250000000,
    'Happy Scenario': 11740000000,
    'Scenario 1': 9230000000,
    'Scenario 2': 10765000000,
    'Sad Scenario': 11835000000,
  },
  {
    Date: '29/6/2019',
    'Base Scenario': 6250000000,
    'Happy Scenario': 11740000000,
    'Scenario 1': 9230000000,
    'Scenario 2': 10765000000,
    'Sad Scenario': 11835000000,
  },
  {
    Date: '30/6/2019',
    'Base Scenario': 6250000000,
    'Happy Scenario': 11740000000,
    'Scenario 1': 9230000000,
    'Scenario 2': 10765000000,
    'Sad Scenario': 11835000000,
  },
  {
    Date: '1/7/2019',
    'Base Scenario': 6250000000,
    'Happy Scenario': 11740000000,
    'Scenario 1': 9230000000,
    'Scenario 2': 10765000000,
    'Sad Scenario': 11835000000,
  },
];
const ds = new DataSet();
const dv = ds.createView().source(data);

dv.transform({
  type: 'fold',
  fields: ['Base Scenario', 'Sad Scenario', 'Happy Scenario', 'Scenario 1', 'Scenario 2'],
  key: 'scenario',
  value: 'amount',
});
console.log(dv);
const cols = {
  Date: {
    range: [0, 1],
    tickCount: 10,
  },
};

const DataChart = () => (
  <Chart
    height={400}
    data={dv}
    scale={cols}
    forceFit
    // padding={[20, 'auto', 30, 'auto']} // Automatic calculation chart's padding which include legend、axis's width and height.
  >
    <Legend />
    <Axis name="Date" title />
    <Axis
      name="amount"
      label={{
        formatter: val => `${val.slice(0, 5)}`,
      }}
    />
    <Tooltip
      crosshairs={{
        type: 'y',
      }}
    />
    <Geom type="line" position="Date*amount" size={2} color="scenario" />
    <Geom
      type="point"
      position="Date*amount"
      size={4}
      shape="circle"
      color="scenario"
      style={{
        stroke: '#fff',
        lineWidth: 1,
      }}
    />
  </Chart>
);

export default DataChart;
