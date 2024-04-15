import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

const COLORS = ["#00C49F", "#0088FE", "#FF8042"];

const AreaProgressChart = ({ transactions }) => {
  const { successful, pending, failed } = transactions;

  const totalTransactions = successful + pending + failed;

  const data = [
    {
      id: 1,
      name: "Successful",
      percentValues: (successful / totalTransactions) * 100,
      color: "#00C49F",
      count: successful,
    },
    {
      id: 2,
      name: "Pending",
      percentValues: (pending / totalTransactions) * 100,
      color: "#0088FE",
      count: pending,
    },
    {
      id: 3,
      name: "Failed",
      percentValues: (failed / totalTransactions) * 100,
      color: "#FF8042",
      count: failed,
    },
  ];

  return (
    <div className="progress-card">
      <div className="progress-card-heading">
        <h4 className="progress-card-title">Total Transactions</h4>
      </div>
      <div className="progress-card-pie">
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              dataKey="percentValues"
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${value.toFixed(2)}%`} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="progress-card-categories">
        {data.map((category) => (
          <div
            key={category.id}
            className="progress-card-category"
            style={{ marginBottom: "10px" }}
          >
            <p className="category-value">
              {category.name}: {category.count}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AreaProgressChart;
