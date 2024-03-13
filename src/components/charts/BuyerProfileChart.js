import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'
import { data1,COLORS, } from '../lib/constants/config';
import {renderCustomizedLabel} from '../lib/constants/helper'

const BuyerProfileChart = () => {
  return (
    <div className="md:w-[20rem] h-[22rem] bg-white p-4 md:mr-4 mb-5 lg:mb-0 rounded-sm border border-gray-200 flex flex-col">
        <strong className="text-gray-700 font-medium text-lg text-center md:text-left">Buyer Profile</strong>
        <div className="mt-3 w-full flex-1 text-xs">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={300}>
                    <Pie
                        data={data1}
                        cx="50%"
                        cy="45%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={105}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data1.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    </div>
)
}

export default BuyerProfileChart;
