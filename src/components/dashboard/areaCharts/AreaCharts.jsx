import AreaCardsRevenue from "../../revenue/areaCards/AreaCardsRevenue";
import AreaBarChart from "./AreaBarChart";
import AreaProgressChart from "./AreaProgressChart";

const AreaCharts = ({
  transactions,
  totalEarnings,
  fromRevenue,
  transactionsByMonth,
}) => {
  return (
    <section className="content-area-charts">
      <AreaBarChart
        totalEarnings={totalEarnings}
        transactionsByMonth={transactionsByMonth}
        fromRevenue={fromRevenue}
      />
      {!fromRevenue && <AreaProgressChart transactions={transactions} />}
      {/* {fromRevenue && <AreaCardsRevenue />} */}
    </section>
  );
};

export default AreaCharts;
