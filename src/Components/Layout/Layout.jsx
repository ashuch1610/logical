import { useState } from 'react'
import Footer from "../Footer/Footer"
import Navbar from "../Header/Header";


function Layout({children})
{
    const divStyle = {
        
        border: '50px solid orange'
      };
    return(
        <div style={divStyle} >
            <Navbar/>
            <div>
                {children}
            </div>
            <Footer/>


        </div>

    )
}

export default Layout;