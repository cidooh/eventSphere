function Profileinfo(){
    return(
        <div>
            <div>
                <h2 className="font-bold text-2xl">Profile Information</h2>
            </div>
            <div className="flex ">      
                      <div className="flex flex-col p-5">
                <p className="text-center p-3">First Name:</p><input type="text" placeholder="Enter first name" className="border-2 rounded-md   p-2"/>
            <p className="text-center p-3">Last Name:</p> <input type="text" placeholder="Enter Last Name" className="border-2 rounded-md  p-2" />
            <p className="text-center p-3">Website:</p>  <input type="text" placeholder="Enter website" className="border-2 rounded-md p-2" />
            <p className="text-center p-3">Company:</p><input type="text" placeholder="Enter company name" className="border-2 rounded-md p-2" />
            </div>
                  </div>

        </div>
    )
}
export default Profileinfo