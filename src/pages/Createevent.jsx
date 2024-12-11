import Eventdetails from "../components/Eventdetails"
import Eventtype from "./Eventtype"
function Createevent(){
    return(
        <div className="container mx-auto border-2 p-3 mt-20 shadow-xl">
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