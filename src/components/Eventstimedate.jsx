import { FaShareAlt } from "react-icons/fa";
import { GoStar } from "react-icons/go";
import { CiCalendarDate } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa";
import { IoTicketOutline } from "react-icons/io5";
import { Link } from "react-router-dom";



function Eventsdatetime(){
    return(
        <div>
                <div className="flex gap-96">
<div>
    <h1 className="text-3xl p-4 font-bold">Sound of Christmas 2024</h1>
</div>
<div className="flex p-4 gap-4">
<GoStar/>
<FaShareAlt/>
</div>
</div>

    <h2 className="text-2xl ">Date and Time</h2>
    <div className="flex gap-96">
        <div className="p-3">
    <div className="flex gap-5"><CiCalendarDate className="w-[25px] h-[25px]"/> <p>Saturday, 2 December 2024</p></div>
    <div className="flex gap-5"><FaRegClock className="w-[25px] h-[25px]"/> <p>6:30 PM - 9:30 PM</p></div>
</div>
<div>
   <Link to="/ticket"><button className="bg-[#FFE047] flex items-center p-3 rounded-xl text-2xl"><IoTicketOutline/>Buy Tickets</button></Link>
</div>

</div>

        </div>
    )
}
export default Eventsdatetime