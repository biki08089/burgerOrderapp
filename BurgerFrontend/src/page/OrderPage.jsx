import React, { useEffect, useState } from "react";
const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;

const OrderPage = () => {
  const [orderData, setOrderData] = useState([]);

//   here we are fetching the order details from the backend..
  const orderDetails = async () => {
    const mobilenum = localStorage.getItem("mobileNum");
    const data = {
      mobilenum,
    };
    console.log(VITE_BASE_URL + "/getorders");
    const getData = await fetch(`${VITE_BASE_URL}/getorders`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const res = await getData.json();
    if (res.success) {
      setOrderData(res.orders);
    }
  };

  useEffect(() => {
    orderDetails();
  }, []);

  return (
    <div>
      <div className="flex flex-col justify-center items-center ">
          <h1 className="text-[2rem] font-bold text-cust-white mb-3">Your Order History</h1>
        <div className="h-[41rem] w-[45rem] bg-cust-white rounded-xl flex flex-col items-center pt-2 overflow-y-scroll">
          {orderData.reverse().map((eachObj) => {
            return (
              <div key={eachObj._id} className="h-[15rem] w-[30rem] my-3 mx-3 p-4 rounded-2xl bg-black text-cust-white ">
                <p className="text-center mb-2">Order Summary</p>
                <hr />
                <p className="Font-bold my-1 font-semibold">
                  Order Id: {eachObj.orderId}
                </p>
                <p className="Font-bold my-1 font-semibold">
                  contact no: {eachObj.mobilenum}
                </p>
                <table>
                  <tbody>
                    <tr>
                      <th>Product</th>
                      <th>Qty</th>
                      <th>Price</th>
                    </tr>
                    <tr>
                      <td className="font-semibold text-center">
                        Burger king Large*
                      </td>
                      <td className="Qty2">{eachObj.products.length}</td>
                      <td className="font-semibold text-center">
                        {eachObj.totalPrice}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="mt-3 font-semibold">Cash On Delivery</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
