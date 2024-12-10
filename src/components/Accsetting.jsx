import { Link } from "react-router-dom"

function Accsetting(){
    return(
<div className="bg-[#EEEEEE] h-[100vh] p-5">
    <div className="text-2xl font-bold">
    <h2>Account Settings</h2>
    </div>

    <div>
        <ul className="p-5">
           <Link to="/profile"> <li>Account Info</li></Link>
            <li>Password</li>
        </ul>
    </div>
</div>
    )
}
export default Accsetting