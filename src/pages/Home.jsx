import Explore from "../components/Explore"
import EventCategory from "../components/Eventcategory"
import Popularevents from "../components/Popularevents"
import Onlineevent from "../components/Onlineevent"

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
<div>
    <Popularevents/>
</div>

<div className="mt-5">
    <h2 className="text-2xl font-bold">Discover Best of Online Events</h2>
    <div><Onlineevent/>
    </div>
</div>
<div>
    <button className="border-2"> See More </button> 
</div>
<div className="bg-[#C4C4C4] ">
    <h2>Events specially curated for you!</h2>
<p>Get event suggestions tailored to your interests! Don't let your favorite events slip away.</p>
<button>Get Started</button>
</div>

        </div>
    )
}
export default Home