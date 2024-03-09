import TransactionChart from "../charts/TransactionChart";
import DashboardStartsGrid from "./DashboardStartsGrid";
import BuyerProfileChart from "../charts/BuyerProfileChart";
import RecentOrders from "../ordersAndProducts/RecentOrders";
import PopularProducts from "../ordersAndProducts/PopularProducts";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4">
      <DashboardStartsGrid />
      <div className="flex flex-row gap-4 w-full">
        <TransactionChart />
        <BuyerProfileChart />
      </div>

      <div className="flex flex-row gap-4 w-full">
        <RecentOrders/>
        <PopularProducts/>
      </div>
    </div>
  );
};

export default Dashboard;
