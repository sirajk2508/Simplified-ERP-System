import RecentOrdersTable from "./RecentOrdersTable";

const RecentOrders = () => {
  return (
		<div className="bg-white px-4 pt-3 pb-4 rounded-sm ml-4 border border-gray-200 flex-1 w-96 overflow-x-scroll h-[17rem] overflow-y-scroll">
			<strong className="text-gray-700 font-medium">Recent Orders</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<RecentOrdersTable/>
			</div>
		</div>
	)
}

export default RecentOrders;
