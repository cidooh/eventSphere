import React,{useState} from "react"


function Signupright(){
const [error,setError]=useState({})
const [formData,setFormData]=useState({})


function handleChange(e){
    setFormData((prev) =>({...prev, [e.target.name]:e.target.value}))
}

function handleSignUp(){
    const errors = {}
    !formData.fullName || formData.fullName === "" ? (errors.fullName = true): (errors.fullName = false)
    !formData.email || formData.email === "" ? (errors.email = true) : (errors.email = false)
    !formData.password || formData.password === "" ? (errors.password = true) : (errors.password = false)
    !formData.confirmPassword || formData.confirmPassword === "" ? (errors.confirmPassword = true) : (errors.confirmPassword = false)

    setError(errors)
}
    return(
        <div className="bg-white mt-24 rounded-lg min-h-screen w-[70pc]">
            <div className="ml-[20%]">
            <div className="text-6xl font-bold ml-[35%] p-10">
                <h1>Create Account</h1>
            </div>
            {error.fullName || error.email || error.password || error.confirmPassword ? (<p className="text-red-500 text-center">Please fill all the fields</p>) : (
          <p> </p>)}
<div className="p-10">
   
   
</div>

<div className="ml-[20%] text-xl p-5">
    <p className="p-4">Full Name</p>
    <input name="fullName" type="text" placeholder="Enter your full name" className={`p-4 border-2 w-[500px] ${error.fullName ? "border-red-500" : "border-gray-400"}`}/>

<p  className="p-4">E-mail Address</p>
<input name="email" type="email" placeholder="Enter your email" className={`p-4 border-2 w-[500px] ${error.email ? "border-red-500" : "border-gray-400"}`}/>

<p className="p-4">Password</p>
<input name="password" type="password" placeholder="Enter Password" className={`border-2 p-4 w-[500px] ${error.password ? "border-red-500" : "border-gray-400"}`}/>

<p className="p-4">Confirm Password</p>
<input name="confirmPassword" type="password" placeholder="Re-enter Password" className={`border-2 p-4 w-[500px] ${error.confirmPassword ? "border-red-500" : "border-gray-400"}`}/>
</div>




<button className="p-4 border-2 w-[200px] rounded-2xl text-xl bg-[#2B293D] text-white ml-[20%] mt-10" onClick={handleSignUp}>Create Account</button>
<p className="ml-[20%] p-7">Already have an account?Sign in</p>
</div>
        </div>
    )
}
export default Signupright