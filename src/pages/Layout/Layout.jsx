import { Link, Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div>
            <nav className="nav1">
                <Link to='/'>Home</Link>
                <Link to='/Avtosalonlar'>Avtosalonlar</Link>
                <Link to='/NevCard'>NevCard</Link>

            </nav>
            <Outlet/> 
        
        </div>
    )
}