import React from "react";
import { useEffect, useState } from "react";
import expandIcon from "../../../assets/expand-icon.png"
import '../../../Home/home.css'
import facebook from "../../../assets/a.facebook.png";
import twitter from "../../../assets/a.twitter.png";
import instagram from "../../../assets/a.instagram.png";
import { useNavigate } from 'react-router-dom';
import './hamBurger_ar.css'
import $ from 'jquery';
import MediaQuery from "react-responsive";


export default function Hamburger_ar(props) {
  let navigate = useNavigate();
  const [businessLines, setBusinessLines] = useState([])
  const [expanding, setExpanding] = useState(false)
  const [projectexpand, setProjectexpand] = useState(false)
  const [selectedMenu, setSelectedMenu] = useState('')
  const [langChange, setLangChange] = useState('arab')

  useEffect(() => {
    let businessData = ['المدن الذكية', 'الخدمات المالية', 'القطاع الصناعي', 'خدمات الزراعة']
    setBusinessLines(businessData)
  }, [])
  function caniexpandbusiness() {
    expanding ? setExpanding(false) : setExpanding(true)
  }
  function caniexpandproject() {
    projectexpand ? setProjectexpand(false) : setProjectexpand(true)
  }
  function selectingMenu(link) {
    console.log('eeee',link)
    if(link == 'HOME'){
      navigate('/');
    }
    if(link == 'ABOUT'){
      navigate('/AboutUs')
    }
    if(link == 'CONTACT US'){
      navigate('/contactUs')
    }
    if(link == 'FINANCIAL SERVICES'){
      navigate('/leirabank')
    }

    if(link != 'CONTACT US')
    setSelectedMenu(link)
  }

  function closeModal(){
    props.opened(false)

  }
  
  function languageChange(lang){
    setLangChange(lang)
    let dir
    if(lang == "eng"){
      dir = "ltr"
    } else{
      dir = "rtl"
    }
    props.langset(lang)
    localStorage.setItem('language', JSON.stringify(dir));
  }
  console.log('language',langChange)
  return (
    <div className="d-flex flex-row-reverse" dir="rtl">
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog_ar" role="document">
        <div class="modal-content_ar">
          <div class="" dir="ltr">
            <button type="button" class="close_ar m-3" data-dismiss="modal" aria-label="Close" onClick={()=>closeModal()}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body mt-5">
          <MediaQuery maxWidth={770}>
          <button type="button" class={langChange == "eng" ? "btn-sm border border-warning langEng" : "btn-sm border border-warning langArab"} onClick={() => languageChange('eng')} >ENGLISH</button>
        <button type="button" class={langChange == "arab" ? "btn-sm border border-warning langEngArab" : "btn-sm border border-warning langArabEng"} onClick={() => languageChange('arab')}>ٱلشَّارقَة</button>
        </MediaQuery>
            <p className={selectedMenu !== "HOME" ? "model-body-text_ar" : "model-body-text-selected_ar"} onClick={(e) => selectingMenu("HOME")}>بيت</p>
            <p className={selectedMenu !== "ABOUT" ? "model-body-text_ar" : "model-body-text-selected_ar"} onClick={(e) => selectingMenu("ABOUT")}>عن</p>
            <p className="model-body-text_ar">
              <img src={expandIcon} className="plusiconsrc" onClick={() => caniexpandbusiness()} />
              خطوط الأعمال
            </p>
            {expanding && <>
              {businessLines.map((line) => (
                <p className={selectedMenu != line ? "business-lines_ar" : "business-lines-selected_ar"} onClick={(e) => selectingMenu(e)}>{line}</p>
              ))}
            </>}
            <p className="model-body-text_ar">
              <img src={expandIcon} className="plusiconsrc" onClick={() => caniexpandproject()} />
              المشاريع
            </p>
            {projectexpand && <>
              {businessLines.map((line) => (
                <p className={selectedMenu !== line ? "business-lines_ar" : "business-lines-selected_ar"} onClick={(e) => selectingMenu(e)}>{line}</p>
              ))}
            </>}
          </div>
          <div className="mt-5 modal-footer_ar mr-5">
            <button type="button" class="btn btn-warning_ar" onClick={(e)=>selectingMenu("CONTACT US")}>اتصل بنا</button>
            <div className="d-flex">
              <img src={instagram} className="social-icons" />
              <img src={facebook} className="social-icons ml-3" />
              <img src={twitter} className="social-icons ml-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
