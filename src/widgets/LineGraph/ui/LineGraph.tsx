import {
  LineChart,
  ResponsiveContainer,
  Line,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts'
import { FC } from 'react'

type LineGraphData = {
  name: string
  value: number
}
interface LineGraphProps {
  data: LineGraphData[]
}

export const LineGraph: FC<LineGraphProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="90%" height="50%" style={{ fontSize: 12 }}>
      <LineChart width={200} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
