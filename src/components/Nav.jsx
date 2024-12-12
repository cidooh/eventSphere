import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";



function Nav(){
    return(
        <div className="bg-[#2B293D] fixed w-full">
            <nav className="flex justify-between ml-10  container mx-auto">
                
                <Link to="/"> <h2 className="font-bold text-3xl text-white p-3">event<span className="text-yellow-400">S</span>phere</h2></Link>
                
                <ul className="hidden lg:flex gap-20 mr-10 text-white p-3 ">
                    <Link to="/" ><li>Home</li> </Link>
                   <Link to="/create" ><li>Create Event</li></Link>
                   <Link to="/login"> <li>Sign In</li></Link>
                  <Link to="/signup"><button className="text-white bg-[#FFB61D] p-4 rounded-md">SignUp</button></Link>
                </ul>
                <FaBars className="lg:hidden text-white mr-10 "/>
            </nav>
        </div>
    )
}
export default Nav