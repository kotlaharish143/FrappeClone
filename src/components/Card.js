import React from 'react'


export default function Card(props) {
  const Styles = {
    borderRadius: 20,
    background: "#FFFFFF"

  }
  return (

    <
    div className = " mt-5 ml-4 mr-4  border ml-md-5 mr-md-0 p-4 col-md-5 "
    style = {
      Styles
    } >
    <
    h5 className = "d-block d-md-none " > {
      props.title
    } < /h5> <
    h3 className = "d-none d-md-block" > {
      props.title
    } < /h3>

    <
    div className = "text-secondary mb-4  " > {
      props.description
    } <
    /div> <
    /div>
  )
}