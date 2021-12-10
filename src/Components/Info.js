import React from 'react'
import img from './../Img/Rectangle 90.png'

export default function Info() {
    return(
        <>
         <img src={img} alt=""/>
         <div className="text_about">
            <p className="name">Laura Smith</p>
            <p className="job">Frontend Developer</p>
            <small>laurasmith.website</small>
         </div>  
         <div className="contact_btn">
            <a><div className="email">
                Email 
            </div></a>
            <a><div className="linkedin">
                LinkedIn 
            </div></a>
        </div> 
        </>
    )
}