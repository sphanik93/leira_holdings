import React from "react";
import { useEffect, useState } from "react";
import dubaitopview from '../../assets/top-view-dubai.png'
import bank from '../../assets/bank_caurosal.jpeg'
import Contact_us from '../../assets/Contact_us.png'
import NOSECTION from '../../assets/NOSECTION.png'
import Holdings from '../../assets/Holdings.png'
import leiralogo from '../../assets/leiralogo.png'
import second from '../../assets/second-layer.png'
import logo from '../../assets/enveronmental_friendly.png'
import arrowright from "../../assets/icons-right.png";
import arrowleft from "../../assets/icons-left.png";
import { useMediaQuery } from "react-responsive";
import './praposed_projects.css';
import { Zoom, Flip, LightSpeed } from 'react-reveal';
import HeadShake from 'react-reveal/HeadShake';


export default function Praposed_projects() {
  const forceUpdate = React.useReducer(bool => !bool)[1];
  const [photo, setPhoto] = useState([]);
  const [description, setDescription] = useState([])
  const [headings, setHeadings] = useState([])
  const [originalId, setOriginalId] = useState(1)

  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 973 })
    return isDesktop ? children : null
  }
  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 972 })
    return isTablet ? children : null
  }
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 768 })
    return isMobile ? children : null
  }

  useEffect(() => {
    let data = [{ image: bank, desc: 'Leira Bank is part of our ongoing efforts to enhance the quality of life for residents and visitors in Leira Smart City.', heading: 'Leira Bank', id: 1 }, { image: logo, desc: 'enveronmental friendly image', heading: 'Logo Bank', id: 2 },
    { image: Contact_us, desc: 'We recognize the importance of managing our resources responsibly and minimizing our impact on the environment. We are committed to promoting sustainability both within our organization and in the solutions.', heading: 'Innovation', id: 3 }, { image: dubaitopview, desc: 'dubai top view image', heading: 'Dubai FullView', id: 4 },
    { image: NOSECTION, desc: 'dubai is beautify city', heading: 'Leira Bank', id: 5 }, { image: Holdings, desc: 'Holdings image', heading: 'Leira Bank', id: 6 },
    { image: leiralogo, desc: 'leira logo image', heading: 'Leira Bank', id: 7 }, { image: second, desc: 'logo', heading: 'Logo', id: 8 }]

    setPhoto(data)
  }, [])


  function moveimage(moving) {
    if (moving == 'next') {
      photo.map((obj, i) => {
        if (i == photo.length - 1) {
          obj.id = 1
          setOriginalId(1)
        } else {
          obj.id = obj.id + 1
        }
      })
      if (originalId - 1 == 0) {
        setOriginalId(photo.length)
      } else {
        setOriginalId(originalId - 1)
      }
    }
    if (moving == 'prev') {
      photo.map((obj, i) => {
        if (obj.id - 1 == 0) {
          obj.id = photo.length
        } else {
          obj.id = obj.id - 1
        }
      })
      if (originalId == photo.length) {
        setOriginalId(1)
      } else {
        setOriginalId(originalId + 1)
      }
    }
    photo.sort(function (a, b) {
      return a.id - b.id;
    });
    setPhoto(photo)
    forceUpdate();
  }

  function getimage(imagefor) {
    if (photo.length != 0) {
      // photo.map((lines)=>{
      //   console.log(imagefor,'imglines',lines,lines.id)
      //   if(imagefor === lines.id){
      //     console.log('imagefor ==',imagefor == lines.id)
      //     return lines.image
      //   }
      // })

      if (imagefor == 1) {
        return photo[0].image
      }
      if (imagefor == 2) {
        return photo[1].image
      }
      if (imagefor == 3) {
        if (description != photo[2].desc) {
          setDescription(photo[2].desc)
          setHeadings(photo[2].heading)
        }
        return photo[2].image
      }
      if (imagefor == 4) {
        return photo[3].image
      }
      if (imagefor == 5) {
        return photo[4].image
      }
    }
  }

  let lang = JSON.parse(localStorage.getItem('language'))
  let praposed_projects
  if (lang == "ltr") {
    praposed_projects = "Promised Projects"
  } else {
    praposed_projects = "المشاريع الموعودة"
  }

  return (<div className="praposedbg mt-5" dir="ltr">
    <p className="business-lines-heading">{praposed_projects}</p>
    <Desktop>
      <HeadShake>
        <div className="d-flex justiy-content-between mt-5">
          <div class="flip-box">
            <div class="flip-box-inner_1">
              <img src={getimage(1)} class="img-width_1" />
            </div>
          </div>
          <div className="flip-box">
            <div class="flip-box-inner_2 ml-3">
              <img src={getimage(2)} class="img-width_2" />
            </div>
          </div>
          <div className="flip-box">
            <div class="flip-box-inner_3 ml-4">
              <img src={getimage(3)} class="img-width_3" />
              <div className="mt-5" v dir={lang}>
                <p className="heading_tag">{headings}</p>
                <p className={lang == "ltr" ? "description" : "description_ar"}>{description}</p>
              </div>
              <button type="button" class="btn see_all_stories">SEE ALL STORIES</button>
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
      </HeadShake>
      <div className={lang == "ltr" ? "move_buttons" : "move_buttons_ar"}>
        <img src={arrowleft} class="arrow-left" title="" onClick={() => moveimage('next')} />
        <img src={arrowright} class="arrow-right ml-3" title="" onClick={() => moveimage('prev')} />
      </div>
      <div className={lang == "ltr" ? "buttons_count" : "buttons_count_ar"}>
        <p className="counting">{originalId}/{photo.length}</p>
      </div>
    </Desktop>

    <Tablet>
      <div className="d-flex justiy-content-between mt-5">
        <div class="flip-box">
          <div class="flip-box-inner_1">
            <img src={getimage(1)} class="img-width_1" />
          </div>
        </div>
        {/* <div className="flip-box">
          <div class="flip-box-inner_2">
            <img src={getimage(2)} class="img-width_2" />
          </div>
        </div> */}
        <div className="flip-box">
          <div class="flip-box-inner_3 ml-4">
            <img src={getimage(2)} class="img-width_3_2" />
            <div className="mt-5" dir={lang}>
              <p className="heading_tag">{headings}</p>
              <p className="description">{description}</p>
              <button type="button" class="btn see_all_stories">SEE ALL STORIES</button>
            </div>
          </div>
        </div>
        {/* <div className="flip-box">
          <div class="flip-box-inner_4">
            <img src={getimage(4)} class="img-width_4" />
          </div>
        </div> */}
        <div className="flip-box">
          <div class="flip-box-inner_5">
            <img src={getimage(3)} class="img-width_5" />
          </div>
        </div>
      </div>
      <div className={lang == "ltr" ? "move_buttons" : "move_buttons_ar"}>
        <img src={arrowleft} class="arrow-left" title="" onClick={() => moveimage('next')} />
        <img src={arrowright} class="arrow-right ml-3" title="" onClick={() => moveimage('prev')} />
      </div>
      <div className={lang == "ltr" ? "buttons_count" : "buttons_count_ar"}>
        <p className="counting">{originalId}/{photo.length}</p>
      </div>
    </Tablet>
    <Mobile>
      <div className="d-flex justiy-content-between mt-5">

        <div className="flip-box">
          <div class="flip-box-inner_3">
            <img src={getimage(1)} class="img-width_3" />
            <div className="mt-5" dir={lang}>
              <p className="heading_tag">{headings}</p>
              <p className="description mt-5 m-4">{description}</p>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button type="button" class="btn see_all_stories">SEE ALL STORIES</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={lang == "ltr" ? "move_buttons" : "move_buttons_ar"}>
        <img src={arrowleft} class="arrow-left" title="" onClick={() => moveimage('next')} />
        <p className={lang == "ltr" ? "buttons_count" : "buttons_count_ar"}>{originalId}/{photo.length}</p>
        <img src={arrowright} class="arrow-right" title="" onClick={() => moveimage('prev')} />
      </div>
      {/* <div className={lang == "ltr"?"buttons_count":"buttons_count_ar"}>
        <p className="counting">{originalId }/{ photo.length}</p>
        </div> */}
    </Mobile>

  </div>
  );
}