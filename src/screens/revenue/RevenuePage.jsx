import { useEffect, useState } from "react";
import {
  AreaCardsRevenue,
  AreaCharts,
  AreaChartsRevenue,
  AreaTableRevenue,
  AreaTopRevenue,
} from "../../components";
import { get } from "../../config/axios";

const RevenuePage = () => {
  const [transactions, setTransactions] = useState({});
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [transactionsByMonth, setTransactionsByMonth] = useState([]);
  const [totalEarningsByPaymentMethod, setTotalEarningsByPaymentMethod] =
    useState([]);

  const fetchDashboardData = async (startDate, endDate) => {
    const data = await get("/v1/admin/users/dashboard", {
      startDate,
      endDate,
    });

    setTransactions(data?.transactions);
    setTotalUsers(data?.totalUsers);
    setTotalEarnings(data?.totalEarnings);
    setTransactionsByMonth(data?.transactionsByMonth);
    setTotalEarningsByPaymentMethod(data?.totalEarningsByPaymentMethod);
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <div className="content-area">
      <AreaTopRevenue />
      {/* <AreaChartsRevenue /> */}
      <AreaCharts
        fromRevenue={true}
        transactions={transactions}
        totalEarnings={totalEarnings}
        transactionsByMonth={transactionsByMonth}
        totalEarningsByPaymentMethod={totalEarningsByPaymentMethod}
      />

      {/* <AreaCardsRevenue /> */}

      {/* <AreaTableRevenue /> */}
    </div>
  );
};

export default RevenuePage;
