import React from "react";
import { useEffect, useState } from "react";
import "../Components/graph.css"
import leiralogo from "../../assets/leiralogo.png"
export default function flowChart() {
    return(
    <div class="graph-top">
        <div id="line4">
        <div className="circle">AGRICULTURE</div>
        </div>
        <div id="line5"></div>
 <div id="line1">
        <img src={leiralogo} class="lerialogo"/>
        <div className="circle1">SMART CITIES</div>
 <div className="circle3">FINANCIAL SERVICES</div>
 <div className="circle4">INDUSTRIAL SECTOR</div>
 </div>
 <div id="line6">

 </div>
  <div id="line2"></div>
  <div id="line3"></div>
  <div id="line7"></div>
  <div id="line8"></div>
    </div>
    )
}