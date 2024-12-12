import { Link } from "react-router-dom"

function Accsetting(){
    return(
<div className="bg-[#EEEEEE] h-[100vh] p-5">
    <div className="text-2xl font-bold">
    <h2>Account Settings</h2>
    </div>

    <div>
        <ul className="p-10 text-3xl ">
           <Link to="/profile"> <li className="hover:bg-white w-full">Account Info</li></Link>
            <li className="mt-10 hover:bg-white">Password</li>
        </ul>
    </div>
</div>
    )
}
export default Accsetting