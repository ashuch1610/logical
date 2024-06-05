import { Link } from "react-router-dom";
import "../../common.css"



const Header = () => {
    // navList Data
    
    const navList = (
        <ul className="flex space-x-3 text-white font-medium text-md px-5 navbar ">
            {/* Home */}
            <li>
                <Link to={'/'}>Home</Link>
            </li>

            {/* All Product */}
            <li>
                <Link to={'/services'}>Services</Link>
            </li>

            {/* Signup */}
            <li>
                <Link to={'/aboutus'}>AboutUs</Link>
            </li>

          
            

            {/* logout */}
            {/* <li>
                logout
            </li> */}

            {/* Cart */}
           
        </ul>
    )
    return (
        <nav className="bg-white sticky top-0 z-10">
            {/* main  */}
            <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
                {/* left  */}
                <div className="left py-3 lg:py-0">
                    <Link to={'/'}>
                    <h2 className=" font-bold text-black text-2xl text-center">SeLLandiammaN TranSport</h2>
                    </Link>
                </div>

                {/* right  */}
                <div className="right flex justify-center mb-4 lg:mb-0">
                    {navList}
                </div>

                {/* Search Bar  */}
                
            </div>
        </nav>
    );
}

export default Header;