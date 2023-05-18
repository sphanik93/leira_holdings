import React from "react";
import { useEffect, useState } from "react";
import "./praposed_projects.css"
import dubaitopview from '../../assets/second-layer.png';
import invertinginfuture from "../../assets/Invest-in-future.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { data } from "jquery";


export default function Praposed_projects() {
  const [current, setCurrent] = useState(null);
  const [projectsArray, setProjectsArray] = useState([])
  const [classArray, SetClassArray] = useState([{divClass:"flip-box-inner_1",imgClass:"img-width_1"},{divClass:"flip-box-inner_2",imgClass:"img-width_2"},
  {divClass:"",imgClass:"img-width_3"},{divClass:"flip-box-inner_3",imgClass:"img-width_4"},{divClass:"flip-box-inner_4",imgClass:"img-width_5"}])


  useEffect(()=>{
    let data = []

    for(let i=1; i<=10; i++){
      let obj = {img:dubaitopview,name:"Dubai",description:"Place to visit",divClass:"",imgClass:"img-width_3"}
      data.push(obj)
    }
    console.log('before==',data)
    classArray.map((classNameing,i)=>{
      data.map((make,index)=>{
        if(i == index){
          make.divClass = classNameing.divClass
          make.imgClass = classNameing.imgClass
        }
      })
    })

    console.log('data==',data)
    setProjectsArray(data)
  },[])

  // function handleAfterChange(data){
  //   const centerSlide = document.querySelector(
  //     "div.react-multi-carousel-list.carousel-container"
  //   );
  // console.log(centerSlide.getAttribute("data-index"),'data',data)
  // }

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1460 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1460, min: 1170 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1170, min: 945 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 945, min: 630 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 630, min: 0 },
      items: 1
    }
  };

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
      <div className="carousel-button-group">
        <button onClick={() => (previous(),changeImage("minus"))}>prev</button>
        <button onClick={() => (next(),changeImage('plus'))}>next</button>
      </div>
    );
  };

  function changeImage(from){
    console.log("=======",from)
    
  }

  console.log('projectsArray',projectsArray)
    return(
      <div>
        {/* <div className="praposedbg">
             <p className="business-lines-heading">Promised Projects</p>
             <div id="carousel2ExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="200" data-maximum-items-per-slide="5">
     <div class="carousel-inner">
       <div class="carousel-item active">
        <img src={dubaitopview} class="img-width"/>
      </div>
      <div class="carousel-item">
        <img src={invertinginfuture} class="img-width"/>
      </div>
      <div class="carousel-item">
        <img src={dubaitopview} class="img-width"/>
      </div>
      <div class="carousel-item">
        <img src={invertinginfuture} class="img-width"/>
      </div>
      <div class="carousel-item">
        <img src={invertinginfuture} class="img-width"/>
      </div>
      <div class="carousel-item">
        <img src={invertinginfuture} class="img-width"/>
      </div>
      
    
   </div>
     </div>
        </div> */}

<Carousel 
swipeable={false}
draggable={false}
showDots={true}
responsive={responsive}
ssr={true} // means to render carousel on server-side.
infinite={true}
// autoPlaySpeed={1000}
keyBoardControl={true}
customTransition="all .5"
transitionDuration={500}
containerClass="carousel-container"
removeArrowOnDeviceType={["tablet", "mobile"]}
dotListClass="custom-dot-list-style"
itemClass="carousel-item-padding-40-px"

ref={el => {
  if (el) {
      var slidesToShow = el.state.slidesToShow
      var currentSlide = el.state.currentSlide
console.log(slidesToShow,currentSlide, slidesToShow+currentSlide,"======",el)
      setCurrent(slidesToShow + currentSlide)
  }
}}
// afterChange={(ref)=>handleAfterChange(ref)}
beforeChange={(nextSlide, { currentSlide, onMove }) => {
  console.log(nextSlide,'nextSlide',currentSlide, onMove)
}}
renderButtonGroupOutside={true}
arrows={false}
customButtonGroup={<ButtonGroup />}
>
  {projectsArray && projectsArray.map((makecaro)=>(
  <div className="flip-box">
  <div class={makecaro.divClass}>
    <img src={makecaro.img} class={makecaro.imgClass}/></div>
    </div>
  ))}
   {/* <div className="flip-box">
   <div class="flip-box-inner_2">
     <img src={dubaitopview} class="img-width_2"/>
     </div>
     </div>
   <div className="flip-box">
     <div class="">
     <img src={dubaitopview} class="img-width_3"/></div>
     </div>
     <div className="flip-box">
     <div class="flip-box-inner_3">
       <img src={dubaitopview} class="img-width_4"/>
     </div>
     </div>
     <div className="flip-box">
     <div class="flip-box-inner_4">
       <img src={dubaitopview} class="img-width_5"/>
     </div>
     </div>
   <div><img src={invertinginfuture} class="img-width_3"/></div>
   <div><img src={dubaitopview} class="img-width_3"/></div><div>
     <img src={invertinginfuture} class="img-width_3"/></div>
   <div><img src={dubaitopview} class="img-width_3"/></div> */}
</Carousel>;

        </div>
    )

}