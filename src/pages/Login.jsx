import Loginleft from "../components/Loginleft"
import Loginright from "../components/Loginright"

function Login(){
    return(
        <div className="flex bg-[#2B293D] gap-20">
            <div>
<Loginleft/>
</div>
<div>
    <Loginright/>
</div>
        </div>
    )
}
export default Login