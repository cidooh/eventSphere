import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";


function Ticketattendee(){
    return(
        <div className="mt-20 container mx-auto w-[700px] shadow-xl mb-10">
            <div className="flex gap-4 p-3 items-center">
<Link to="/ticket"><FaLongArrowAltLeft className="text-2xl hover:scale-110"/></Link>
<h1 className="text-3xl font-bold p-3">Attendee Details</h1>
</div>

<div className="border-2 bg-slate-300 p-5 text-xl">
    <p className="text-xl">Event Title:</p>
    <p >Standard Ticket: Ticket #1</p>
    <div className="bg-white border-2 p-5">
       <p> Full Name</p>
       <input type="text" placeholder="Enter Attendee's full name" className="p-4 border w-[400px] rounded-md"/>
       <p>Email</p>
       <input type="text" placeholder="Enter Attendee's Email" className="p-4 border w-[400px] rounded-md "/>
       <p>Phone</p>
       <input type="number" placeholder="Enter Attendee's Phone number" className="p-4 border w-[400px] rounded-md" />
    </div>

    <p className="p-3">I accept the <span className="text-blue-400">Terms of Service</span> and have read the <span className="text-blue-400"> Privacy Policy.</span> </p>
</div>


<div className="p-5 text-2xl font-semibold flex gap-20 ml-[25%]">
    <p>Qty: <span className="text-green-700">1</span></p>
    <p>Total: <span className="text-green-700">Ksh=200</span></p>
    </div>
<div>
    <Link to="/attendee"><button className="bg-slate-900 text-white text-xl hover:scale-110 shadow-2xl p-5 w-full rounded-2xl">Continue to Checkout</button></Link>
</div>

        </div>
    )
}
export default Ticketattendee