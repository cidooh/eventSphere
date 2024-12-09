import { FaCircleUser } from "react-icons/fa6";
import { IoCameraSharp } from "react-icons/io5";
import Profileinfo from "./Profileinfo";
import Contactdetails from "./Contactdetails";


function Accinfo(){
    return(
        <div className="p-5 mx-auto ">
<div>
    <h1 className="text-2xl font-bold">Account Information</h1>
    <hr />
    <p className="p-5 font-semibold text-xl">Profile Photo</p>
</div>
<div className=" ">
<FaCircleUser className="text-[#D9D9D9] h-[150px] w-[150px]" />
</div>
<div className="h-[30px] w-[30px] border-2 rounded-full">
    <IoCameraSharp className="mx-[50%] "/>
</div>
<div>
    <Profileinfo/>
</div>
<div>
    <Contactdetails/>
</div>
<div className="ml-[40%] ">
    <button className="bg-[#2B293D] text-white p-3 rounded-lg">Save My Profile</button>
</div>
        </div>
    )
}
export default Accinfo