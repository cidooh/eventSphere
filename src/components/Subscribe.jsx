function Subscribe(){
    return(
        <div className="bg-[#FFE047] flex justify-between text-center p-4">
            <div className="ml-[20%] text-xl">
            <h2>Subscribe to our Newsletter</h2>
            <p>Receive our weekly newsletter & updates with new events from <br/> your favorite organizers & venues.</p>
        </div>
        <div className="flex">
            <input type="email" placeholder="Enter your email address" className="rounded-md border-2 w-[300px] p-2 " />
            <button className="bg-[#2B293D] text-[#FFE047] border-2 rounded-md w-[150px]">Subscribe</button>
        </div>
        </div>
    )
}
export default Subscribe