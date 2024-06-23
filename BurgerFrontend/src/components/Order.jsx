import React from "react";
import { RxCross2 } from "react-icons/rx";

const Order = ({ orderDetails, totalPrice,setConfirmOrder }) => {

  return (
    <div className="h-[15rem] rounded-2xl bg-cust-white p-3">
      <div className="flex justify-between">
      <p className="text-center mb-2">Order Summary</p>
      <RxCross2 size="25" onClick={()=>{setConfirmOrder(false)}} />

      </div>
      <hr />
      <p className="Font-bold my-1 font-semibold">
        Order Id: {orderDetails.orderId}
      </p>
      <p className="Font-bold my-1 font-semibold">
        contact no: {orderDetails.mobilenum}
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
