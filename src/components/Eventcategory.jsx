import Categoryall from "./Categoryall"
import Categorytoday from "./Categorytoday"
import Categorytomorrow from "./Categorytomorrow"
import Categoryweekend from "./Categoryweekend"
import Categoryfree from "./Categoryfree"
function EventCategory(){
    return(
<div className="flex gap-4">
<Categoryall/>
<Categorytoday/>
<Categorytomorrow/>
<Categoryweekend/>
<Categoryfree/>
</div>
    )
}
export default EventCategory