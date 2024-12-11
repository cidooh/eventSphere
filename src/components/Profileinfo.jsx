import React,{useState} from "react"

function Profileinfo(){
    const [error, setError]=useState({})
    const [profileData,setProfileData]=useState({})

    function handleChange(e){
        setProfileData((prev)=> ({...prev, [e.target.name]: e.target.value}))
    }

    function handleProfileInfo(){
        const errors={}
        !profileData.firstName || profileData.firstName === "" ? (errors.firstName = true) : (errors.firstName = false)
        !profileData.lastName || profileData.lastName === "" ? (errors.lastName = true) : (errors.lastName = false)
        !profileData.websiteName || profileData.websiteName === "" ? (errors.websiteName = true) : (errors.websiteName = false)
        !profileData.companyName || profileData.companyName === "" ? (errors.companyName = true) : (errors.companyName = false)
        setError(errors)
        console.log(errors);
        
    }
    return(
        <div className="">
            <div>
                <h2 className="font-bold text-2xl">Profile Information</h2>
            </div>
            <div className="flex w-[30vw] h-[50vh] border-2 shadow-xl mb-10">      
                      <div className="flex flex-col p-5">
                <p className="text-center p-3">First Name:</p><input name="firstName" type="text" placeholder="Enter first name" className="border-2 rounded-md p-2 w-[500px]"/>
            <p className="text-center p-3">Last Name:</p> <input name="lastName" type="text" placeholder="Enter Last Name" className="border-2 rounded-md p-2" />
            <p className="text-center p-3">Website:</p>  <input name="websiteName" type="text" placeholder="Enter website" className="border-2 rounded-md p-2" />
            <p className="text-center p-3">Company:</p><input name="companyName" type="text" placeholder="Enter company name" className="border-2 rounded-md p-2" />
            </div>
                  </div>

        </div>
    )
}
export default Profileinfo