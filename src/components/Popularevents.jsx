import Event1 from "./Event1"
import Event2 from "./Event2"
import { Link } from "react-router-dom"
function Popularevents(){
    return(
        <div className="mt-5 flex gap-10">
   <Link to ="/event"><Event1/></Link>
   <Link to ="/event"><Event2/></Link>
        </div>
    )
}
export default Popularevents