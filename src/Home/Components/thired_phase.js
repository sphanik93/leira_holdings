import React from "react";
import { useEffect, useState } from "react";
import invertinginfuture from "../../assets/Invest-in-future.png";
import investmentinfuture3d from "../../assets/Invest_in_future_3D.png";
import dubaitopview from '../../assets/top-view-dubai.png';
import "./thired-phase.css"
import $ from 'jquery';
import arrowright from "../../assets/icons-right.png";
import arrowleft from "../../assets/icons-left.png";
import {Zoom, Flip, Bounce, Fade} from 'react-reveal';


export default function Thired_phase() {
  const [current, setCurrent] = useState(1)
  const [totalItems, settotalItems] = useState('')

  useEffect(() => {
    settotalItems($('.thired-phase').length)
  }, [])

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

  function nextIndicater(type) {
    var totalItems = $('.thired-phase').length;
    if (type == 'prev') {
      if (current == 1) {
        setCurrent(totalItems)
      } else {
        setCurrent(current - 1)
      }
    }
    if (type == 'next') {
      if (current >= totalItems) {
        setCurrent(1)
      } else {
        setCurrent(current + 1)
      }
    }
  }
  return (<div className="mb-5 third_banner">
    <div id="carousel2ExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="false">
      {/* <div class="carousel-indicators">
       <button type="button" data-bs-target="#carousel2ExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1">1</button>
       <button type="button" data-bs-target="#carousel2ExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2">2</button>
       <button type="button" data-bs-target="#carousel2ExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3">3</button>
     </div> */}

      <div class="carousel-inner">
        <div class="carousel-item active">
          <div className="thired-phase">
          <Zoom right cascade>
            <p className="business-lines-heading1 mt-5">Invest in Future</p>
            </Zoom>
            <div className="row">
            <Fade right>
              <div className=" col-xs-12 col-md-4 ml-5">
              <img src={investmentinfuture3d} className="invest-in-future-img1 ml-5" />
              </div>
            </Fade>
              <div className="col-md-6 ml-5 spaceing1 mt-5">
                {/* <p className="invest-in-future-subheading">Leira future Smart City</p> */}
                <p className="invest-in-future-text">Leira Holding offers various investment opportunities to individuals who are interested in investing in their projects. We provide investors with different options to invest in their projects, including traditional currencies and Leiracoin cryptocurrency.</p>

                <div class="mt-5 d-flex flex-column" style={{ display: "" }}>
      <div class={""}>
      <a href="#carousel2ExampleIndicators" role="button" data-slide="prev"><img src={arrowleft} class="arrow-left" title="" onClick={()=>nextIndicater('prev')}/></a>
        <span class="count_div ml-3 mr-3">{current} / {totalItems}</span>
        <a href="#carousel2ExampleIndicators" role="button" data-slide="next"><img src={arrowright} class="arrow-right" title="" onClick={()=>nextIndicater('next')}/></a>
      </div>
      <button type="button" class="btn read_more mt-5">Read More</button>
    </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
        <div className="thired-phase">
          <Zoom right cascade>
            <p className="business-lines-heading1 mt-5">Invest in Future</p>
            </Zoom>
            <div className="row">
            <Fade right>
              <div className=" col-xs-12 col-md-4 ml-5">
              <img src={invertinginfuture} className="invest-in-future-img1 ml-5" />
              </div>
            </Fade>
              <div className="col-md-6 ml-5 spaceing">
                <p className="invest-in-future-subheading mb-5 mt-5">Leira future Smart City</p>
                <p className="invest-in-future-text m-2">Leira Holding offers various investment opportunities to individuals who are interested in investing in their projects. We provide investors with different options to invest in their projects, including traditional currencies and Leiracoin cryptocurrency.</p>

                <p className="decisioning">Invest using Traditional Currency</p>
                <div class="d-flex justify-content-between m-2">
                  <div class="progress mr-5">
                    <div class="progress-bar" role="progressbar" style={{ width: "75%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <button type="button" class="btn btn-dark invest-button">Invest</button>
                </div>
                    <div className="decission ml-2">Decisioning 79%</div>

                <p className="decisioning">Invest using LeiraCoin Crypto Currency</p>
                <div class="d-flex justify-content-between m-2">
                  <div class="progress mr-5">
                    <div class="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <button type="button" class="btn btn-dark invest-button">Invest</button>
                </div>
                <div className="decission ml-2">Decisioning 90%</div>
                <div class="mt-5 mb-4" style={{ display: "flex" }}>
      <button type="button" class="btn read_more">Read More</button>
      <div class={"col-md-4 col-xl-3 col-sm-5 col-lg-4 col-xs-4 d-flex justify-content-between"}>
      <a href="#carousel2ExampleIndicators" role="button" data-slide="prev"><img src={arrowleft} class="arrow-left" title="" onClick={()=>nextIndicater('prev')}/></a>
        <span class="count_div">{current} / {totalItems}</span>
        <a href="#carousel2ExampleIndicators" role="button" data-slide="next"><img src={arrowright} class="arrow-right" title="" onClick={()=>nextIndicater('next')}/></a>
      </div>
    </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
        <div className="thired-phase">
          <Zoom right cascade>
            <p className="business-lines-heading1 mt-5">Invest in Future</p>
            </Zoom>
            <div className="row">
            <Fade right>
              <div className=" col-xs-12 col-md-4 ml-5">
              <img src={invertinginfuture} className="invest-in-future-img1 ml-5" />
              </div>
            </Fade>
              <div className="col-md-6 ml-5 spaceing">
                <p className="invest-in-future-subheading mb-5 mt-5">Leira future Smart City</p>
                <p className="invest-in-future-text">Leira Holding offers various investment opportunities to individuals who are interested in investing in their projects. We provide investors with different options to invest in their projects, including traditional currencies and Leiracoin cryptocurrency.</p>

                <p className="decisioning">Invest using Traditional Currency</p>
                <div class="d-flex justify-content-between">
                  <div class="progress mr-5">
                    <div class="progress-bar" role="progressbar" style={{ width: "75%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <button type="button" class="btn btn-dark invest-button">Invest</button>
                </div>
                    <div className="decission ml-2">Decisioning 79%</div>

                <p className="decisioning">Invest using LeiraCoin Crypto Currency</p>
                <div class="d-flex justify-content-between">
                  <div class="progress mr-5">
                    <div class="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <button type="button" class="btn btn-dark invest-button">Invest</button>
                </div>
                <div className="decission ml-2">Decisioning 90%</div>
                <div class="mt-5 mb-4" style={{ display: "flex" }}>
      <button type="button" class="btn read_more">Read More</button>
      <div class={"col-md-4 col-xl-3 col-sm-5 col-lg-4 col-xs-4 d-flex justify-content-between"}>
      <a href="#carousel2ExampleIndicators" role="button" data-slide="prev"><img src={arrowleft} class="arrow-left" title="" onClick={()=>nextIndicater('prev')}/></a>
        <span class="count_div">{current} / {totalItems}</span>
        <a href="#carousel2ExampleIndicators" role="button" data-slide="next"><img src={arrowright} class="arrow-right" title="" onClick={()=>nextIndicater('next')}/></a>
      </div>
    </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>

  </div>

  )
}