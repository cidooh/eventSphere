function Contactdetails(){
    return(
        <div>
            <div>
            <h2 className="font-bold text-2xl">Contact Details</h2>
            <p>These details are private and only used to contact you for ticketing or prizes.</p>
           </div>

            <div className="flex flex-col p-5 border shadow-xl">
                <p className="text-center p-3">Phone Number:</p><input type="text" placeholder="Enter phone number" className="border-2 rounded-md p-2"/>
            <p className="text-center p-3">Address :</p> <input type="text" placeholder="Enter Address" className="border-2 rounded-md p-2" />
            <p className="text-center p-3">City/Town:</p>  <input type="text" placeholder="Enter city" className="border-2 rounded-md p-2" />
            <p className="text-center p-3">Country:</p><input type="text" placeholder="Enter country" className="border-2 rounded-md p-2" />
            <p className="text-center p-3">Pincode:</p><input type="text" placeholder="Enter pincode" className="border-2 rounded-md p-2" />
            </div>
        </div>
    )
}
export default Contactdetails