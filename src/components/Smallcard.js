import React from 'react'


export default function Smallcard(props) {
  const Styles={
    borderRadius: 10,
    background:"#FFFFFF" 
    
  }
    return (
        
        <div className=" p-0 col-xs-12 col-sm-6 mr-md-0 col-md-3 col-lg-3 mb-4 " >
          <div className="border mr-3 p-3" style={Styles}>
            <h6 className=" ">{props.title}</h6>
           
            <div className="text-secondary mb-4  ">
                {props.description}
            </div>
            </div>
            </div>
    )
}
