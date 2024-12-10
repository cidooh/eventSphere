import { FaBars } from "react-icons/fa";

function Nav(){
    return(
        <div className="bg-[#2B293D] fixed w-full">
            <nav className="flex justify-between ml-10">
                <h2 className="font-bold text-3xl text-white p-3">event<span className="text-yellow-400">S</span>phere</h2>
                <ul className="hidden lg:flex gap-20 mr-10 text-white p-3 ">
                    <li>Home</li>
                    <li>Event</li>
                    <li>About Us</li>
                    <li>Sign In</li>
                    <button className="text-white bg-[#FFB61D] p-4 rounded-md">SignUp</button>
                </ul>
                <FaBars className="lg:hidden text-white mr-10 "/>
            </nav>
        </div>
    )
}
export default Nav