import { AreaCards, AreaCharts, AreaTable, AreaTop,CardPage } from "../../components";

const Dashboard = () => {
  return (
    <div className="content-area">
      <AreaTop />
      <AreaCharts />
      <CardPage />
      <AreaCards />
   
    </div>
  );
};

export default Dashboard;
