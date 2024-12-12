
function Event2({props}){

    return(

<div>
            <div className="w-[350px]">
                <img src="src/assets/images/Christmas poster.png" alt="" className="rounded-xl hover:rotate-3"/>
                <button className="bg-slate-800 text-white p-2 rounded-xl text-xl shadow-xl hover:bg-yellow-400">Select Event</button>
            </div>
            <div className="flex gap-10">
            <div className="font-bold">DEC <br/> 20</div>
            <div>
                <p className="font-bold">Sound of Christmas 2024</p>
                <p>Uhuru Gardens</p>
                <p>6:30PM - 9:30PM</p>
                <p>Ksh 499 </p>
            </div>
            </div>
        </div>

    )
}
export default Event2