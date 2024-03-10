import { recentOrderData } from "../lib/constants/config";
import {Link} from "react-router-dom";
import { format } from 'date-fns'
import { getOrderStatus } from "./getOrderStatus";

const RecentOrdersTable = () => {
  return (
    <table className="w-full text-gray-700">
      <thead>
        <tr>
          <th>ID</th>
          <th>Product ID</th>
          <th>Customer Name</th>
          <th>Order Date</th>
          <th>Order Total</th>
          <th>Shipping Address</th>
          <th>Order Status</th>
        </tr>
      </thead>
      <tbody>
        {recentOrderData.map((order) => (
          <tr key={order.id}>
            <td>
              <Link to={`/order/${order.id}`}>#{order.id}</Link>
            </td>
            <td>
              <Link to={`/product/${order.product_id}`}>
                #{order.product_id}
              </Link>
            </td>
            <td>
              <Link to={`/customer/${order.customer_id}`}>
                {order.customer_name}
              </Link>
            </td>
            <td>{format(new Date(order.order_date), "dd MMM yyyy")}</td>
            <td>{order.order_total}</td>
            <td>{order.shipment_address}</td>
            <td>{getOrderStatus(order.current_order_status)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RecentOrdersTable;
