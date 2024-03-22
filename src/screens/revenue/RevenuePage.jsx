import { AreaCards, AreaCardsRevenue, AreaCharts, AreaChartsRevenue, AreaTable, AreaTableRevenue, AreaTop, AreaTopRevenue } from "../../components";

const RevenuePage = () => {
  return (
    <div className="content-area">
      <AreaTopRevenue />
      <AreaChartsRevenue />
      <AreaCardsRevenue />
      
      <AreaTableRevenue />
    </div>
  );
};

export default RevenuePage;
