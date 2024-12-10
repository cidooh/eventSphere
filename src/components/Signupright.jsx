import { FcGoogle } from "react-icons/fc";


function Signupright(){
    return(
        <div className="bg-white mt-24 rounded-lg min-h-screen w-[70pc]">
            <div className="ml-[20%]">
            <div className="text-6xl font-bold ml-[35%] p-10">
                <h1>Create Account</h1>
            </div>
<div className="p-10">
   
   
</div>

<div className="ml-[20%] text-xl p-5">
    <p className="p-4">Full Name</p>
    <input type="text" placeholder="Enter your full name" className="p-4 border-2 w-[500px]"/>

<p  className="p-4">E-mail Address</p>
<input type="email" placeholder="Enter your email" className="p-4 border-2 w-[500px]"/>

<p className="p-4">Password</p>
<input type="password"placeholder="Enter Password" className="border-2 p-4 w-[500px]"/>

<p className="p-4">Confirm Password</p>
<input type="password"placeholder="Enter Password" className="border-2 p-4 w-[500px]"/>
</div>




<button className="p-4 border-2 w-[200px] rounded-2xl text-xl bg-[#2B293D] text-white ml-[20%] mt-10">Create Account</button>
<p className="ml-[20%] p-7">Already have an account?Sign in</p>
</div>
        </div>
    )
}
export default Signupright