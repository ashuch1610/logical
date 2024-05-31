import { Children, useState } from 'react'
import Layout from '../../Components/Layout/Layout';


function Home() {

    return (

        <Layout>
            <div >
                <div className='display: flex '>

                    {/* //left side */}

                    <div className='bg-green-100 '>

                        <h1 style={{ textAlign: 'left' }}>Full Sustain</h1>
                        <h1 style={{ textAlign: 'left' }}>Cargo Solution</h1>

                        <p style={{ textAlign: 'left' }} className='mt-9'>a2KVMyyIgJJqLOpwCbkLeNHu5Y5VHfAzVe1a193InjYnHhS
                            twrVhvNQSFFw3WndnOJoww8qpNheHUrsRt0FXO0j7GMKPKp
                            l2qg73HfxScl3hgM0lcEiQmoLWJLhJA0WfpVl1cTk84ZgNqcxDIG9UlNRuY3</p>

                        <div className='mt-14'>
                            <button className="bg-orange-100" >Our Services</button>
                            <button className="bg-orange-100 ml-12 ">Learn More</button>
                        </div>

                        <div className='display: flex mt-20'>
                            <div>

                                <h3>Real Time Tracking</h3>
                                <p>Lorem ipsum dolor sit
                                    amet consectetur adipisicing elit.
                                    Tenetur vero temporibus minus officiis
                                    deserunt voluptatem adipisci quia mollitia
                                    fugiat dolor.</p>

                            </div>
                            <div>

                                <h3>Fast Logistics</h3>
                                <p>Lorem ipsum dolor sit
                                    amet consectetur adipisicing elit.
                                    Tenetur vero temporibus minus officiis
                                    deserunt voluptatem adipisci quia mollitia
                                    fugiat dolor.</p>
                            </div>
                        </div>

                    </div>

                    {/* //right side */}
                    <div>
                        <img src="https://cdn2.vectorstock.com/i/1000x1000/70/26/school-bus-realistic-detailed-3d-vehicle-vector-21777026.jpg" alt="" />

                    </div>

                </div>

                <div className='display: flex bg-black-600 '>
                    <div>
                        <h5>Why Logizai are the best in the word</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                             Excepturi temporibus voluptatem sunt 
                            at eligendi cupiditate impedit saepe, cumque iste mollitia 
                            expedita esse sint quos harum tempora delectus dolorem. Minus, provident?</p>
                    </div>
                    <div>
                        <h5>Safe packing</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                             Excepturi temporibus voluptatem sunt 
                            at eligendi cupiditate impedit saepe, cumque iste mollitia 
                            expedita esse sint quos harum tempora delectus dolorem. Minus, provident?</p>
                    </div>
                    <div>
                        <h5>Ship Everywhere</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
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