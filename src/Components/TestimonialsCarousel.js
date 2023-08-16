import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
//Avatars import
import ava1 from "../images/avatars/avatar-1.png";
import ava2 from "../images/avatars/avatar-2.png";
import ava3 from "../images/avatars/avatar-3.png";
import ava4 from "../images/avatars/avatar-4.png";
import ava5 from "../images/avatars/avatar-5.png";

export default function TestimonialsCarousel() {
  return (
    <Carousel
    showArrows={true}
    infiniteLoop={true}
    showThumbs={false}
    showStatus={false}
    autoPlay={true}
    interval={3000}
    >
      
        <div>
        <img src={ava1} alt="Bharat" />
        <div className="myCarousel">
          <h3>Bharat</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
            magni consequuntur nisi, sit cumque ad ea quod cum perspiciatis
            odit.
          </p>
        </div>
        </div>
        <div>
        <img src={ava2} alt="Sushmita" />
        <div className="myCarousel">
          <h3>Sushmita</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
            magni consequuntur nisi, sit cumque ad ea quod cum perspiciatis
            odit.
          </p>
        </div>
        </div>
        <div>
        <img src={ava3} alt="Rohit" />
        <div className="myCarousel">
          <h3>Rohit</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
            magni consequuntur nisi, sit cumque ad ea quod cum perspiciatis
            odit.
          </p>
        </div>
        </div>
        <div>
        <img src={ava4} alt="Rahul" />
        <div className="myCarousel">
          <h3>Rahul</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
            magni consequuntur nisi, sit cumque ad ea quod cum perspiciatis
            odit.
          </p>
        </div>
        </div>
        <div>
        <img src={ava5} alt="Arzoo" />
        <div className="myCarousel">
          <h3>Arzoo👑😎</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
            magni consequuntur nisi, sit cumque ad ea quod cum perspiciatis
            odit.
          </p>
        </div>
        </div>
      
    </Carousel>
    
  );
}
