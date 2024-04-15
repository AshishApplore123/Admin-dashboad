import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./AreaCharts.scss";

const data = [
  {
    month: "Jan",
    earnings: 30,
  },
  {
    month: "Feb",
    earnings: 15,
  },
  {
    month: "Mar",
    earnings: 20,
  },
  {
    month: "Apr",
    earnings: 25,
  },
  {
    month: "May",
    earnings: 10,
  },
  {
    month: "Jun",
    earnings: 5,
  },
  {
    month: "Jul",
    earnings: 15,
  },
  {
    month: "Aug",
    earnings: 30,
  },
  {
    month: "Sep",
    earnings: 30,
  },
  {
    month: "Oct",
    earnings: 30,
  },
  {
    month: "Nov",
    earnings: 26,
  },
  {
    month: "Dec",
    earnings: 16,
  },
];

const AreaBarChart = ({ totalEarnings, transactionsByMonth }) => {
  const formatTooltipValue = (value) => {
    return `${value}`;
  };

  const formatYAxisLabel = (value) => {
    return `${value}`;
  };

  const formatLegendValue = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  return (
    <div className="bar-chart">
      <div className="bar-chart-info">
        <h5 className="bar-chart-title">Total Earning</h5>
        <div className="chart-info-data">
          <div className="info-data-value">₹{totalEarnings}</div>
        </div>
      </div>
      <div className="bar-chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={200}
            data={transactionsByMonth}
            margin={{
              top: 5,
              right: 5,
              left: 0,
              bottom: 5,
            }}
          >
            <XAxis
              padding={{ left: 10 }}
              dataKey="month"
              tickSize={0}
              axisLine={false}
              tick={{
                fill: "#676767",
                fontSize: 14,
              }}
            />
            <YAxis
              padding={{ bottom: 10, top: 10 }}
              tickFormatter={formatYAxisLabel}
              tickCount={6}
              axisLine={false}
              tickSize={0}
              tick={{
                fill: "#676767",
              }}
            />
            <Tooltip
              formatter={formatTooltipValue}
              cursor={{ fill: "transparent" }}
            />
            <Legend
              iconType="circle"
              iconSize={10}
              verticalAlign="top"
              align="right"
              formatter={formatLegendValue}
            />
            <Bar
              dataKey="earnings"
              fill="#475be8"
              activeBar={false}
              isAnimationActive={false}
              barSize={24}
              radius={[4, 4, 4, 4]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AreaBarChart;
