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


export default function Hamburger_ar(props) {
  let navigate = useNavigate();
  const [businessLines, setBusinessLines] = useState([])
  const [expanding, setExpanding] = useState(false)
  const [projectexpand, setProjectexpand] = useState(false)
  const [selectedMenu, setSelectedMenu] = useState('')

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
  function selectingMenu(e) {
    console.log(e.target.innerText,'eeee',e)
    if(e.target.innerText == 'HOME'){
      navigate('/');
    }
    if(e.target.innerText == 'ABOUT'){
      navigate('/AboutUs')
    }
    if(e.target.innerText == 'CONTACT US'){
      navigate('/contactUs')
    }
    if(e.target.innerText == 'FINANCIAL SERVICES'){
      navigate('/leirabank')
    }

    if(e.target.innerText != 'CONTACT US')
    setSelectedMenu(e.target.innerText)
  }

  function closeModal(){
    props.opened(false)

  }
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
            <p className={selectedMenu !== "HOME" ? "model-body-text_ar" : "model-body-text-selected_ar"} onClick={(e) => selectingMenu(e)}>بيت</p>
            <p className={selectedMenu !== "ABOUT" ? "model-body-text_ar" : "model-body-text-selected_ar"} onClick={(e) => selectingMenu(e)}>عن</p>
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
            <button type="button" class="btn btn-warning_ar" onClick={(e)=>selectingMenu(e)}>اتصل بنا</button>
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
