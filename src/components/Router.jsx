import {BrowserRouter,  Routes,Route} from "react-router-dom"
import Home from "../pages/Home"
import Notfound from "../pages/Notfound"
import Layout from "../pages/Layout"
import Profile from "../pages/Profile"
import Createevent from "../pages/Createevent"
import Login from "../pages/Login"

function Router(){
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout><Home/></Layout>}/>
<Route path="*" element={<Layout><Notfound/></Layout>}/>
<Route path="/profile" element={<Layout><Profile/></Layout>}/>
<Route path="/login" element={<Layout><Login/></Layout>}/>
<Route path="/create" element={<Layout><Createevent/></Layout>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default Router