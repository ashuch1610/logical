import { Children, useState } from 'react'
import Layout from '../../Components/Layout/Layout';
import { Link } from "react-router-dom";
import "../../common.css"


function Home() {

  
    
    return (

        //ash

        <Layout>
            <div className=''>
                <div className='display: flex '>

                    {/* //left side */}

                    <div  className='container '>

                    <div className='bg-white  '>

                        <h1 style={{ textAlign: 'left' }} className='font-bold ps-4'>Full Sustain</h1>
                        <h1 style={{ textAlign: 'left' }} className='font-bold ps-4'>Cargo Solution</h1>

                        <p style={{ textAlign: 'left' }} className='mt-9 ps-4'>a2KVMyyIgJJqLOpwCbkLeNHu5Y5VHfAzVe1a193InjYnHhS
                            twrVhvNQSFFw3WndnOJoww8qpNheHUrsRt0FXO0j7GMKPK</p>

                        <div className='mt-14 flex  justify-start ps-4'>
                            <div>
                            <Link to="/services">
                            <button className="bg-orange-100 text-black btn-ser">Our Services</button>
                                </Link>
                            </div>
                            <div>
                            <Link to="/aboutus">
                            <button className="bg-orange-100 ml-12 text-black btn-ser ">Learn More</button>
                                </Link>
                            </div>
                       
                            
                            
                        </div>

                        <div className='display: flex mt-20 mb-20'>
                            <div>

                                <h3 class="text-left">Real Time Tracking</h3>
                                <p class="text-left">Lorem ipsum dolor sit
                                    amet consectetur adipisicing elit.
                                    Tenetur vero temporibus minus officiis
                                    deserunt voluptatem adipisci quia mollitia
                                    fugiat dolor.</p>

                            </div>
                            <div>

                                <h3 class="text-left">Fast Logistics</h3>
                                <p class="text-left">Lorem ipsum dolor sit
                                    amet consectetur adipisicing elit.
                                    Tenetur vero temporibus minus officiis
                                    deserunt voluptatem adipisci quia mollitia
                                    fugiat dolor.</p>
                            </div>
                        </div>

                    </div>
                    </div>

                    {/* //right side */}
                    <div>
                        <img src="MicrosoftTeams-image (1).png" alt="" />

                    </div>

                </div>

                <div className='display: flex bg-black text-white '>
                    <div className='card'>
                        <h5 className='font-bold mt-6'>Why Logizai are the best in the word</h5>
                        <p className='mt-12'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                             Excepturi temporibus voluptatem sunt 
                            at eligendi cupiditate impedit saepe, cumque iste mollitia 
                            expedita esse sint quos harum tempora delectus dolorem. Minus, provident?</p>
                    </div>
                    <div className='card'>
                        <h5  className='font-bold mt-6'>Safe packing</h5>
                        <p className='mt-12'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                             Excepturi temporibus voluptatem sunt 
                            at eligendi cupiditate impedit saepe, cumque iste mollitia 
                            expedita esse sint quos harum tempora delectus dolorem. Minus, provident?</p>
                    </div>
                    <div className='card'>
                        <h5 className='font-bold mt-6'>Ship Everywhere</h5>
                        <p className='mt-12'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                             Excepturi temporibus voluptatem sunt 
                            at eligendi cupiditate impedit saepe, cumque iste mollitia 
                            expedita esse sint quos harum tempora delectus dolorem. Minus, provident?</p>
                    </div>


                </div>
            </div>


        </Layout>
    )

}


export default Home;