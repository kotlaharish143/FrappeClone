import React from 'react';
import face_img from '../images/face_img.png';
import '../css/Navbar.css'
import { Button } from 'react-bootstrap';
import '../App.css'
export default function Header() {
    const Styles={
        width:600,
        height:520,
        marginTop:10
    }
    const headerStyle={
       
       marginTop:'100px',
     
      
    }



    return (
        <div className="container pt-5   mt-lg-3 mb-5">
        <div className="row ml-3">  
         <div className="col-md-6  mx-xs-3 pl-1 pr-0 pt-lg-5  " >
         <h3 className=" d-block d-md-none ">Free,Modern Desktop Accounting</h3>
          <h1 className="  ml-0 d-none d-md-block " style={headerStyle}>Free, Modern Desktop Accounting</h1>
          <div className=" text-secondary mb-1 mt-4 container-fluid pl-0 ">Simple, well designed, desktop accounting software for freelancers and small businesses. Free and Open Source.</div>
            <div className="mt-4 ">
                        <Button  size="lg" className="px-4 py-2 rounded bg-primary">Download</Button>
                        <Button  size="lg" className=" ml-4 text-primary px-4 py-2 bg-light rounded">Github</Button>
                    </div>
        </div>
        
        <div className="col-md-6  mt-4 d-none d-md-block" >
           <img src={face_img} className=" " alt="stocks" style={Styles}/>
        </div>
        </div>
        </div>
    )
  }
  