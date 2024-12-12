import {BrowserRouter,  Routes,Route} from "react-router-dom"
import Home from "../pages/Home"
import Notfound from "../pages/Notfound"
import Layout from "../pages/Layout"
import Layout2 from "../pages/Layout2"
import Profile from "../pages/Profile"
import Createevent from "../pages/Createevent"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import Eventpage from "../pages/Eventpage"
import Tickets from "../pages/Tickets"
import Ticketattendee from "./Ticketattendee"
import {useState,useEffect} from "react"

function Router(){
    const [event,setEvent] = useState([])

    useEffect(()=> {
        event.length !== 0 && localStorage.setItem("cart", JSON.stringify(event))
    }, [event])

    
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout event={event} setEvent={setEvent}><Home event={event} setEvent={setEvent}/></Layout>}/>
<Route path="/profile" element={<Layout><Profile/></Layout>}/>
<Route path="/login" element={<Layout2><Login/></Layout2>}/>
<Route path="/create" element={<Layout><Createevent/></Layout>}/>
<Route path="/signup" element={<Layout><Signup/></Layout>}/>
<Route path="/event" element={<Layout ><Eventpage event={event} setEvent={setEvent}/></Layout>}/>
<Route path="/ticket" element={<Layout2><Tickets/></Layout2>}/>
<Route path="/attendee" element={<Layout2><Ticketattendee/></Layout2>}/>
<Route path="*" element={<Layout><Notfound/></Layout>}/>

        </Routes>
        </BrowserRouter>
    )
}
export default Router