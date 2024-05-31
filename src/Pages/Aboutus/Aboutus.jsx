import { useState } from 'react'
import Layout from "../../Components/Layout/Layout";
import GridTry from "../../Components/Gridtry/GridTry";


function Aboutus()
{

    return(
      <Layout>

        <div className="bg-white-100 ml-9 mr-9">
      

          <div style={{ height: '200px' }} className="bg-orange-100">
          <h1>About Us</h1>
          <h1>Story behind our company</h1>
          </div>
          
          <div className="bg-white-100">
            
            <p style={{ textAlign: 'center' } } className="ml-8 mt-9 mb-9">Lorem ipsum dolor sit amet consectetur adipisicing elit.  In dignissimos soluta iure, sint quae reiciendis.</p>
          </div>
          <div className='display: flex justify-center'>

            <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqxCkXOgSUi8teT4khzgMRnHAoB9TmZ-BBZq5KTEtdZA&s" alt="Description of the image"></img>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqxCkXOgSUi8teT4khzgMRnHAoB9TmZ-BBZq5KTEtdZA&s" alt="Description of the image"></img>
            </div>
            <div className='ml-10 mr-10'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqxCkXOgSUi8teT4khzgMRnHAoB9TmZ-BBZq5KTEtdZA&s" alt="Description of the image" style={{height: '100%'}}></img>
            </div>
            <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqxCkXOgSUi8teT4khzgMRnHAoB9TmZ-BBZq5KTEtdZA&s" alt="Description of the image"></img>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqxCkXOgSUi8teT4khzgMRnHAoB9TmZ-BBZq5KTEtdZA&s" alt="Description of the image"></img>
            </div>
          </div>

          <div className='mt-10 ml-9 flex justify-center'>

            <GridTry/>

          </div>


        </div>

        
      </Layout>


    )
}

export default Aboutus;