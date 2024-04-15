import { useEffect, useState } from "react";
import { AreaCards, AreaCharts, AreaTop } from "../../components";
import { get } from "../../config/axios";

const Dashboard = () => {
  const [transactions, setTransactions] = useState({});
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [transactionsByMonth, setTransactionsByMonth] = useState([]);

  const fetchDashboardData = async (startDate, endDate) => {
    const data = await get("/v1/admin/users/dashboard", {
      startDate,
      endDate,
    });

    setTransactions(data?.transactions);
    setTotalUsers(data?.totalUsers);
    setTotalEarnings(data?.totalEarnings);
    setTransactionsByMonth(data?.transactionsByMonth);
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <div className="content-area">
      <AreaTop fetchDashBoardData={fetchDashboardData} />
      <AreaCharts
        fromRevenue={false}
        transactions={transactions}
        totalEarnings={totalEarnings}
        transactionsByMonth={transactionsByMonth}
      />
      {/* <CardPage totalUsers={totalUsers} /> */}
      <AreaCards totalUsers={totalUsers} />
    </div>
  );
};

export default Dashboard;
