import React from "react";
import { useEffect, useState } from "react";
import sideview from '../../assets/side-style.png'
import NOSECTION from '../../assets/NOSECTION.png'
import './ourapproach.css'
import MediaQuery from "react-responsive";


export default function OurApproach() {
    const [tabList, setTabList] = useState([])
    useEffect(()=>{
        let data =[{name:"More Human Like",image:NOSECTION,text:"Welcome Tomorrow Our Chatbots are designed for tomorrow’s world. ",heading:"MORE HUMAN LIKE",
    status:true},{name:"Integration",image:NOSECTION,text:"Hii ",heading:"MORE HUMAN LIKE",
    status:false},{name:"Values that matter",image:NOSECTION,text:"Welcome  ",heading:"MORE HUMAN LIKE",
    status:false},{name:"More Human",image:NOSECTION,text:"Welcome Tomorrow ",heading:"MORE HUMAN LIKE",
    status:false},{name:"Integration",image:NOSECTION,text:"Welcome Tomorrow Our  ",heading:"MORE HUMAN LIKE",
    status:false}]
    setTabList(data)
    },[])

    function savingList(selected){
        console.log('selected',selected)
        tabList.map((lis)=>{
            if(lis.name == selected){
                lis.status = true
            } else{
                lis.status = false
            }
        })
        setTabList(tabList)
    }
    console.log('tablist',tabList)
return(
    <div>
<MediaQuery minWidth={770}>
<div className="mb-5">
<div className="d-flex">
<img className="ourapproach_img" src={sideview}/>
<p className="ourapproach ">Our Approach</p>
</div>
<div className="mt-5 ml-5 d-flex justify-content-between">
<div className="mt-5">
<p className="objective">Objective</p>
<p className="ourapproach_matter ">Values that matter</p>
<div className="d-flex">
<div id="hline-1"></div>
<div className="square">
    <div className="m-3">
<p className="">We recognize the importance of managing our resources responsibly and minimizing our impact on the environment. We are committed to promoting sustainability both within our organization and in the solutions, we provide to our clients.</p>

<p className="">These values reflect our commitment to providing exceptional service, operating with integrity and transparency, working collaboratively, embracing innovation, and promoting sustainability.</p>
</div>
</div>
</div>
</div>
<img src={NOSECTION} className="nosection_img"/>
</div>
</div>
</MediaQuery>
<MediaQuery maxWidth={770}>
<div className="mb-5">

<p className="ourapproach1 ">Our Approach</p>
    <div className="scrollmenu nav-tabs ">
        {tabList.map((list)=>(
            <a onClick={()=>savingList(list.name)} className="selectedlist">{list.name}</a>
        ))}
</div>
<div id="underline"></div>
{tabList.map((list)=>(<>
    {list.status == true &&
<div style={{
          background: `url(${list.image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "200px",
        }}>
         <div className="square_mobile">
         <p className="ourapproach_matter_mobile m-2">{list.name}</p>
         <p className="m-2">{list.text}</p>

         </div>
        </div>}</>
))}     
</div>
</MediaQuery>
</div>
)}