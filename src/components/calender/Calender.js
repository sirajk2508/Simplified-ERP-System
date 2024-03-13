import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import moment from "moment";
import { ORDERS_DATA } from "../lib/constants/config";
import interactionPlugin from "@fullcalendar/interaction";

const Calender = () => {
  const getOrderColor = (status) => {
    switch (status) {
      case "placed":
        return "#f0ad4e";
      case "confirmed":
        return "#5bc0de";
      case "shipped":
        return "#5cb85c";
      case "out_for_delivery":
        return "#d9534f";
      default:
        return "#000000";
    }
  };

  const events = ORDERS_DATA.map((order) => ({
    title: `Order #${order.id} - ${order.customerName}`,
    start: moment(order.StartTime).format(),
    end: moment(order.EndTime).format(),
    backgroundColor: getOrderColor(order.orderStatus),
    orderDetails: order,
  }));

  const handleDateClick = (arg) => {
    const clickedDate = moment(arg.dateStr).format("YYYY-MM-DD");
    console.log("Clicked Date:", clickedDate);

    const outForDeliveryOrders = ORDERS_DATA.filter((order) => {
      const orderDate = moment(order.StartTime).format("YYYY-MM-DD");
      return (
        orderDate === clickedDate &&
        (order.orderStatus === "out_for_delivery" ||
          order.orderStatus === "placed")
      );
    });

    if (outForDeliveryOrders.length > 0) {
      const message = outForDeliveryOrders
        .map((order) => `Order ${order.id} - ${order.customerName}`)
        .join("\n");
      alert(`Due orders on ${clickedDate}:\n${message}`);
    } else {
      alert(`No due delivery orders on ${clickedDate}`);
    }
  };

  const handleEventClick = (arg) => {
    const clickedEvent = arg.event;
    const orderDetails = clickedEvent?.extendedProps?.orderDetails;

    // Construct the message for the clicked event
    const message = `Order #${orderDetails?.id} - ${orderDetails?.customerName} (${orderDetails?.orderStatus})`;
    if (orderDetails.orderStatus === "out_for_delivery") alert(message);
    else alert("No due orders for today");
  };

  return (
    <div className="w-full lg:h-[50%] md:h-[93vh] h-[88vh] md:p-10 p-2 pr-4 mr-3">
      <h1 className="md:text-4xl font-bold text-3xl text-gray-700 my-5 md:my-0 text-center">
        Calendar
      </h1>
      <div className="w-full h-full cursor-pointer text-sm mt-4">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          weekends={true}
          events={events}
          dateClick={handleDateClick}
          eventClick={handleEventClick}
          height="75vh"
        />
      </div>
    </div>
  );
};

export default Calender;
