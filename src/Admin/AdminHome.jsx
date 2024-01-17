import React from 'react'
import 
{ BsFillArchiveFill, BsPeopleFill}
 from 'react-icons/bs'
import { BsCurrencyDollar } from "react-icons/bs";

function Home() {

  return (
    <main className='main-container-admin'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Products</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>300</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Sales</h3>
                    < BsCurrencyDollar className='card_icon'/>
                </div>
                <h1>2000</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Customers</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>33</h1>
            </div>
        </div>
    </main>
  )
}

export default Home