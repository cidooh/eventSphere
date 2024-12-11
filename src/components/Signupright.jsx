import React,{useState} from "react"
import { Link } from "react-router-dom"
import { createUserWithEmailAndPassword } from "firebase/auth"
import {auth} from "../firebase" 
import { useNavigate } from "react-router-dom"


function Signupright(){
const [error,setError]=useState({})
const [formData,setFormData]=useState({})
const navigate = useNavigate()


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
    if(!errors.firstName && !errors.email && !errors.password && !errors.confirmPassword){

        createUserWithEmailAndPassword(auth,formData.email,formData.password)
        .then((userCredential) => {
            const user = userCredential.user
            if (user){
                navigate("/login")
            }
            console.log(user)

        })
    }
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

<div className="ml-[20%] text-xl p-5 border-2 w-[35vw] shadow-xl items-center">
    <p className="p-4">Full Name</p>
    <input name="fullName" type="text" placeholder="Enter your full name" onChange={(e) => handleChange(e)} value={formData.fullName && formData.fullName} className={`p-4 border-2 w-[500px] ${error.fullName ? "border-red-500" : "border-gray-400"}`}/>

<p  className="p-4">E-mail Address</p>
<input name="email" type="email" placeholder="Enter your email" onChange={(e) => handleChange(e)} value={formData.email && formData.email} className={`p-4 border-2 w-[500px] ${error.email ? "border-red-500" : "border-gray-400"}`}/>

<p className="p-4">Password</p>
<input name="password" type="password" placeholder="Enter Password" onChange={(e) => handleChange(e)} value={formData.password && formData.password} className={`border-2 p-4 w-[500px] ${error.password ? "border-red-500" : "border-gray-400"}`}/>

<p className="p-4">Confirm Password</p>
<input name="confirmPassword" type="password" placeholder="Re-enter Password" onChange={(e) => handleChange(e)} value={formData.confirmPassword && formData.confirmPassword} className={`border-2 p-4 w-[500px] ${error.confirmPassword ? "border-red-500" : "border-gray-400"}`}/>
</div>




<Link to="/login"><button className="p-4 border-2 w-[200px] rounded-2xl text-xl bg-[#2B293D] text-white ml-[20%] mt-10 hover:scale-110" onClick={handleSignUp}>Create Account</button></Link>
<p className="ml-[20%] p-7 text-xl">Already have an account? <span className="hover:text-[#FFE047]"><Link to="/login">Sign in</Link></span></p>
</div>
        </div>
    )
}
export default Signupright