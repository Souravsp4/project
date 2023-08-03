import React from 'react'
// import {Link} from "react-router-dom";
// import {HashLink} from "react-router-hash-link"

const Header = () => {
  return (
   <nav>
    <h1>Name</h1>
    <main>

    <a to={"/#home"}>Home</a>
    <a to={"/contact"}>Contact</a>
    <a to={"/#about"}>About</a>
    {/* <HashLink to={"/#brands"}>Brand</HashLink>
    <Link to={"/servicers"}>Services</Link> */}
    
    </main>
   </nav>
  )
}

export default Header