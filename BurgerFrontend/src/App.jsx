import Nav from "./components/Nav";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { useState } from "react";
import FetchCartitems from "./components/FetchCartitems";
const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;
import { useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";


function App() {
  const { register, handleSubmit } = useForm();
 

  /* Fixed prices of all the items.Also in future i can add a feature where the owner will be able to
 change the fixed prices of all of the items.*/
  let fixedalootikkiPrice = 30;
  let fixedPaneerPrice = 20;
  let fixedCheesePrice = 10;
  let fixedPriceBread = 50;

  //Item quantities and price according to quantities stored in state varibales
  const defaultBreadQty = 2;
  const [alooQty, setAlooQty] = useState(1);
  const [alloTikkiPrice, setAlooTikkiPrice] = useState(fixedalootikkiPrice);
  const [paneerQty, setPaneerQty] = useState(1);
  const [paneerPrice, setPaneerPrice] = useState(fixedPaneerPrice);
  const [cheeseQty, setCheeseQty] = useState(1);
  const [cheesePrice, setCheesePrice] = useState(fixedCheesePrice);

  const [loadCart, setloadCart] = useState(true);
  const [phoneNumber, setPhone] = useState(null);
  // finding totalPrice of all the items
  let totalPrice =
    fixedPriceBread * defaultBreadQty +
    alloTikkiPrice +
    paneerPrice +
    cheesePrice;

  //Alootikki quantity and price change dynamically..
  const alooTikkiQuantityPlus = () => {
    if (alooQty < 6) {
      setAlooQty(alooQty + 1);
      setAlooTikkiPrice((alooQty + 1) * fixedalootikkiPrice);
    }
  };

  const alooTikkiQuantityMinus = () => {
    if (alooQty > 1) {
      setAlooQty(alooQty - 1);
      setAlooTikkiPrice((alooQty - 1) * fixedalootikkiPrice);
    }
  };

  //Paneer quantity and price change dynamically..
  const paneerQuantityPlus = () => {
    if (paneerQty < 6) {
      setPaneerQty(paneerQty + 1);
      setPaneerPrice((paneerQty + 1) * fixedPaneerPrice);
    }
  };

  const paneerQuantityMinus = () => {
    if (paneerQty > 1) {
      setPaneerQty(paneerQty - 1);
      setPaneerPrice((paneerQty - 1) * fixedPaneerPrice);
    }
  };

  //cheese quantity and price change dynamically..
  const cheeseQuantityPlus = () => {
    if (cheeseQty < 6) {
      setCheeseQty(cheeseQty + 1);
      setCheesePrice((cheeseQty + 1) * fixedCheesePrice);
    }
  };

  const cheeseQuantityMinus = () => {
    if (cheeseQty > 1) {
      setCheeseQty(cheeseQty - 1);
      setCheesePrice((cheeseQty - 1) * fixedCheesePrice);
    }
  };

  //Sending cart data to backend
  const sendCartData = async (data) => {
    setPhone(data.phoneNumber);
    localStorage.setItem("mobileNum",data.phoneNumber);
    const mobilenum = data.phoneNumber;
    const info = {
      defaultBreadQty,
      alooQty,
      paneerQty,
      cheeseQty,
      fixedPriceBread,
      alloTikkiPrice,
      paneerPrice,
      cheesePrice,
      totalPrice,
      mobilenum,
    };

    const sendCartData = await fetch(`${VITE_BASE_URL}/createcart`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    });

    const res = await sendCartData.json();
    console.log(res);

    /*This code below will load our cart items each time we click on add to cart button.
    We pass "loadCart" as prop to the "fetchcartitem" component so the each time our
    loadCart updates useeffect will run which will fetch our cart data .*/

    if (loadCart) {
      setloadCart(false);
    } else {
      setloadCart(true);
    }
  };

  //Here this function will place the order...
  const placeOrder = async () => {};

  return (
    <div className="bg-cust-black h-[100vh]">
      <Nav />
    
      <div className="h-[80%] flex mt-9">
        <div className="h-[100%] w-[60%] border flex justify-center items-center">
          <div className="h-[25rem] w-[16rem] rounded-2xl border border-cust-gray">
            <div className="text-cust-white mx-3 my-3">
              <p>Bread Rs.50 per piece.</p>
              <p>Aloo Tikki Rs.30 per Slice.</p>
              <p>Paneer Rs.20 per slice.</p>
              <p>Cheese Rs.10 per slice.</p>
              <table className="w-[100%] mt-4">
                <tbody>
                  <tr>
                    <th>Item</th>
                    <th>Qty.</th>
                    <th>Price</th>
                  </tr>
                  <tr>
                    <td>Bread</td>
                    <td className="Qty">
                      <span className="mx-2">{defaultBreadQty}</span>
                    </td>
                    <td>{fixedPriceBread * 2}</td>
                  </tr>
                  <tr>
                    <td>Aloo tikki</td>
                    <td className="Qty">
                      <CiSquarePlus
                        name="plus"
                        onClick={alooTikkiQuantityPlus}
                        size="20"
                      />

                      <span className="mx-2">{alooQty}</span>
                      <CiSquareMinus
                        onClick={alooTikkiQuantityMinus}
                        size="20"
                      />
                    </td>
                    <td>{alloTikkiPrice}</td>
                  </tr>
                  <tr>
                    <td>Paneer</td>
                    <td className="Qty">
                      <CiSquarePlus onClick={paneerQuantityPlus} size="20" />
                      <span className="mx-2">{paneerQty}</span>
                      <CiSquareMinus onClick={paneerQuantityMinus} size="20" />
                    </td>
                    <td>{paneerPrice}</td>
                  </tr>
                  <tr>
                    <td>Cheese</td>
                    <td className="Qty">
                      <CiSquarePlus onClick={cheeseQuantityPlus} size="20" />
                      <span className="mx-2">{cheeseQty}</span>
                      <CiSquareMinus onClick={cheeseQuantityMinus} size="20" />
                    </td>
                    <td>{cheesePrice}</td>
                  </tr>
                </tbody>
              </table>
              <div className="flex justify-between mt-2 font-semibold">
                <p>Total</p>
                <span>-</span>
                <p className="pr-6 ">Rs.{totalPrice}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[100%] w-[100%] border flex flex-col justify-center items-center">
          <div className="h-[9rem] w-[20rem] rounded-t-[15rem] rounded-b-lg bg-bread-color mb-2"></div>
          <div className="w-[16rem] bg-aloo-tikki h-[4rem] rounded-full mb-2"></div>
          <div className="w-[17rem] bg-cheese-slice h-[1rem] rounded-full"></div>
          <div className="w-[16rem] bg-aloo-tikki h-[4rem] rounded-full mt-2"></div>
          <div className="h-[9rem] w-[20rem] rounded-b-[15rem] rounded-t-lg bg-bread-color mt-2"></div>

          <form
            onSubmit={handleSubmit(sendCartData)}
            className="bg-cheese-slice w-[20rem] p-3 mt-3 rounded-xl"
          >
            <label htmlFor="" className="font-bold">
              Enter your mobile number.
            </label>{" "}
            <br />
            <label
              htmlFor=""
              className="bg-cust-white py-[0.3rem] pr-1 mr-1 rounded-md "
            >
              +91
            </label>
            <input
              type="number"
              required
              {...register("phoneNumber")}
              className="pl-2 h-[2rem] w-[16rem] rounded-md mt-1"
            />
            <br />
            <button className="bg-cust-white text-black py-3 px-3 rounded-full mt-3  mr-1 font-semibold">
              Add to cart
            </button>
          
          </form>
        </div>

        <div className="h-[100%] w-[60%] border overflow-y-scroll p-5 relative">
          <FetchCartitems loadCart={loadCart} phoneNumber={phoneNumber} />
        </div>
      </div>
      <Toaster/>
    </div>
  );
}

export default App;