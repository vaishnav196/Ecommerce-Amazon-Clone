import React from 'react'

export default function Newnav() {
  return (
    <div className='bg-black'>
      <div className="container-fluid new_nav ">
        <div className="row new_data">
            <div className="col-md-8 left_data text-white d-flex justify-content-evenly ">
               <a href="" className='nav-link'>All</a>
               <a href="" className='nav-link'>Mobiles</a>
               <a href=""className='nav-link'>Bestsellers</a>
               <a href=""className='nav-link'>fashions</a>
               <a href=""className='nav-link'>Customer service</a>
               <a href=""className='nav-link'>Electronics</a>
               <a href=""className='nav-link'>Prime</a>
               <a href=""className='nav-link'>Today's Deals</a>
               <a href=""className='nav-link'>Amazon Pay</a>
               
            </div>
            <div className="right_data col-md-4">
<img src="img/nav.jpg" alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}
