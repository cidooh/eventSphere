import Eventdetails from "../components/Eventdetails"
import Eventtype from "./Eventtype"
function Createevent(){
    return(
        <div className="container mx-auto">
            <div>
        <h2 className="font-bold text-3xl mt-10 text-center">Create a New Event</h2>
        </div>
        <div className="flex justify-between">
        <div >
<Eventdetails/>
        </div>
        <div>
            <Eventtype/>
        </div>
        </div>
        </div>
    )
}
export default Createevent