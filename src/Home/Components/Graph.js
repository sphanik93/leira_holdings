import React from "react";
import { useEffect, useState } from "react";
import "../Components/graph.css"
import leiralogo from "../../assets/leiralogo.png"
import agriculture from "../../assets/Group 625049.png"
import smart from "../../assets/Group 625050.png"
import financial from "../../assets/Group 625051.png"
import industrial from "../../assets/Group 625052.png"
import MediaQuery from "react-responsive";

import agriculture_black from "../../assets/Group 625045.png"
import smart_black from "../../assets/Group 625064.png"
import financial_black from "../../assets/Group 625065.png"
import industrial_black from "../../assets/Group 625066.png"


export default function FlowChart() {
        const [setHover4, setSetHover4] = useState(false)
        const [setHover5, setSetHover5] = useState(false)
        const [setHover1, setSetHover1] = useState(false)
        const [setHover6, setSetHover6] = useState(false)
        const [setHover2, setSetHover2] = useState(false)
        const [setHover3, setSetHover3] = useState(false)
        const [setHover7, setSetHover7] = useState(false)
        const [setHover8, setSetHover8] = useState(false)

        const [setApp, setSetApp] = useState(false)
        const [setApp1, setSetApp1] = useState(false)
        const [setApp2, setSetApp2] = useState(false)
        const [setApp3, setSetApp3] = useState(false)
        const [setApp4, setSetApp4] = useState(false)
        const [setApp5, setSetApp5] = useState(false)
        const [setApp6, setSetApp6] = useState(false)
        const [setApp7, setSetApp7] = useState(false)

    function setNew2nd(id,img){
        console.log('=====',id,img)
        document.getElementById(id).src = img;
        if(id == "img"){
        setSetHover4(true)
        setSetHover5(true)
        setSetHover1(true)
        }
        if(id == "img1"){
            setSetHover6(true)
            setSetHover1(true)
            }
        if(id == "img2"){
            setSetHover1(true)
            setSetHover2(true)
            setSetHover3(true)
        }
        if(id == "img3"){
            setSetHover1(true)
            setSetHover2(true)
            setSetHover7(true)
            setSetHover8(true)
        }
    }
    function onmouseOut(id,img){
        console.log('===88888888=',id,img)
        document.getElementById(id).src = img;
        if(id == "img"){
        setSetHover4(false)
        setSetHover5(false)
        setSetHover1(false)
        }
        if(id == "img1"){
            setSetHover6(false)
            setSetHover1(false)
            }
        if(id == "img2"){
                setSetHover1(false)
                setSetHover2(false)
                setSetHover3(false)
            }
            if(id == "img3"){
                setSetHover1(false)
                setSetHover2(false)
                setSetHover7(false)
                setSetHover8(false)
            }
    }

    function setNewapp(id,img){
        document.getElementById(id).src = img;
        if(id == "app"){
            setSetApp(true)
            setSetApp1(true)
        }
        if(id == "app1"){
            setSetApp(true)
            setSetApp2(true)
            setSetApp3(true)
        }
        if(id == "app2"){
            setSetApp(true)
            setSetApp2(true)
            setSetApp4(true)
            setSetApp5(true)
        }
        if(id == "app3"){
            setSetApp(true)
            setSetApp2(true)
            setSetApp4(true)
            setSetApp6(true)
            setSetApp7(true)
        }
    }
    function onmouseappOut(id,img){
        document.getElementById(id).src = img;
        if(id == "app"){
            setSetApp(false)
            setSetApp1(false)
        }
        if(id == "app1"){
            setSetApp(false)
            setSetApp2(false)
            setSetApp3(false)
        }
        if(id == "app2"){
            setSetApp(false)
            setSetApp2(false)
            setSetApp4(false)
            setSetApp5(false)
        }
        if(id == "app3"){
            setSetApp(false)
            setSetApp2(false)
            setSetApp4(false)
            setSetApp6(false)
            setSetApp7(false)
        }
    }
    console.log(setHover1,setHover4,setHover5,setHover6)
    return(
    <div class="graph-top">
         <MediaQuery minWidth={544}>
        <div id={setHover4 ? "line4hover" : "line4"}>
        {/* <div className="circle">AGRICULTURE</div> */}
        <img src={agriculture} class="grap-2nd-img" onMouseOver={()=>setNew2nd("img",agriculture_black)} onMouseOut={()=>onmouseOut("img",agriculture)} id="img"/>
        </div>
            <div id={setHover5 ? "line5hover" : "line5"}>

            </div>
        {/* <img src={Hline1_gold} className="line-image4" id="lineimage"/> */}
 <div id={setHover1 ?  "line1hover" : "line1"}>
        <img src={leiralogo} class="lerialogo"/>
        <img src={smart} class="grap-3rd-img" onMouseOver={()=>setNew2nd("img1",smart_black)} onMouseOut={()=>onmouseOut("img1",smart)} id="img1"/>
        
        {/* <div className="circle1">SMART CITIES</div>
 <div className="circle3">FINANCIAL SERVICES</div>
<div className="circle4">INDUSTRIAL SECTOR</div> */}
 </div>
 <div id={setHover6 ? "line6hover" : "line6"}>

 </div>
  <div id={setHover2?"line2hover":"line2"}></div>
 {/* <img src={lineheight} className="line-image" id="lineimage"/> */}
  <div id={setHover3?"line3hover":"line3"}>
  <img src={financial} class="grap-4th-img" onMouseOver={()=>setNew2nd("img2",financial_black)} onMouseOut={()=>onmouseOut("img2",financial)} id="img2"/>
  </div>
  {!setHover8?"":<div id={"line9hover"}>
  </div>}
  <div id={setHover7?"line7hover" : "line7"}></div>
  {/* <img src={lineheight} className="line-image1" id="lineimage1"/> */}
  <div id={setHover8?"line8hover":"line8"}>
  <img src={industrial} class="grap-5th-img" onMouseOver={()=>setNew2nd("img3",industrial_black)} onMouseOut={()=>onmouseOut("img3",industrial)} id="img3"/>

  </div>
    </MediaQuery>
    <MediaQuery maxWidth={543}>
    <img src={leiralogo} class="lerialogo"/>
    <div id={setApp?"line-1-hover":"line-1"}></div>
    <div id={setApp1?"line-2-hover":"line-2"}></div>
    <img src={agriculture} class="grap-2nd-img"  onMouseOver={()=>setNewapp("app",agriculture_black)} onMouseOut={()=>onmouseappOut("app",agriculture)} id="app"/>
    <div id={setApp2?"line-3-hover":"line-3"}></div>
    <div id={setApp3?"line-4-hover":"line-4"}></div>
    <img src={smart} class="grap-3rd-img"  onMouseOver={()=>setNewapp("app1",smart_black)} onMouseOut={()=>onmouseappOut("app1",smart)} id="app1"/>
    <div id={setApp4?"line-5-hover":"line-5"}></div>
    <div id={setApp5?"line-6-hover":"line-6"}></div>
    <img src={financial} class="grap-4th-img"  onMouseOver={()=>setNewapp("app2",financial_black)} onMouseOut={()=>onmouseappOut("app2",financial)} id="app2"/>
    <div id={setApp6?"line-7-hover":"line-7"}></div>
    <div id={setApp7?"line-8-hover":"line-8"}></div>
    <img src={industrial} class="grap-5th-img"  onMouseOver={()=>setNewapp("app3",industrial_black)} onMouseOut={()=>onmouseappOut("app3",industrial)} id="app3"/>
    </MediaQuery>
    </div>
    )
}