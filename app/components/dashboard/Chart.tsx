'use client'
import {
  CartesianGrid,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from 'recharts';

interface iAppProps {
  data: {
    date: string;
    revenue: number;
  }[];
}

export default function Chart({ data }: iAppProps) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey='date' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type={'monotone'} stroke="#3b82f6" activeDot={{ r: 8 }} dataKey='revenue' />
        
      </LineChart>
    </ResponsiveContainer>
  );
}
