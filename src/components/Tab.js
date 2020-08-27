
import React, { Component,useState} from 'react'
import '../css/tab.css'

import dashboard from '../images/dashboard.png'
import invoicing from '../images/invoicing.png'
import ledger from '../images/ledger.png'
import payments from '../images/payments.webp'
import reports from '../images/reports.png'


export default function Tag() {

   const images = [dashboard,invoicing,ledger,payments,reports]
const [img,setImg]=useState(images[0])
   

   const handleClick = (e) => {
        const prev = document.getElementsByClassName('active')[0];
        prev.classList.remove('active');
        e.target.classList.add('active');
        const newImg = images.find(item => item.slice().indexOf(e.target.id) >=0)
        console.log(toString(img))
        setImg(newImg)
    }

        return (
            <div className="py-5">
            <div className="container my-5">
                <div className="row mx-2 mx-md-5 ">
                    <h5 className="d-block d-md-none">Everything You Need</h5>
                    <h3 className="d-none d-md-block">Everything You Need</h3>
                    <div className="row mx-2  ">
                    <div ><span className="text-secondary Customfont mx-0">Create professional invoices, generate beautiful PDFs and send them to your customers.</span>
                    </div>
                    </div>
                </div>
                <div className="row mx-2 mx-md-5 border-bottom">
                    <div className=" mt-5" style={{overflowX:"auto", whiteSpace:"nowrap", overflow:"auto"}}>
                    <div className="nav nav-tabs d-flex flex-nowrap" >
                        <a className="nav-link py-4 py-4 active" href id="dashboard"  onClick={(e)=>handleClick(e)}>
				            Dashboard
			            </a>
                        <a className="nav-link py-4" href id="invoicing"  onClick={(e)=>handleClick(e)}>
				            Invoicing
			            </a>
                        <a className="nav-link py-4" href id="payments"  onClick={(e)=>handleClick(e)}>
				            Payments
			            </a>
                        <a className="nav-link py-4" href id="reports"  onClick={(e)=>handleClick(e)}>
				            Financial Reports
			            </a>
                        <a className="nav-link py-4" href id="ledger" onClick={(e)=>handleClick(e)}>
				            Ledger
			            </a>
                    </div>
                    </div>
                </div>
                <div className="row mt-4 mx-2 mx-md-5 ">
                    <img className="img-fluid rounded border" src={img} alt={document.getElementsByClassName('active')} />
                </div>          
            </div>
        </div>
        )
    }
