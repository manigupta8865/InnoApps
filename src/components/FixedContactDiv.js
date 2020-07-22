import React from 'react'
import './App.css'
const FixedContactDiv=()=>{
    return(
        <div className="Fix-Sicky">
        <div className="made-inVersion"><p>made in version</p></div>
       
        <div className="contact-icons">
         <div className="div-for-flex"> 
           <i className="fa fa-comments" aria-hidden="true"></i>
           <p>Comments</p>
         </div>

          <div className="div-for-flex">
            <i className="fa fa-th-large" aria-hidden="true"></i>
            <p>Message</p>
          </div>

          <div className="div-for-flex">
          <i className="fa fa-th-large" aria-hidden="true"></i>
          </div>

       </div>
     </div>
    )
}
export default FixedContactDiv