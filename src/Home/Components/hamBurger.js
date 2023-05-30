import React from "react";
import { useEffect, useState } from "react";
import expandIcon from "../../assets/expand-icon.png"
import '../../Home/home.css'
import facebook from "../../assets/a.facebook.png";
import twitter from "../../assets/a.twitter.png";
import instagram from "../../assets/a.instagram.png";
import { useNavigate } from 'react-router-dom';
import MediaQuery from "react-responsive";

export default function Hamburger(props) {
  let navigate = useNavigate();
  const [businessLines, setBusinessLines] = useState([])
  const [expanding, setExpanding] = useState(false)
  const [projectexpand, setProjectexpand] = useState(false)
  const [selectedMenu, setSelectedMenu] = useState('')
  const [langChange, setLangChange] = useState('eng')

  useEffect(() => {
    let businessData = ['SMART CITIES', 'FINANCIAL SERVICES', 'INDUSTRIAL SECTOR', 'AGRICULTURE SERVICES']
    setBusinessLines(businessData)
  }, [])
  function caniexpandbusiness(props) {
    expanding ? setExpanding(false) : setExpanding(true)
  }
  function caniexpandproject() {
    projectexpand ? setProjectexpand(false) : setProjectexpand(true)
  }
  function selectingMenu(link) {
    console.log(link,'eeee')
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

  return (
    <div className="d-flex flex-row-reverse">
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-keyboard="false" data-backdrop="static">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="">
            <button type="button" class="close m-3" data-dismiss="modal" aria-label="Close" onClick={() => props.opened(false)}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body mt-5 ml-4">
          <MediaQuery maxWidth={770}>
          <button type="button" class={langChange == "eng" ? "btn-sm border border-warning langEng" : "btn-sm border border-warning langArab"} onClick={() => languageChange('eng')} >ENGLISH</button>
        <button type="button" class={langChange == "arab" ? "btn-sm border border-warning langEngArab" : "btn-sm border border-warning langArabEng"} onClick={() => languageChange('arab')}>ٱلشَّارقَة</button>
        </MediaQuery>
            <p className={selectedMenu !== "HOME" ? "model-body-text" : "model-body-text-selected"} onClick={(e) => selectingMenu("HOME")}>Home</p>
            <p className={selectedMenu !== "ABOUT" ? "model-body-text" : "model-body-text-selected"} onClick={(e) => selectingMenu("ABOUT")}>About</p>
            <p className="model-body-text">
              <img src={expandIcon} className="plusiconsrc" onClick={() => caniexpandbusiness()} />
              business lines
            </p>
            {expanding && <>
              {businessLines.map((line) => (
                <p className={selectedMenu != line ? "business-lines" : "business-lines-selected"} onClick={(e) => selectingMenu(e)}>{line}</p>
              ))}
            </>}
            <p className="model-body-text">
              <img src={expandIcon} className="plusiconsrc" onClick={() => caniexpandproject()} />
              PROJECTS
            </p>
            {projectexpand && <>
              {businessLines.map((line) => (
                <p className={selectedMenu !== line ? "business-lines" : "business-lines-selected"} onClick={(e) => selectingMenu(e)}>{line}</p>
              ))}
            </>}
          </div>
          <div className="mt-5 model-footer ml-5">
            <button type="button" class="btn btn-warning" onClick={(e)=>selectingMenu('CONTACT US')}>CONTACT US</button>
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
