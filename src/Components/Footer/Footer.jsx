import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            {/* footer  */}
            <footer className="text-gray-600 body-font bg-orange-600">
                {/* main  */}
                <div className="container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col">
                    {/* logo  */}
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                        <span className="text-xl font-bold">SeLLandiammaN TranSport</span>
                    </a>
                    {/* para  */}
                    <p className="text-sm text-gray-100 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                      
                      Contact Us : +91 8148353429
                       
                    </p>
                    
                   
                </div>
            </footer>
        </div>
    );
}

export default Footer;