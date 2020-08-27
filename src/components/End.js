import React from 'react';
import {Button} from 'react-bootstrap'
import "../css/end.css"
export default function End(){
    return (
        <div className=" py-3">
        <div className="container my-5" >
        <div className="row mt-3 mx-1">
        <div className="container  text-center py-5 px-2 p-lg-5 rounded " style={{backgroundColor:"#ecf5fe"}} >
            <div className="container px-lg-5 inner">
                <h4 className="d-block d-md-none">Free Desktop Accounting Software for Small Businesses</h4>
                <h1 className="mt-5 mb-3 d-none d-md-block">Free Desktop Accounting <br />Software for Small Businesses</h1>
                <p className="text-secondary ">Frappe Books simplifies invoicing, billing, and accounting for freelancers and small business owners. </p>
                <Button variant="primary" size="lg" className="px-5 py-3 mt-4 rounded">Download for free</Button><br />
                <small>Available for macOS, Linux and Windows</small>
            </div>
        </div>
    </div>
</div>
</div>
    )
}