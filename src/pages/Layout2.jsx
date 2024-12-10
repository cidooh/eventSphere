import Nav2 from "../components/Nav2"
import Footer from "../components/Footer"

function Layout2({children}){
    return(
<div className="flex flex-col min-h-screen">
<Nav2/>
<main className="flex-1">
{children}
</main>
<Footer/>
</div>
    )
}
export default Layout2