"use client";

import { Form, Select } from "antd";
const { Option } = Select;

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Jan", rev: 4000, pv: 2400, amt: 2400 },
  { name: "Feb", rev: 3000, pv: 1398, amt: 2210 },
  { name: "Mar", rev: 2000, pv: 9800, amt: 2290 },
  { name: "Apr", rev: 2780, pv: 3908, amt: 2000 },
  { name: "May", rev: 1890, pv: 4800, amt: 2181 },
  { name: "Jun", rev: 2390, pv: 3800, amt: 2500 },
  { name: "Jul", rev: 3490, pv: 4300, amt: 2100 },
  { name: "Aug", rev: 4200, pv: 4100, amt: 2300 },
  { name: "Sep", rev: 3100, pv: 4600, amt: 2200 },
  { name: "Oct", rev: 2600, pv: 3500, amt: 2000 },
  { name: "Nov", rev: 3900, pv: 5000, amt: 2500 },
  { name: "Dec", rev: 4400, pv: 5300, amt: 2800 },
];

const IncomeOverviewChart = () => {
  const [form] = Form.useForm();

  const onValuesChange = (changedValues: any, allValues: any) => {
    console.log("Current form values:", allValues);
  };

  return (
    <div className="w-full bg-[#171717] p-4 rounded-lg">
      <div className="flex items-center justify-between">
        <h3 className="text-white text-lg mb-4">Monthly Data Overview</h3>
        <div className="w-[100px]">
          <Form
            form={form}
            name="control-hooks"
            onValuesChange={onValuesChange}
          >
            <Form.Item name="year" rules={[{ required: true }]}>
              <Select placeholder="Select a option and change input text above">
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
      {/* Add a fixed height to the ResponsiveContainer */}
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          {/* Define the Gradient */}
          <defs>
            {/* Stroke Gradient */}
            <linearGradient id="gradientStroke" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#780CFF" stopOpacity={1} />
              <stop
                offset="100%"
                stopColor="rgba(120, 12, 255, 0.7)"
                stopOpacity={1}
              />
            </linearGradient>

            {/* Fill Gradient (Based on Your Background) */}
            <linearGradient id="gradientFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="29%" stopColor="#780CFF" stopOpacity={1} />
              <stop
                offset="50.93%"
                stopColor="rgba(120, 12, 255, 0.8)"
                stopOpacity={0.8}
              />
              <stop
                offset="66.71%"
                stopColor="rgba(120, 12, 255, 0.7)"
                stopOpacity={0.7}
              />
              <stop
                offset="85.27%"
                stopColor="rgba(120, 12, 255, 0.52)"
                stopOpacity={0.52}
              />
              <stop
                offset="100%"
                stopColor="rgba(120, 12, 255, 0.2)"
                stopOpacity={0.2}
              />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="#555" />
          <XAxis dataKey="name" stroke="white" />
          <YAxis stroke="white" />
          <Tooltip
            contentStyle={{ backgroundColor: "#171717", color: "white" }}
          />

          {/* Apply the Gradient */}
          <Area
            type="monotone"
            dataKey="uv"
            stroke="url(#gradientStroke)"
            fill="url(#gradientFill)"
            strokeWidth={3}
          />

          <Area
            type="monotone"
            dataKey="rev" // Changed from "uv" to "rev"
            stroke="url(#gradientStroke)"
            fill="url(#gradientFill)"
            strokeWidth={3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IncomeOverviewChart;
