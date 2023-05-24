import React from "react";
import { useEffect, useState, useRef } from "react";
import "./praposed_projects.css"
import dubaitopview from '../../assets/second-layer.png';
import invertinginfuture from "../../assets/Invest-in-future.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
// import { data } from "jquery";

let fullData = []
export default function Praposed_projects() {
  const [current, setCurrent] = useState(null);
  const [projectsArray, setProjectsArray] = useState([])

  const [projectsArray1, setProjectsArray1] = useState([])
  const [classArray, SetClassArray] = useState([{ divClass: "flip-box-inner_1", imgClass: "img-width_1" }, { divClass: "flip-box-inner_2", imgClass: "img-width_2" },
  { divClass: "flip-box-inner_3", imgClass: "img-width_3" }, { divClass: "flip-box-inner_4", imgClass: "img-width_4" }, { divClass: "flip-box-inner_5", imgClass: "img-width_5" }, { divClass: "flip-box-inner_6", imgClass: "img-width_6" }])


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  }
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

  console.log('responsive', responsive)
  useEffect(() => {
    let data = []

    for (let i = 1; i <= 11; i++) {
      let obj = { img: dubaitopview, name: "Dubai", description: "Place to visit", divClass: "flip-box-inner_null", imgClass: "img-width_null" }
      data.push(obj)
    }
    console.log('before==', data)
    classArray.map((classNameing, i) => {
      data.map((make, index) => {
        if (i == index) {
          console.log(make.divClass, "indexing")

          make.divClass = classNameing.divClass
          make.imgClass = classNameing.imgClass
        }
      })
    })

    console.log('data==', data)
    setProjectsArray(data)
    localStorage.setItem('projects', JSON.stringify(data));
    fullData = data
  }, [])

  // function handleAfterChange(data){
  //   const centerSlide = document.querySelector(
  //     "div.react-multi-carousel-list.carousel-container"
  //   );
  // console.log(centerSlide.getAttribute("data-index"),'data',data)
  // }



  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    console.log(projectsArray, "====to===")
    return (
      <div className="carousel-button-group">
        <button onClick={() => (previous(), changeImage("minus"))}>prev</button>
        <button onClick={() => (next(), changeImage('plus'))}>next</button>
      </div>
    );
  };

  function changeImage(from) {
    console.log(projectsArray, "===from====", from)
    let filterprojectsArray = projectsArray
    // projectsArray.map((modify,index)=>{
    //   modify
    // })

    if (from == "plus") {
      // projectsArray.map((modify,index)=>{
      var indexValue = filterprojectsArray.findIndex(p => p.divClass == "flip-box-inner_6");

      for (let i = 0; i < filterprojectsArray.length; i++) {
        console.log(filterprojectsArray, '=filterprojectsArray[i]=', filterprojectsArray[i])
        if (filterprojectsArray[i].divClass == "flip-box-inner_1") {
          console.log('====inner1')
          filterprojectsArray[i].divClass = "flip-box-inner_null"
          filterprojectsArray[i].imgClass = "img-width_null"
        }
        if (filterprojectsArray[i].divClass == "flip-box-inner_2") {
          filterprojectsArray[i].divClass = "flip-box-inner_1"
          filterprojectsArray[i].imgClass = "img-width_1"
        }
        if (filterprojectsArray[i].divClass == "flip-box-inner_3") {
          filterprojectsArray[i].divClass = "flip-box-inner_2"
          filterprojectsArray[i].imgClass = "img-width_2"
        }
        if (filterprojectsArray[i].divClass == "flip-box-inner_4") {
          filterprojectsArray[i].divClass = "flip-box-inner_3"
          filterprojectsArray[i].imgClass = "img-width_3"
        }
        if (filterprojectsArray[i].divClass == "flip-box-inner_5") {
          filterprojectsArray[i].divClass = "flip-box-inner_4"
          filterprojectsArray[i].imgClass = "img-width_4"
        }
        if (filterprojectsArray[i].divClass == "flip-box-inner_6") {
          filterprojectsArray[i].divClass = "flip-box-inner_5"
          filterprojectsArray[i].imgClass = "img-width_5"
        }
        if (indexValue + 1 == i) {
          filterprojectsArray[i].divClass = "flip-box-inner_6"
          filterprojectsArray[i].imgClass = "img-width_6"
        }
      }
      console.log(filterprojectsArray, "projects==")
      setProjectsArray(filterprojectsArray)
      setProjectsArray1(filterprojectsArray)
    }
    if (from == "minus") {

    }
    localStorage.setItem('projects', JSON.stringify(filterprojectsArray));

    setProjectsArray(filterprojectsArray)
    fullData = filterprojectsArray

  }

  console.log(fullData, 'projectsArraysdata', JSON.parse(localStorage.getItem('projects')), projectsArray, projectsArray1)
  return (
    <div className="praposedbg">
      {/* <div className="praposedbg">
        <p className="business-lines-heading">Promised Projects</p>
        <div id="bpcarousel-2216be2663" class="cmp-carousel" role="group" aria-live="off" 
            data-cmp-clickable="" data-placeholder-text="false" data-cmp-delay="5000" data-slide="0" data-max-height="564">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={dubaitopview} class="img-width" />
            </div>
            <div class="carousel-item">
              <img src={invertinginfuture} class="img-width" />
            </div>
            <div class="carousel-item">
              <img src={dubaitopview} class="img-width" />
            </div>
            <div class="carousel-item">
              <img src={invertinginfuture} class="img-width" />
            </div>
            <div class="carousel-item">
              <img src={invertinginfuture} class="img-width" />
            </div>
            <div class="carousel-item">
              <img src={invertinginfuture} class="img-width" />
            </div>



            <div id="bpcarousel-2216be2663" class="cmp-carousel" role="group" aria-live="off" 
            data-cmp-clickable="" data-placeholder-text="false" data-cmp-delay="5000" data-slide="0" data-max-height="564">
             

</div>

</div>
</div> */}
      {/* <div className="shape"></div> */}
      <p className="business-lines-heading">Promised Projects</p>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        afterChange={(previousSlide, { currentSlide, onMove }) => {
          console.log(previousSlide, '===prev', currentSlide)
        }}
        ref={el => {
          if (el) {
            var slidesToShow = el.state.slidesToShow
            var currentSlide = el.state.currentSlide
            console.log(slidesToShow, currentSlide, slidesToShow + currentSlide, "======", el)
            // setCurrent(el.state)
          }
        }}
        beforeChange={(nextSlide, { currentSlide, onMove, el }) => {
          console.log(nextSlide, 'nextSlide', el, currentSlide, onMove)
          changeImage(nextSlide)
        }}
        renderButtonGroupOutside={true}
        arrows={false}
        customButtonGroup={<ButtonGroup />}
      // itemClass={styles.carouselItem} 
      >
        {projectsArray.map((data) => (

          <div className="flip-box">
            <div class={data.divClass}>
              <img src={data.img} class={data.imgClass} />
            </div>
          </div>
        ))}

      </Carousel>
      <button onClick={() => changeImage('plus')}>from====</button>
      <Slider {...settings}>
        <div className="flip-box">
          <div class="flip-box-inner">
            <img src={dubaitopview} class="img-width_1" />
          </div>
        </div>
        <div className="flip-box">
          <div class="flip-box-inner">
            <img src={dubaitopview} class="img-width_2" />
          </div>
        </div>
        <div className="flip-box">
          <div class="flip-box-inner">
            <img src={dubaitopview} class="img-width_3" />
          </div>
        </div>
        <div className="flip-box">
          <div class="flip-box-inner">
            <img src={dubaitopview} class="img-width_4" />
          </div>
        </div>
        <div className="flip-box">
          <div class="flip-box-inner">
            <img src={dubaitopview} class="img-width_5" />
          </div>
        </div>
        <div className="flip-box">
          <div class="flip-box-inner">
            <img src={dubaitopview} class="img-width_1" />
          </div>
        </div>
        <div className="flip-box">
          <div class="flip-box-inner">
            <img src={dubaitopview} class="img-width_2" />
          </div>
        </div>
      </Slider>
      );

    </div >
  )

}