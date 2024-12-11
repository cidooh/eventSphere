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

<div>
    <div className="text-center border-2 p-4 mt-20">
    <div className="h-[200px] w-[200px] border-2 border-black p-3 rounded-full ">
        <h1 className="text-center mt-16 text-6xl font-bold font-mono ">Free</h1>
    </div>
    <div className="p-4 text-center">   
    <p className="text-2xl font-bold">Free Event</p>
    <p>I'm running a free event</p>
    </div>

    </div>
</div>
        </div>
    )
}
export default Eventtype