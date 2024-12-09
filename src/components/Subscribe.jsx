function Subscribe(){
    return(
        <div className="bg-[#FFE047] flex justify-between text-center">
            <div className="">
            <h2>Subscribe to our Newsletter</h2>
            <p>Receive our weekly newsletter & updates with new events from <br/> your favorite organizers & venues.</p>
        </div>
        <div className="flex">
            <input type="email" placeholder="Enter your email address" className="rounded-md border-2 " />
            <button className="bg-[#2B293D] text-[#FFE047] border-2 rounded-md">Subscribe</button>
        </div>
        </div>
    )
}
export default Subscribe