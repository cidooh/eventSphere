

function Eventdetails(){
    return(
        <div className="">
            <div className="text-2xl mt-10">
            <h2>Event Details</h2>
            </div>
            <div className="flex items-center gap-20 p-2">
                <p className="font-semibold">Event Title<span className="text-red-500">*</span></p>
                <input type="text" placeholder="Enter the name of your event" className="border-2 p-2 w-[300px] " />
            </div>
            <div className="flex items-center gap-10 p-3">
                <p className="font-semibold">Event Category<span className="text-red-500">*</span></p>
                <input type="select" placeholder="Please select one" className="border-2 p-2 w-[310px] "/>
            </div>

            <div>
                <div className="text-2xl p-3">
                <p>Date & Time</p>
                </div>
                <div className="flex gap-3">
                <p className="font-semibold">Event Type <span className="text-red-500">*</span></p>
                <div className="flex gap-2 p-2">
            <div className="w-4 h-4 items-center p-2 border-2 border-black rounded-full"></div>
            <div><p>Single Event</p></div>
            </div>

            <div className="flex gap-2 p-2">
            <div className="w-4 h-4 items-center p-2 border-2 border-black rounded-full"></div>
            <div><p>Recurring Event</p></div>
            </div>    
            </div>

            <div className="flex gap-3">
                <p className="font-semibold">Session(s)<span className="text-red-500">*</span></p>
                <div className="flex gap-2 p-2 flex-col">
            <div><p>Start Date<span className="text-red-500">*</span> </p></div>
            <div className="border-2 border-black"><input type="date" /></div>
            </div>

            <div className="flex gap-2 p-2 flex-col">
            <div> <p>Start Time<span className="text-red-500">*</span> </p></div>
            <div className="border-2 border-black"> <input type="time" placeholder="12:00" /></div>
            </div>    
       </div>

       <div>
                <p className="text-2xl p-2">Location</p>
                <div className="flex items-center gap-4">
                    <p>Where will your<span className="text-red-500">*</span> <br/>event take place?</p>
                    <select className="w-[200px] border-2 h-10 rounded-sm " multiple>
                        <option value="disabled">Thika</option>
                        <option>Nairobi CBD</option>
                        <option>Juja</option>
                        <option>Other</option>
                    </select>
                </div>
            </div>

            <div>
                <p className="text-2xl  p-5">Additional Information</p>
<div className="p-3">
    <p>Event Description<span className="text-red-500">*</span></p>
    <textarea className="border border-gray-500 p-4" name="" id="" cols="50" rows="10" placeholder="Describe what's special about your event & other important details."></textarea>
</div>

            </div>

            </div>
<button className="p-3 border rounded-lg bg-[#2B293D] text-white">Save & Continue</button>
                    </div>
    )
}
export default Eventdetails