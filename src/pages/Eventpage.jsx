
import Eventsdatetime from "../components/Eventstimedate"
import Eventlocation from "../components/Eventlocation"
import Eventdescr from "../components/Eventdescr"

function Eventpage(){
    return(
        <div className="container mx-auto mt-20">
<div>
    <img src="src/assets/images/Christmas poster.png" alt=""  className="rounded-2xl w-[1000px]" />
</div>
<div className="mt-5 p-4">
    <Eventsdatetime/>
</div>
<div className="mt-5 p-4">
    <Eventlocation/>
</div>

<div className="mt-5 p-4">
    <Eventdescr/>
</div>
        </div>
    )
}
export default Eventpage