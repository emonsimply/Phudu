import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const Chart = ({ singleDoctor }) => {

  const chartData = [
    {
      name: singleDoctor.name,
      fee: 950,
    },
  ];

  return (
    <div>
      <BarChart
        width={300}
        height={250}
        data={chartData}
        margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar
          dataKey="fee"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: 'top' }}
        >
          <Cell fill={colors[0]} />
        </Bar>
      </BarChart>
    </div>
  );
};

export default Chart;
