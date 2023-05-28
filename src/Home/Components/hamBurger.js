import React from "react";
import { useEffect, useState } from "react";
import expandIcon from "../../assets/expand-icon.png"
import '../../Home/home.css'
import facebook from "../../assets/a.facebook.png";
import twitter from "../../assets/a.twitter.png";
import instagram from "../../assets/a.instagram.png";
import { useNavigate } from 'react-router-dom';

export default function Hamburger(props) {
  let navigate = useNavigate();
  const [businessLines, setBusinessLines] = useState([])
  const [expanding, setExpanding] = useState(false)
  const [projectexpand, setProjectexpand] = useState(false)
  const [selectedMenu, setSelectedMenu] = useState('')

  useEffect(() => {
    let businessData = ['SMART CITIES', 'FINANCIAL SERVICES', 'INDUSTRIAL SECTOR', 'AGRICULTURE SERVICES']
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
            <p className={selectedMenu !== "HOME" ? "model-body-text" : "model-body-text-selected"} onClick={(e) => selectingMenu(e)}>Home</p>
            <p className={selectedMenu !== "ABOUT" ? "model-body-text" : "model-body-text-selected"} onClick={(e) => selectingMenu(e)}>About</p>
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
            <button type="button" class="btn btn-warning" onClick={(e)=>selectingMenu(e)}>CONTACT US</button>
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
