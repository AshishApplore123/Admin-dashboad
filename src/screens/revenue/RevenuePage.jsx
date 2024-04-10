import {
  AreaCardsRevenue,
  AreaChartsRevenue,
  AreaTableRevenue,
  AreaTopRevenue,
} from "../../components";

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
