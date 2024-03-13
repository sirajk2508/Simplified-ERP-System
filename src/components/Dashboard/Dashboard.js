import TransactionChart from "../charts/TransactionChart";
import DashboardStartsGrid from "./DashboardStartsGrid";
import BuyerProfileChart from "../charts/BuyerProfileChart";
import RecentOrders from "../dashboardOrders/RecentOrders";
import PopularProducts from "../dashboardOrders/PopularProducts";

const Dashboard = () => {
  return (
    <div className="md:flex md:flex-col md:gap-4">
      <DashboardStartsGrid />
      <div className="md:flex md:flex-row md:gap-4 w-full">
        <TransactionChart />
        <BuyerProfileChart />
      </div>

      <div className="md:flex md:flex-row md:gap-4 w-full">
        <RecentOrders/>
        <PopularProducts/>
      </div>
    </div>
  );
};

export default Dashboard;
