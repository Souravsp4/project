import React from 'react'

import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link"

const Header = () => {
  return (
   <nav>
    <h1>Name</h1>
    <main>

    <HashLink to={"/#home"}>Home</HashLink>
   < HashLink to={"/#about"}>About</HashLink>
    <Link to={"/contact"}>Contact</Link>
    <HashLink to="/#feedbacks">Feedbacks</HashLink>



    {/* <HashLink to={"/#about"}>About</HashLink>
    <HashLink to={"/#brands"}>Brand</HashLink>
    <Link to={"/Services"}>Services</Link> */}
    
    </main>
   </nav>
  )
}

export default Header