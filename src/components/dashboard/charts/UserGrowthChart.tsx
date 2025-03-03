"use client";

import { Form, Select } from "antd";
const { Option } = Select;

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Jan", uv: 4000, sales: 2400, amt: 2400 },
  { name: "Feb", uv: 3000, sales: 1398, amt: 2210 },
  { name: "Mar", uv: 2000, sales: 9800, amt: 2290 },
  { name: "Apr", uv: 2780, sales: 3908, amt: 2000 },
  { name: "May", uv: 1890, sales: 4800, amt: 2181 },
  { name: "Jun", uv: 2390, sales: 3800, amt: 2500 },
  { name: "Jul", uv: 3490, sales: 4300, amt: 2100 },
  { name: "Aug", uv: 4200, sales: 4100, amt: 2300 },
  { name: "Sep", uv: 3100, sales: 4600, amt: 2200 },
  { name: "Oct", uv: 2600, sales: 3500, amt: 2000 },
  { name: "Nov", uv: 3900, sales: 5000, amt: 2500 },
  { name: "Dec", uv: 4400, sales: 5300, amt: 2800 },
];

const UserGrowthChart = () => {
  const [form] = Form.useForm();

  const onValuesChange = (changedValues: any, allValues: any) => {
    console.log("Current form values:", allValues);
  };

  return (
    <div className="w-full bg-[#171717] p-4 rounded-lg">
      <div className="flex items-center justify-between">
        <h3 className="text-white text-lg mb-4">Monthly Sales Overview</h3>
        <div className="w-[100px]">
          <Form
            form={form}
            name="control-hooks"
            onValuesChange={onValuesChange}
          >
            <Form.Item name="year" rules={[{ required: true }]}>
              <Select placeholder="Select a year">
                <Option value="2025">2025</Option>
                <Option value="2024">2024</Option>
                <Option value="2023">2023</Option>
                <Option value="2022">2022</Option>
                <Option value="2021">2021</Option>
                <Option value="2020">2020</Option>
              </Select>
            </Form.Item>
          </Form>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          barSize={30}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#555" />
          <XAxis dataKey="name" stroke="white" />
          <YAxis stroke="white" />
          <Tooltip
            contentStyle={{ backgroundColor: "#333", color: "#fff" }}
            cursor={{ fill: "transparent" }} // Removes hover background
          />
          <Legend />
          <Bar
            dataKey="sales"
            fill="#7DFF19"
            // @ts-ignore
            activeShape={null} // Disable active state
            background={{ fill: "transparent" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserGrowthChart;
