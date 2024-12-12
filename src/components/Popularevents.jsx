import Event1 from "./Event1"
import Event2 from "./Event2"
import { Link } from "react-router-dom"
function Popularevents({event,setEvent}){
    return(
        <div className="mt-5 flex gap-10">
   <Link to ="/event"> <Event1 event={event} setEvent={setEvent} img="src/assets/images/Christmas poster.png" name="Sound of Christmas 2024" time="6:30PM - 9:30PM" price={499} /></Link>
   <Link to ="/event"> <Event2 event={event} setEvent={setEvent} img="src/assets/images/Christmas poster.png" name="Sound of Christmas 2024" time="6:30PM - 9:30PM" price={499}/></Link>
        </div>
    )
}
export default Popularevents