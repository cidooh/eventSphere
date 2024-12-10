import { IoIosStarOutline } from "react-icons/io";


function Online1(){
    return(
        <div>
   <div className="w-[350px]">
                <img src="src/assets/images/Zumba online dance.png" alt="" className="rounded-xl hover:rotate-6"/>
            </div>
            <div className="flex gap-10">
            <div className="font-bold">DEC <br/> 20</div>
            <div>
                <p className="font-bold">Online Zumba Dance Fitness</p>
                <p>Class over Zoom</p>
                <p>Online</p>
                <p>7 PM - 8PM</p>
                <p>Ksh 499 </p>
                <div className="flex gap-2">
                     <IoIosStarOutline /> <p>interested</p>
                     </div>

            </div>
            </div>
        </div>
    )
}
export default Online1