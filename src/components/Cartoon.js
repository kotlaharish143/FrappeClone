import React from 'react';
import comic from '../images/comic.jpeg';

export default function Header() {
   //  const Styles={
   //     height:800,
   //     width:1400,
   //     marginTop:60
   //  }

    return (
    <div className="container md-py-5">
        <div className="row">
        
        <div className=" col-md-12 col-sm-12 col-xs-12  my-4  " >
           <img src={comic} class="img-fluid mb-md-5" alt="stocks" />
        </div>
        </div>
        </div>
    )
  }
  