import { FcGoogle } from "react-icons/fc";
import React, {useState } from "react"


function Loginright(){

    const [error,setError]=useState({})
    const [formData,setFormData]=useState({})

    function handleChange(e){
        setFormData((prev)=>({...prev,[e.target.name]:e.target.value}))
    }

    function handleLogin(e){
const errors = {}
!formData.email || formData.email === "" ?(errors.email =true):(errors.email=false)
!formData.password || formData.password === "" ?(errors.password=true) :(errors.password=false)
setError(errors)
console.log(errors)
    }

    return(
        <div className="bg-white mt-24 rounded-lg min-h-screen w-[70pc]">
            <div className="ml-[20%]">
            <div className="text-6xl font-bold ml-[40%] p-10">
                <h1>Login</h1>
            </div>
                {error.email || error.password ? (<p className="text-red-500 text-center">Please fill all the required fields</p>) : <p> </p>}
<div className="p-10">
   <button className="p-5 border-2 flex ml-[40%] rounded-2xl text-xl hover:bg-[#FFE047]"><FcGoogle className=" w-[30px] h-[30px] "/>Login With Google</button>
   <h1 className="p-6 text-center">OR</h1>  
</div>

<div className="ml-[20%]">
    <p>Email Address</p>
    <input name="email" type="email" placeholder="Enter your e-mail" className={`p-4 border-2 w-[500px] ${error.email ? "border-red-500" : "border-gray-400" }`} onChange={(e)=>handleChange(e)} value={formData.email && formData.email}/>

<p className="mt-10">Password</p>
<input name="password" type="password"placeholder="Enter Password" className={`border-2 p-4 w-[500px] ${error.password ? "border-red-500" : "border-grey-400"}`} onChange={(e)=>handleChange(e)}/>
</div>

<button className="p-4 mt-10 border-2 w-[200px] rounded-2xl text-xl bg-[#2B293D] text-white ml-[20%] " onClick={handleLogin}>Login</button>
<p className=" ml-[20%] p-4">Dont have an account?Sign up</p>
</div>
        </div>
    )
}
export default Loginright