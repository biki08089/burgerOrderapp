import React, { useState } from "react";
import { useEffect } from "react";
const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;
import Order from "./Order";
import toast from "react-hot-toast";

const FetchCartitems = ({ loadCart, phoneNumber }) => {
  const [cartArr, setCartArr] = useState([]);
  const [ConfirmOrder, setConfirmOrder] = useState(false);
  const [orderDetails, setOrderDetails] = useState(false);

  //Total price of all items
  let itemsPrice = 0;
  if (!localStorage.getItem("mobileNum")) {
    console.log("Cart item is empty.");
  } else {
    cartArr.forEach((element) => {
      itemsPrice = itemsPrice + Number(element.totalPrice);
    });
  }

  //Fetching data from the cart
  const getCartData = async () => {
    const data = {
      phoneNumber: phoneNumber || localStorage.getItem("mobileNum"),
    };

    const cartData = await fetch(`${VITE_BASE_URL}/getcartdata`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await cartData.json();
    if (res.success) {
      setCartArr(res.items);
    }
  };

  //When clicked "check out" button this function will run..

  const placeOrder = async () => {
    if (!localStorage.getItem("mobileNum") || cartArr.length == 0) {
      alert("Your cart is empty");
    } else {
      const mobilenum = localStorage.getItem("mobileNum");
      const info = {
        mobilenum,
        itemsPrice,
      };
      const itemsInCartData = await fetch(`${VITE_BASE_URL}/placeorder`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      });
      const res = await itemsInCartData.json({});
      if (res.success) {
        toast.success("Order Placed Successfully.");
        setConfirmOrder(true);
        setOrderDetails(res.items);
      }
    }
  };

  //This function will remove the cart item from the cart..
  const removeCartItem = async (event) => {
    const id = event.target.value;
    const data={
      id,
    }
    const deleteitem = await fetch(`${VITE_BASE_URL}/deleteitem`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(data)
    });
    
    const res=await deleteitem.json();
    console.log(res);
    if(res.success){
      toast.success(res.massage);
      getCartData();
    }else{
      toast.error(res.massage);
    }

  };

  useEffect(() => {
    getCartData();
  }, [loadCart]);

  return (
    <div>
      {ConfirmOrder ? (
        <Order
          getCartData={getCartData}
          orderDetails={orderDetails}
          totalPrice={itemsPrice}
          setConfirmOrder={setConfirmOrder}
        />
      ) : (
        <div>
          <div className="bg-cust-black  flex justify-between sticky top-0">
            <button
              onClick={placeOrder}
              className=" bg-paneer-slice text-black py-2 px-5 font-bold rounded"
            >
              Check Out
            </button>
            <p className="mr-9 py-2 px-5 font-bold rounded text-cust-white">
              Total-Rs.{itemsPrice}
            </p>
          </div>
          <div>
            <div>
              <p className="text-cust-white font-bold mt-2 ">
                Customer with mobile number: {localStorage.getItem("mobileNum")}
              </p>
              <p className="text-cust-white font-bold mt-2 ">
                Total Cart Items: {cartArr.length}
              </p>
            </div>
            {cartArr.length == 0 ? (
              <div className="text-cust-white h-[100%] mt-[15rem]">
                <p className="text-center">Cart is Empty</p>
              </div>
            ) : (
              <div>
                {cartArr.map((eachObj) => {
                  return (
                    <div
                      key={eachObj._id}
                      className=" border rounded-lg my-3 bg-cust-white w-[18rem] p-3"
                    >
                      <div className="flex justify-between ">
                        <img
                          src="logo2.png"
                          className="h-[30px] w-[35px] rounded-lg mr-2"
                          alt=""
                        />
                        <p>Burger King large</p>
                        <button
                          onClick={removeCartItem}
                          value={eachObj._id}
                          className="h-[2rem] w-[5rem] text-[12px] rounded-lg bg-cust-black text-cust-white"
                        >
                          Remove
                        </button>
                      </div>
                      <p className="font-bold">
                        Mobile No: {eachObj.mobilenum}
                      </p>
                      <table>
                        <tbody>
                          <tr>
                            <th>Item</th>
                            <th>Qty</th>
                            <th>Price</th>
                          </tr>
                          <tr>
                            <td>Bread</td>
                            <td className="Qty2">2</td>
                            <td>100</td>
                          </tr>
                          <tr>
                            <td>Aloo tikki</td>
                            <td className="Qty2">{eachObj.alooQty}</td>
                            <td>{eachObj.alloTikkiPrice}</td>
                          </tr>
                          <tr>
                            <td>Paneer</td>
                            <td className="Qty2">{eachObj.paneerQty}</td>
                            <td>{eachObj.paneerPrice}</td>
                          </tr>
                          <tr>
                            <td>Cheese</td>
                            <td className="Qty2">{eachObj.cheeseQty}</td>
                            <td>{eachObj.cheesePrice}</td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="flex justify-between mt-2 font-semibold">
                        <p>Total</p>
                        <span>-</span>
                        <p className="pr-16 ">Rs.{eachObj.totalPrice}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FetchCartitems;
