
import { useState } from "react";
import { Link } from "react-router-dom";

function Ticket1() {
  const [quantity, setQuantity] = useState(1);
  const ticketPrice = 200;

  // Function to handle increment
  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Function to handle decrement
  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <div className="border w-[700px] mt-24 container mx-auto">
      <h1 className="p-7 text-2xl">Select Tickets</h1>
      <div className="flex gap-[400px] font-bold text-xl p-5 border-2 bg-gray-500">
        <div>
          <p>Ticket Types</p>
        </div>
        <div>
          <p>Quantity</p>
        </div>
      </div>

      <div className="flex border-2">
        <div className="bg-green-600 w-2 rounded-sm p-2"></div>
        <div className="flex gap-[390px] ">
          <div className="p-4 text-xl">
            <h2>Standard Ticket</h2>
            <p>Ksh {ticketPrice.toFixed(2)}</p>
          </div>

          <div className="flex gap-4 p-3">
            <button
              className="h-6 w-6 text-center font-bold border-2 border-black rounded-full"
              onClick={decrementQuantity}
            >
              -
            </button>
            <div>
              <p>{quantity}</p>
            </div>
            <button
              className="h-6 w-6 text-center font-bold border-2 border-black rounded-full"
              onClick={incrementQuantity}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="p-5 text-2xl font-semibold flex gap-20 ml-[25%]">
        <p>
          Qty: <span className="text-green-700">{quantity}</span>
        </p>
        <p>
          Total:{" "}
          <span className="text-green-700">Ksh {ticketPrice * quantity}</span>
        </p>
      </div>
      <div>
        <Link to="/attendee">
          <button className="bg-slate-900 text-white text-xl hover:scale-110 shadow-2xl p-5 w-full rounded-2xl">
            Proceed
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Ticket1;
