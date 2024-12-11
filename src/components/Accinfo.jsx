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
<div className="h-[30px] w-[30px] border-2 rounded-full -mt-10 ml-28">
    
    <input type="file" />
    <IoCameraSharp className="mx-[50%]  "/>
</div>
<div className="mt-5">
    <Profileinfo/>
</div>
<div>
    <Contactdetails/>
</div>
<div className="ml-[40%] mt-10 ">
    <button className="bg-[#FFE047] shadow-xl font-bold hover:scale-110 transition-transform p-3 rounded-lg">Save My Profile</button>
</div>
        </div>
    )
}
export default Accinfo