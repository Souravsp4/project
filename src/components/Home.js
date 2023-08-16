import React from "react";
import {Carousel} from "react-responsive-carousel"
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Feedback from "./Feedback";

import img1 from "../assets/Top-laptop-brands-in-India.webp"
import img2 from "../assets/dims.jfif"


const Home = () => {
  return (
    <>
        <div className='home' id="home">
      <Carousel
      infiniteLoop
       autoPlay
        showStatus={false}
         showArrows={false}
         showThumbs={false}
         
         interval={1000}
      >


<div>
  <img src={img1} alt="Item1" />
  <p className='legend'>Laptops</p>
</div>

<div>
  <img src={img2} alt="Item2" />
  <p className='legend'>Desktops</p>
</div>


      </Carousel>
    </div>

      <div className="home2" id="about">
        <div>
          <h1>About Us</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum qui
            iure dolor omnis maxime obcaecati modi consequatur ut reprehenderit
            aliquam fugiat, recusandae voluptates architecto ad? Sint reiciendis
            accusamus inventore, dicta id necessitatibus ratione, dolores
            quibusdam architecto ex nostrum! Hic vero voluptates laborum. Dolore
            officiis soluta laborum error a asperiores exercitationem fugit
            debitis at placeat corporis ex, eligendi mollitia quo, eveniet
            nesciunt perspiciatis earum quod repudiandae nulla, quisquam aut
            natus? Atque assumenda quis omnis nostrum, consectetur officiis
            magni amet temporibus voluptates sit voluptate accusantium numquam,
            nihil laudantium. Excepturi dicta odit aut praesentium, non porro
            provident officiis iste minima quis nemo asperiores?
          </p>
        </div>
      </div>

      <div className="feedbacks" id="feedbacks" >
      <Feedback/>
      </div>

    </>
  );
};

export default Home;
