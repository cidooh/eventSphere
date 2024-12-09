function Contactdetails(){
    return(
        <div>
            <div>
            <h2 className="font-bold text-2xl">Contact Details</h2>
            <p>These details are private and only used to contact you for ticketing or prizes.</p>
           </div>

            <div className="flex flex-col p-5">
                <p>Phone Number:</p><input type="text" placeholder="Enter phone number" className="border-2 rounded-md"/>
            <p>Address :</p> <input type="text" placeholder="Enter Address" className="border-2 rounded-md" />
            <p>City/Town:</p>  <input type="text" placeholder="Enter city" className="border-2 rounded-md" />
            <p>Country:</p><input type="text" placeholder="Enter country" className="border-2 rounded-md" />
            <p>Pincode:</p><input type="text" placeholder="Enter pincode" className="border-2 rounded-md" />
            </div>
        </div>
    )
}
export default Contactdetails