import { FaGooglePlay } from "react-icons/fa";
import { AiOutlineApple } from "react-icons/ai";


function Footer(){
    return(
        <div className="bg-[#2B293D] text-white flex justify-between p-5">
        <div>
            <h3 className="font-bold mb-5">Company Info</h3>
<ul>
    <li>About Us</li>
    <li>Careers</li>
    <li>FAQs</li>
    <li>Terms of Service</li>
    <p>Privacy Policy</p>
</ul>
        </div>

        <div>
            <h3 className="font-bold mb-5">Help</h3>
            <ul>
                <li>Account Support</li>
                <li>Listing Events</li>
                <li>Event Ticketing</li>
                <li>Ticket Purchase Terms & Conditions</li>
            </ul>
        </div>

        <div>
            <h3 className="font-bold mb-5">Categories</h3>
            <ul>
                <li>Concerts & Gigs</li>
                <li>Festivals & Lifestyle</li>
                <li>Business & Networking</li>
                <li>Food & Drinks</li>
                <li>Perfoming Arts</li>
            </ul>
        </div>

        <div>
            <h3 className="font-bold mb-5">Follow Us</h3>
            <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Youtube</li>
            </ul>
        </div>

        <div className="flex flex-col gap-5">
            <h3 className="font-bold mb-5">Download The App</h3>
            <div className="flex gap-3 p-3 border-2 rounded-md">
            <FaGooglePlay/> 
            <p>Get it on<br/> Google Play</p>
            </div>

            <div className="border-2 p-3 flex gap-3">
            <AiOutlineApple/>
            <p>Download on the<br/> App Store</p>
            </div>
        </div>
        </div>
    )
}
export default Footer