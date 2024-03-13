import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { data } from "../lib/constants/config";

const TransactionChart = () => {
  return (
    <div className="h-[23rem] md:h-[22rem] bg-white p-1 md:ml-4 rounded-sm border border-gray-200 flex flex-col flex-1 mb-5 md:mb-0">
      <strong className="text-gray-700 font-medium m-2 text-lg md:text-left text-center">Transactions</strong>
      <div className="mt-3 w-full flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 10,
              left: -10,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Income" fill="#0ea5e9" />
            <Bar dataKey="Expense" fill="#ea580c" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TransactionChart;
