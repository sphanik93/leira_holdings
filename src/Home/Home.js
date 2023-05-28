import React from "react";
import { useEffect, useState } from "react";
import dubaitopview from '../assets/top-view-dubai.png'
import home_1 from '../assets/Home_1.png';
import home_2 from '../assets/Home_2.png';
import '../Home/home.css'
import Graph from "./Components/Graph";
import Thired_phase from "./Components/thired_phase.js";
import Praposed_projects from "./Components/praposed_projects";
import OurApproach from "./Components/OurApproach.js";
import Header from "./Header_Footer/Header.js"
import Header_mainpage from "./Header_Footer/Header_mainpage.js";
import Footer from "./Header_Footer/Footer.js"
import Zoom from 'react-reveal/Zoom';

export function Homepage1() {
  const [blackMenu, setGoldmenu] = useState(false)
  const [langChange, setLangChange] = useState('eng')
  useEffect(() => {

  }, [])

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 0) {
      console.log('inside scroll',window.pageYOffset)
    }else{
      console.log('inside not scroll',window.pageYOffset)
    }
  })

  return (<div>
    {/* <Header /> */}
    <Header_mainpage/>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active" style={{
          background: `url(${home_1})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "735px",
        }}>

        </div>
        <div class="carousel-item" style={{
       background: `url(${dubaitopview})`,
       backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "735px",
     }}>
    </div>
    <div class="carousel-item" style={{
       background: `url(${home_2})`,
       backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "735px",
     }}>
    </div>
      </div>
      <div class="" style={{ display: "flex", justifyContent: 'center' }}>
        <div class={"col-md-3 col-xl-2 col-sm-4 col-lg-3 col-xs-3 curosalmoveallignment row justify-content-center"} data-bs-slide="prev">
          <div class="carousel-prev"><a href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          </div>
          <p className="readmore">Read More</p>
          <div class="carousel-next" ><a href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
          </div>
        </div>
      </div>
    </div>
    <div class="second-phase">
    <Zoom right cascade>
      <p className="business-lines-heading">Business Lines</p>
      </Zoom>
      <Graph />
    </div>
    <Thired_phase />
    <Praposed_projects/>
    <OurApproach />
    <Footer />
  </div>
  );
}