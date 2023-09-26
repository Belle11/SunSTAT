import React from 'react';
import { Bar } from 'react-chartjs-2';

// Sample data (replace with your data)
const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Week Activity',
      data: [30, 40, 20, 60, 10, 50, 40], // Replace with your actual data
      backgroundColor: 'rgba(62, 152, 199, 0.7)',
    },
  ],
};

const WeekBarGraph: React.FC = () => {
  return (
    <div>
      <h2>1-Week Bar Graph</h2>
      <Bar data={data} />
    </div>
  );
};

export default WeekBarGraph;
