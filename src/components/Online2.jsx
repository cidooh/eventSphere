import { IoIosStarOutline } from "react-icons/io";


function Online2(){
    return(
        <div>
        <div className="w-[350px]">
                     <img src="src/assets/images/Easy cooking.png" alt="" className="rounded-xl"/>
                 </div>
                 <div className="flex gap-10">
                 <div className="font-bold">DEC <br/> 12</div>
                 <div>
                     <p className="font-bold">Easy book folding:<br/>Christmas Edition</p>
                     <p>Class over Zoom</p>
                     <p>Online</p>
                     <p>4 PM - 5:30PM</p>
                     <p>Free</p>
                     <div className="flex gap-2">
                     <IoIosStarOutline /> <p>interested</p>
                     </div>

                 </div>
                 </div>
             </div>
    )
}
export default Online2