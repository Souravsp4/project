
// import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


import "./styles/Header.css";
import "./styles/Home.css";
import "./styles/Contact.css"; 
import "./styles/Footer.css"; 


function App() {
  return (
   <>
   {/* <Header/>
   <Home/> */}

   <Router>
      <Header/>
      <Routes>
         <Route path ="/" element={<Home/>}/>
         <Route path ="/Contact" element={<Contact/>}/>
        
       </Routes>
    
    
  <Footer/>
    </Router>

   </>
  );
}

export default App;
