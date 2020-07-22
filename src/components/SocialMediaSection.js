import React from 'react'
import {Link} from 'react-router-dom'
const SocialMediaSection=()=>{
return(
    <div className="Social-Icon">
       <div>
           <h1>Category</h1>
           <Link to=""> <p>Home</p></Link>
           <Link to=""> <p>Contact Us</p></Link>
           <Link to=""> <p>Listings</p></Link>
       </div>
       <div>
           <h1>Your Account</h1>
           <Link to=""> <p>Sign Up</p></Link>
           <Link to=""> <p>Log In</p></Link>
           <Link to=""> <p>Find a Space</p></Link>
           <Link to=""> <p>List a Space</p></Link>
       </div>

       <div>
           <h1>Company</h1>
           <Link to=""> <p>About</p></Link>
           <Link to=""> <p>Meet The Team</p></Link>
           <Link to=""> <p>contribute</p></Link>
           
       </div>

       <div>
       <div className="Social-Icon-Container">
          <h1>Social</h1>
          <Link to=""><i class="fa fa-facebook-square" aria-hidden="true"></i></Link>
          <Link to=""><i class="fa fa-instagram" aria-hidden="true"></i></Link>
          <Link to=""><i class="fa fa-envelope" aria-hidden="true"></i></Link>
          <Link to=""><i class="fa fa-twitter" aria-hidden="true"></i></Link>
       </div>
       </div>
       
    </div>
)
}
export default SocialMediaSection