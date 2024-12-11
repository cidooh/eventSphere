import { Link } from "react-router-dom"
function Ticket1(){
    return(
        <div className="border w-[700px] mt-20 container mx-auto">
<h1 className="p-6 text-2xl">Select Tickets</h1>
<div className="flex gap-[400px] font-bold text-xl p-5 border-2 bg-gray-500">
    <div>
    <p>Ticket Types</p>
    </div>
    <div>
      <p>Quantity</p>
    </div>
</div>

<div className="flex border-2">
    <div className="bg-green-600 w-2 rounded-sm p-2">

    </div>
    <div className="flex gap-[390px] ">
    <div className="p-4 text-xl">
        <h2>Standard Ticket</h2>
        <p>Ksh 200.00</p>
    </div>

    <div className="flex gap-4 p-3">
        <div className="h-6  w-6 text-center font-bold border-2 border-black rounded-full"> <p> - </p> </div>
        <div> <p> 1 </p></div>
        <div className="h-6  w-6 text-center font-bold border-2 border-black rounded-full"> <p> + </p> </div>
    </div>
    </div>
</div>

<div className="p-5 text-2xl font-semibold flex gap-20 ml-[25%]">
    <p>Qty: <span className="text-green-700">1</span></p>
    <p>Total: <span className="text-green-700">Ksh=200</span></p>
    </div>
<div>
    <Link to="/attendee"><button className="bg-slate-900 text-white text-xl hover:scale-110 shadow-2xl p-5 w-full rounded-2xl">Proceed</button></Link>
</div>
        </div>
    )
}
export default Ticket1