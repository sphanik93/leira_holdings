import React from "react";
import { useEffect, useState } from "react";
import dubaitopview from '../assets/top-view-dubai.png'
import logo from '../assets/leira_logo.png.png'
import '../Home/home.css'
import Hamburger from "./Components/hamBurger";
import hambericon from '../assets/more.png';
import SecondLayer from '../assets/second-layer.png';
import InvestinFuture from "../assets/Invest-in-future.png";
import $ from 'jquery'; 
import Graph from "./Components/Graph"

export function Homepage1() {
  const [windowType,setWindowType] = useState(false)
  const [langChange, setLangChange] = useState('eng')
  useEffect(()=>{
   
  },[])

  return (<div>
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active" style={{
       background: `url(${dubaitopview})`,
       backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "781px",
     }}>
      <img src={logo} className="logo"/>
      <div className="rightCorner m-3">
      <button type="button" class={langChange =="eng"?"btn-sm border border-warning langEng":"btn-sm border border-warning langArab"} onClick={()=>setLangChange('eng')} >ENGLISH</button>
      <button type="button" class={langChange =="arab"?"btn-sm border border-warning langEngArab":"btn-sm border border-warning langArabEng"} onClick={()=>setLangChange('arab')}>ٱلشَّارقَة</button>
      {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button> */}
<img src={hambericon} class="hamberIcon ml-4" data-toggle="modal" data-target="#exampleModal"/>
      <Hamburger/>
      </div>
    </div>
    {/* <div class="carousel-item" style={{
       background: `url(${dubaitopview})`,
       backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "500px",
     }}>
    </div>
    <div class="carousel-item" style={{
       background: `url(${dubaitopview})`,
       backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "500px",
     }}>
    </div> */}
  </div>
  <div class="" style={{display:"flex", justifyContent:'center'}}>
  <div class={"col-md-3 col-xl-2 col-sm-4 col-lg-3 col-xs-3 curosalmoveallignment row justify-content-center"} data-bs-slide="prev">
  <div  class="carousel-prev"><a href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  </div>
  <p style={{color:'red', position:'relative',    marginTop: '11px', marginBottom: '17px'}}>Read More</p>
  <div  class="carousel-next" ><a href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  </div>
  </div>
  </div>
</div>
<div class="second-phase">
      <p className="business-lines-heading">Business Lines</p>
      <Graph/>
     </div>

     <div id="carousel2ExampleIndicators" class="carousel slide" data-ride="carousel">
     <div class="carousel-indicators">
    <li type="button" data-bs-target="#carousel2ExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1">1</li>
    <li type="button" data-bs-target="#carousel2ExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2">2</li>
    <li type="button" data-bs-target="#carousel2ExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3">3</li>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      {/* <div className="thired-phase"> */}
     <p className="business-lines-heading">Invest in Future</p>
     <div className="row">
    <img src={InvestinFuture} className="invest-in-future-img"/>
    <div className="col-md-6">
      <p className="invest-in-future-heading">Leira future Smart City</p>
      <p className="invest-in-future-text">Leira Holding offers various investment opportunities to individuals who are interested in investing in their projects. We provide investors with different options to invest in their projects, including traditional currencies and Leiracoin cryptocurrency.</p>
      
      <p className="decisioning">Invest using Traditional Currency</p>
      <div class="d-flex justify-content-between">
      <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
  <button type="button" class="btn btn-dark invest-button">Invest</button>
  </div>

  <p className="decisioning">Invest using LeiraCoin Crypto Currency</p>
      <div class="d-flex justify-content-between">
      <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: "90%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
  <button type="button" class="btn btn-dark invest-button">Invest</button>
  </div>
    </div>
     </div>
     </div>
     {/* <div class="carousel-item">
     <p className="business-lines-heading">Invest in Future</p>
     <div className="d-flex">
    <img src={InvestinFuture} className="invest-in-future-img"/>
    <div>
      <p className="invest-in-future-heading">Leira future Smart City</p>
      <p className="invest-in-future-text">Leira Holding offers various investment opportunities to individuals who are interested in investing in their projects. We provide investors with different options to invest in their projects, including traditional currencies and Leiracoin cryptocurrency.</p>
      
      <p className="decisioning">Invest using Traditional Currency</p>
      <div class="d-flex justify-content-between">
      <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
  <button type="button" class="btn btn-dark">Invest</button>
  </div>

  <p className="decisioning">Invest using LeiraCoin Crypto Currency</p>
      <div class="d-flex justify-content-between">
      <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: "90%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
  <button type="button" class="btn btn-dark">Invest</button>
  </div>
    </div>
     </div>
     </div>
     <div class="carousel-item">
     <p className="business-lines-heading">Invest in Future</p>
     <div className="d-flex">
    <img src={InvestinFuture} className="invest-in-future-img"/>
    <div>
      <p className="invest-in-future-heading">Leira future Smart City</p>
      <p className="invest-in-future-text">Leira Holding offers various investment opportunities to individuals who are interested in investing in their projects. We provide investors with different options to invest in their projects, including traditional currencies and Leiracoin cryptocurrency.</p>
      
      <p className="decisioning">Invest using Traditional Currency</p>
      <div class="d-flex justify-content-between">
      <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
  <button type="button" class="btn btn-dark">Invest</button>
  </div>

  <p className="decisioning">Invest using LeiraCoin Crypto Currency</p>
      <div class="d-flex justify-content-between">
      <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: "90%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
  <button type="button" class="btn btn-dark">Invest</button>
  </div>
    </div>
     </div>
     </div> */}
    </div>

  </div>
  <div class="" style={{display:"flex", justifyContent:'center'}}>
  <div class={"col-md-3 col-xl-2 col-sm-4 col-lg-3 col-xs-3 curosalmoveallignment row justify-content-center"}>
  <div  class="carousel-prev"><a href="#carousel2ExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  </div>
  <p style={{color:'red', position:'relative',    marginTop: '11px', marginBottom: '17px'}}><span id="#carousel2ExampleIndicators">1 / 3</span></p>
  <div  class="carousel-next" ><a href="#carousel2ExampleIndicators" role="button" data-slide="next">
    <span class="carousel-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  </div>
  </div>
  </div>
     
</div>
  );
}