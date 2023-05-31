import React from "react";
import { useEffect, useState } from "react";
import dubaitopview from '../assets/top-view-dubai.png'
import bank from '../assets/bank.png'
import Contact_us from '../assets/Contact_us.png'
import NOSECTION from '../assets/NOSECTION.png'
import Holdings from '../assets/Holdings.png'
import leiralogo from '../assets/leiralogo-04.png'
import second from '../assets/second-layer.png'
import logo from '../assets/enveronmental_friendly.png'
import arrowright from "../assets/icons-right.png";
import arrowleft from "../assets/icons-left.png";
import './Homepage.css';

export function Homepage() {
  const forceUpdate = React.useReducer(bool => !bool)[1];
  const [photo, setPhoto] = useState([]);
  const [description,setDescription] = useState([])
  const [headings, setHeadings] = useState([])

  useEffect(()=>{
    let data = [{image:bank,desc:'Leira Bank is part of our ongoing efforts to enhance the quality of life for residents and visitors in Leira Smart City.',heading:'Leira Bank', id:1},{image:logo,desc:'enveronmental friendly image',heading:'Logo Bank',id:2},
    {image:Contact_us,desc:'We recognize the importance of managing our resources responsibly and minimizing our impact on the environment. We are committed to promoting sustainability both within our organization and in the solutions, we provide to our clients.These values reflect our commitment to providing exceptional service, operating with integrity and transparency, working collaboratively, embracing innovation, and promoting sustainability.',heading:'Innovation',id:3},{image:dubaitopview,desc:'dubai top view image',heading:'Dubai FullView',id:4},
    {image:NOSECTION,desc:'dubai is beautify city',heading:'Leira Bank',id:5},{image:Holdings,desc:'Holdings image',heading:'Leira Bank',id:6},
    {image:leiralogo,desc:'leira logo image',heading:'Leira Bank',id:7},{image:second,desc:'logo',heading:'Logo',id:8}]

    setPhoto(data)
  },[])


  function moveimage(moving){
    if(moving == 'next'){
      photo.map((obj,i)=>{
        if(i == photo.length-1){
          obj.id = 1
        }else{
        obj.id = obj.id+1
        }
      })
    }
    if(moving == 'prev'){
      photo.map((obj,i)=>{
        if(obj.id-1 == 0){
          obj.id = 8
        }else{
        obj.id = obj.id-1
        }
      })
    }
    photo.sort(function (a, b) {
      return a.id - b.id;
    });
    setPhoto(photo)
    forceUpdate();
  }

  function getimage(imagefor){
    if(photo.length != 0){
      // photo.map((lines)=>{
      //   console.log(imagefor,'imglines',lines,lines.id)
      //   if(imagefor === lines.id){
      //     console.log('imagefor ==',imagefor == lines.id)
      //     return lines.image
      //   }
      // })

      if(imagefor == 1){
        return photo[0].image
      }
      if(imagefor == 2){
        return photo[1].image
      }
      if(imagefor == 3){
        if(description != photo[2].desc){
        setDescription(photo[2].desc)
        setHeadings(photo[2].heading)
        }
        return photo[2].image
      }
      if(imagefor == 4){
        return photo[3].image
      }
      if(imagefor == 5){
        return photo[4].image
      }
  }
  }

  return (<div>
        <div className="d-flex justiy-content-between mt-5">
        <div class="flip-box">
        <div class="flip-box-inner_1">
            <img src={getimage(1)} class="img-width_1" />
          </div>
        </div>
        <div className="flip-box">
          <div class="flip-box-inner_2">
            <img src={getimage(2)} class="img-width_2" />
          </div>
        </div>
        <div className="flip-box">
          <div class="flip-box-inner_3">
            <img src={getimage(3)} class="img-width_3" />
            <div className="mt-5">
            <p className="heading_tag">{headings}</p>
            <p className="description">{description}</p>
            </div>
          </div>
        </div>
        <div className="flip-box">
          <div class="flip-box-inner_4">
            <img src={getimage(4)} class="img-width_4" />
          </div>
        </div>
        <div className="flip-box">
          <div class="flip-box-inner_5">
            <img src={getimage(5)} class="img-width_5" />
          </div>
            </div>
        </div>
        <div style={{marginTop: '15%'}}>
        {/* <img src={arrowleft} class="arrow-left" title="" onClick={()=>nextIndicater('prev')}/>
        <img src={arrowright} class="arrow-right" title="" onClick={()=>nextIndicater('next')}/> */}
        <button type="submit" onClick={()=>moveimage('next')}>prev</button>
        <button type="submit" onClick={()=>moveimage('prev')}>next</button>
        </div>
        </div>
  );
}