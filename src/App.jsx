import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router,
  Route,
  Routes
 } from "react-router-dom";
import './App.css'
import Home from "../../ST_Transporatation/src/Pages/Home/Home";
import Aboutus from "../src/Pages/Aboutus/Aboutus";
import TeamMembers from "../src/Pages/TeamMebers/TeamMembers";
import Services from "../src/Pages/Services/Services";
import GridTry from ".../../../src/Components/Gridtry/GridTry";



function App() {
  

  return (
    <>


      <Router>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/aboutus' element={<Aboutus/>}/>
            <Route path='/teammembers' element={<TeamMembers/>}/>
            <Route path='/Services' element={<Services/>}/>
            <Route path='/grid' element={<GridTry/>}/>

            
            
        </Routes>
      </Router>
   
    </>
  )
}

export default App
