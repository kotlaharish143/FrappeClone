import React from 'react';
import team from '../images/team.webp';
export default function Team() {
   //  const Styles={
   //     height:800,
   //     width:1400,
   //     marginTop:60
   //  }

    return (
        <div className="bg-light  py-5 py-lg-5" >
        <div className="container">
        <div className="row ">
        <div className=" col-md-12 col-sm-12 col-xs-12 my-4 " >
        <h2 className=" d-none d-md-block font-weight-bold">From the Team Behind ERPNext</h2>
        <h5 className=" d-block d-md-none">From the Team Behind ERPNext</h5>
        <span className=" text-secondary ">We have been building business software for over a decade now. Learning from our mistakes and picking the best parts of our flagship product ERPNext, we came up with a simple app that does one thing well, Accounting.</span>
        </div>
        </div>
        <div className="row ">
        <div className=" col-md-12 col-sm-12 col-xs-12 mx-2 my-4 " >
           <img src={team} class="img-fluid  rounded" alt="stocks" style={{borderRadius:30}} />
        </div>
        </div>
        </div> </div>
    )
  }
  