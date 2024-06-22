import React from "react";

const Order = ({ orderDetails, totalPrice }) => {
  return (
    <div className="h-[15rem] rounded-2xl bg-cust-white p-3">
      <p className="text-center mb-2">Order Summary</p>
      <hr />
      <p className="Font-bold my-1 font-semibold">
        Order Id: {orderDetails.orderId}
      </p>
      <p className="Font-bold my-1 font-semibold">
        contact no: {orderDetails.products[0].mobilenum}
      </p>
      <table>
        <tbody>
          <tr>
            <th>Product</th>
            <th>Qty</th>
            <th>Price</th>
          </tr>
          <tr>
            <td className="font-semibold text-center">Burger king Large*</td>
            <td className="Qty2">{orderDetails.products.length}</td>
            <td className="font-semibold text-center">Rs.{totalPrice}</td>
          </tr>
        </tbody>
      </table>
      <p className="mt-3 font-semibold">Cash On Delivery</p>
    </div>
  );
};

export default Order;
