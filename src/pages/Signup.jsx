import Signupright from "../components/Signupright"
import Signupleft from "../components/Signupleft"

function Signup(){
    return(
        <div className="flex bg-[#2B293D] gap-20">
            <div>
<Signupleft/>
</div>
<div>
    <Signupright/>
</div>
        </div>
    )
}
export default Signup