import React from "react"
import Smallcard from "./Smallcard.js"

export default function Smallcardcontroller(){
    const data=[
        {
            id:1,
            title:'Journal Entries',
            description: 'Record ad-hoc accounting entries for entering expenses, opening entires, and bank payments.'
        },
        {
            id:2,
            title:'Invoice Templates',
            description: 'Beautiful Invoice templates that you can further customize with the color and logo of your brand.'
        },
        {
            id:3,
            title:'Works Offline',
            description: 'Frappe Books uses a local file from your computer and when you create invoices, it saves them on your local machine.'
        },
        {
            id:4,
            title:'Privacy by Default',
            description: 'Frappe Books data is never uploaded to a cloud, which means you never compromise your ownership and privacy.'
        },
        {
            id:5,
            title:'Portable',
            description: 'Frappe Books uses the lightweight SQLite database which uses simple files to store their data.'
        },
        {
            id:6,
            title:'Financial Reports',
            description: 'Frappe Books comes with standard financial reports like Profit and Loss Statement and  Balance Sheet.'
        },
        {
            id:7,
            title:'Multi-currency',
            description: 'Record your invoices in your customer’s currency and Frappe Books will convert them in your currency.'
        },
        {
            id:8,
            title:'Open Source',
            description: 'Frappe Books is free and open-source software. Help us improve it by reporting issues or fixing them on GitHub.'
        },

    ]
    return (
         
        <div className="container mx-3 mx-md-auto py-0 py-md-4 ">
            
                <div className="row my-4 font-weight-bold ">
                    <h5 className="d-block d-md-none">More Features</h5>
                    <h2 className="d-none d-md-block ">More Features</h2>
                </div>

                <div className="row mb-2 mb-lg-5 pb-5" >
                    { data.map(item =><Smallcard key={item.id} title={item.title} description={item.description} />) }  
                </div>
              
               </div>
      )




}