import { useState } from 'react';
import { ORDERS_DATA } from '../lib/constants/config';
import TableHead from './TableHead';
import TableBody from './TableBody';
import Pagination from './Pagination';

const OrdersTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const ordersPerPage = 10;
    const totalPages = Math.ceil(ORDERS_DATA.length / ordersPerPage);
  
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    const paginatedOrders = ORDERS_DATA.slice(
      (currentPage - 1) * ordersPerPage,
      currentPage * ordersPerPage
    );
  
    return (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <TableHead/>
            <TableBody paginatedOrders={paginatedOrders}/>
          </table>
          <Pagination currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange}/>
        </div>
      );
  };
  
  export default OrdersTable;
  