import Explore from "../components/Explore"
import EventCategory from "../components/Eventcategory"

function Home(){
    return(
        <div className="container mx-auto">
<div>
    <img className="absolute w-[550px] " src="s" alt="bg image" />
    <h2 className="text-3xl font-bold text-white relative ">Don't miss out!<br/> Explore the <span className="text-[#FFB61D] ">vibrant events</span> hapenning locally & Globally </h2>
<input type="search" placeholder="Search Events, Categories,Location..." />

</div>
<div>
    <div className="font-bold text-3xl">
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
        </div>
    )
}
export default Home