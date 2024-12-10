import Eventdetails from "../components/Eventdetails"

function Createevent(){
    return(
        <div className="container mx-auto">
            <div>
        <h2 className="font-bold text-3xl">Create a New Event</h2>
        </div>
        <div>
<Eventdetails/>
        </div>
        </div>
    )
}
export default Createevent