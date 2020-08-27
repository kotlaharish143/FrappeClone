import React from 'react'
import frappe from '../images/frappe-logo-type.png'
import facebook from '../images/facebook.svg'
import twitter from '../images/twitter.svg'
import medium from '../images/medium.svg'
import github from '../images/github.svg'

export default function Footer() {

    return (
        <div className=" py-5">
            <div className="container ">
                
                    <div className="row">
                        <img src={frappe} className="ml-4" style={{width:80}}/>
                    </div>
	                <div className="row border-bottom pb-3">
	                	<div className="d-flex flex-wrap col-sm-6">
                            <a href className="nav-link">Company</a>
        <a href className="nav-link">ERPNext</a>
             <a href className="nav-link">Team</a>
          <a href className="nav-link">Contact</a>
	                	</div>

	                	<div className="col-sm-6 d-flex ">
                            <span className="ml-md-auto">
                                <a href className="nav-link d-inline"><img src={facebook} alt="Facebook" /></a>
                                <a href className="nav-link d-inline"><img src={twitter} alt="Twitter" /></a>
                                <a href className="nav-link d-inline"><img src={medium} alt="Medium" /></a>  
                                <a href className="nav-link d-inline"><img src={github} alt="GitHub" /></a>
                            </span>	
	                	</div>
	                </div>
               
                <div className="footer-info  mt-3">
			        <div className="row text-muted ">
			        	<div className="col-sm-6 col-12">
                            <a href="#">© FRAPEEBOOKS</a>
			        	</div>
			        	<div className="col-sm-6 col-12 mt-3 mt-md-0 d-flex">
                            
			        	</div>
			        </div>
		        </div>
            </div>
        </div>

    )
}