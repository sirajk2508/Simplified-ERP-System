import RecentOrdersTable from "./RecentOrdersTable";

const RecentOrders = () => {
  return (
		<div className="bg-white text-center lg:text-left px-4 pt-3 pb-4 rounded-sm md:ml-4 border border-gray-200 md:flex-1 mb-5 md:mb-0 w-[27rem] md:w-96 overflow-x-scroll lg:h-[17rem] md:h-[23rem] h-[25rem] overflow-y-scroll">
			<strong className="text-gray-700 font-medium text-center text-lg">Recent Orders</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<RecentOrdersTable/>
			</div>
		</div>
	)
}

export default RecentOrders;
