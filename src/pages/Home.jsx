import Explore from "../components/Explore"
import EventCategory from "../components/Eventcategory"
import Popularevents from "../components/Popularevents"
import Onlineevent from "../components/Onlineevent"
import { FaArrowRight } from "react-icons/fa6";
import { FaRegCalendarPlus } from "react-icons/fa6";
import Subscribe from "../components/Subscribe";
import { Link } from "react-router-dom";


function Home(){
    return(
        <div className="container mx-auto mt-32">
<div>
    <img className="w-[100%] h-[450px] bg-[rgba(0,0,0.5,0.5)]" src="src/assets/images/party image.jpg" alt="bg image" />
    <h2 className="text-6xl font-bold text-white mt-[-300px] ml-[20%]">Don't miss out!<br/> Explore the <span className="text-[#FFB61D] ">vibrant events</span> hapenning locally & Globally. </h2>
<input type="search" placeholder="Search Events, Categories,Location..." className="ml-[25%] p-4 mt-10 w-[500px] rounded-lg" />
</div>


<div>
    <div className="font-bold text-3xl mt-28">
        <h2>Explore Categories</h2>
    </div>
    <Explore/>
</div>
<div className="mt-10">
    <h2 className="font-bold text-2xl">Popular Events</h2>
</div>
<div>
    <EventCategory/>
</div>
<div>
    <Popularevents/>
</div>

<div className="mt-5">
    <h2 className="text-2xl font-bold">Discover Best of Online Events</h2>
    <div><Onlineevent/>
    </div>
</div>
<div>
    <button className="border-2 p-2 ml-[50%] "> See More </button> 
</div>
<div className="bg-[#C4C4C4] text-center p-10">
    <h2>Events specially curated for you!</h2>
<p>Get event suggestions tailored to your interests! Don't let your favorite events slip away.</p>
<button className="bg-[#2B293D] text-[#FFE047] flex items-center ml-[40%] p-3 rounded-md hover:scale-110 mt-3 ">Get Started <FaArrowRight />
</button>
</div>

<div className="bg-[#C4C4C4] text-center p-10 mt-2 ">
    <div className="">
    <h2 className="text-2xl">Create an event with eventSphere</h2>
    <p>Got a show, event, activity or a great experience? Partner with us & get listed on eventSphere </p>
    </div>
    <div className="flex ml-[40%] ">
    
       <Link to="/create"> <button className="bg-[#FFE047] flex p-3 items-center rounded-md hover:scale-110 mt-3"> <FaRegCalendarPlus />Create Event</button></Link>
    </div>
</div>
<div>
    <Subscribe/>
</div>
        </div>
    )
}
export default Home