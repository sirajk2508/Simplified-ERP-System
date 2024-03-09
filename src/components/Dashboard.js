
import TransactionChart from "./TransactionChart";
import DashboardStartsGrid from "./DashboardStartsGrid";
import BuyerProfileChart from "./BuyerProfileChart";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4">
      <DashboardStartsGrid/>
      <div className="flex flex-row gap-4 w-full">
      <TransactionChart/>
      <BuyerProfileChart/>
      </div>
    </div>
  );
};

export default Dashboard;
