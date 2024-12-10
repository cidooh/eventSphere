import { IoTicketOutline } from "react-icons/io5";


function Eventtype(){
    return(
        <div className="mt-10">
<p className="text-2xl">What type of event are you running?</p>
<div className="border-2 p-3 text-center">
    <div className="">
<IoTicketOutline className="w-[400px] h-[200px]"/>
</div>
<p className="font-bold text-2xl">Ticketed Event</p> 
<p>My event requires tickets for entry</p>
</div>
        </div>
    )
}
export default Eventtype