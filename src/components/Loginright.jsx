import { FcGoogle } from "react-icons/fc";


function Loginright(){
    return(
        <div className="bg-white mt-24 rounded-lg min-h-screen w-[70pc]">
            <div className="ml-[20%]">
            <div className="text-6xl font-bold ml-[40%] p-10">
                <h1>Login</h1>
            </div>
<div className="p-10">
   <button className="p-5 border-2 flex ml-[40%] rounded-2xl text-xl hover:bg-[#FFE047]"><FcGoogle className=" w-[30px] h-[30px] "/>Login With Google</button>
   <h1 className="p-6 text-center">OR</h1>  
</div>

<div className="ml-[20%]">
    <p>Email Address</p>
    <input type="email" placeholder="Enter your e-mail" className="p-4 border-2 w-[500px]"/>

<p>Password</p>
<input type="password"placeholder="Enter Password" className="border-2 p-4 w-[500px] mt-10"/>
</div>

<button className="p-4 mt-10 border-2 w-[200px] rounded-2xl text-xl bg-[#2B293D] text-white ml-[20%] ">Login</button>
<p className=" ml-[20%] p-4">Dont have an account?Sign up</p>
</div>
        </div>
    )
}
export default Loginright