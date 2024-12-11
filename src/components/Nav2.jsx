import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoTicketOutline } from "react-icons/io5";
import { LuCircleUser } from "react-icons/lu";



function Nav2(){
    return(
        <div className="bg-[#2B293D] fixed w-full">
            <nav className="flex justify-between ml-10">
                
                <Link to="/"> <h2 className="font-bold text-3xl text-white p-3">event<span className="text-yellow-400">S</span>phere</h2></Link>
                
                <ul className="hidden lg:flex gap-20 mr-10 text-white p-3 ">
                    <Link to="/" ><li>Home</li> </Link>
                   <Link to="/create" ><li>Create Event</li></Link>
                  <div className="flex flex-col">
                   <IoTicketOutline/>
                   <Link to="/ticket"> <p>Tickets</p></Link>
                  </div>

                  <div className="flex flex-col">
 <LuCircleUser/> 
 <Link to="/profile"><p>Profile</p></Link>
                  </div>
                  
                </ul>
                <FaBars className="lg:hidden text-white mr-10 "/>
            </nav>
        </div>
    )
}
export default Nav2