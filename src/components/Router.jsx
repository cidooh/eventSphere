import {BrowserRouter,  Routes,Route} from "react-router-dom"
import Home from "../pages/Home"
import Notfound from "../pages/Notfound"
import Layout from "../pages/Layout"

function Router(){
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/home" element={<Layout><Home/></Layout>}/>
<Route path="/*" element={<Layout><Notfound/></Layout>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default Router