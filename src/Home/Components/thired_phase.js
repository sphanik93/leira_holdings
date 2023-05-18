import React from "react";
import { useEffect, useState } from "react";
import invertinginfuture from "../../assets/Invest-in-future.png";
import dubaitopview from '../../assets/top-view-dubai.png';
import "./thired-phase.css"
import $ from 'jquery';
import arrowright from "../../assets/icons-right.png";
import arrowleft from "../../assets/icons-left.png";

export default function Thired_phase() {

    const [current,setCurrent] = useState(1)
    const [totalItems, settotalItems] = useState('')

useEffect(()=>{
    settotalItems($('.carousel-item').length-1)
},[])

// useEffect(()=>{
//     setTimeout(function () {
//         var totalItems = $('.carousel-item').length-1;
//         // console.log(totalItems,'div active',currentIndex,currentIndex1)
//         console.log(timer,'Hello from setTimeout',totalItems)
//         if(timer >= totalItems){
//             setTimer(1)
//         } else{
//             setTimer(timer+1)
//         }
//     }, 5000)
// },[timer])

    function nextIndicater(type){
        var totalItems = $('.carousel-item').length-1;
        if(type == 'prev'){
            if(current == 1){
            setCurrent(totalItems)
            } else{
            setCurrent(current-1)
            }
        }
        if(type == 'next'){
            if(current >= totalItems){
                setCurrent(1)
                } else{
                setCurrent(current+1)
                }
        }
    }
    return(<div className="mb-5">
        <div id="carousel2ExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="false">
        {/* <div class="carousel-indicators">
       <button type="button" data-bs-target="#carousel2ExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1">1</button>
       <button type="button" data-bs-target="#carousel2ExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2">2</button>
       <button type="button" data-bs-target="#carousel2ExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3">3</button>
     </div> */}
    
     <div class="carousel-inner">
       <div class="carousel-item active">
         <div className="thired-phase">
        <p className="business-lines-heading">Invest in Future</p>
        <div className="row">
       <img src={invertinginfuture} className="invest-in-future-img col-xs-12 col-md-5"/>
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
      </div>
        <div class="carousel-item">
        <p className="business-lines-heading">Invest in Future</p>
        <div className="d-flex">
       <img src={invertinginfuture} className="invest-in-future-img"/>
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
       <img src={invertinginfuture} className="invest-in-future-img"/>
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
       <img src={invertinginfuture} className="invest-in-future-img"/>
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
   </div>
     </div>
     <div class="" style={{display:"flex", justifyContent:'center'}}>
     <button type="button" class="btn read_more">Read More</button>
     <div class={"col-md-3 col-xl-2 col-sm-4 col-lg-3 col-xs-3 d-flex justify-content-between"}>
     <img src={arrowleft} class="arrow-left" title=""/>
     <span class="count_div">{current} / {totalItems}</span>
     <img src={arrowright} class="arrow-right" title=""/>
     </div>
     </div>
     </div>

    )
}