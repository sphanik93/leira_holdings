import React from "react";
import { useEffect, useState } from "react";
import expandIcon from "../../assets/expand-icon.png"
import '../../Home/home.css'
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";

export default function Hamburger() {
  const [businessLines, setBusinessLines] = useState([])
  const [expanding, setExpanding] = useState(false)
  const [projectexpand,setProjectexpand] = useState(false)
  const [selectedMenu, setSelectedMenu] = useState('')

  useEffect(()=>{
    let businessData = ['SMART CITIES', 'FINANCIAL SERVICES', 'INDUSTRIAL SECTOR', 'AGRICULTURE SERVICES']
    setBusinessLines(businessData)
  },[])
  function caniexpandbusiness(){
    expanding ? setExpanding(false) : setExpanding(true)
  }
  function caniexpandproject(){
    projectexpand ? setProjectexpand(false) : setProjectexpand(true)
  }
  function selectingMenu(e){
    console.log(e.target.innerText)
    setSelectedMenu(e.target.innerText)
  }
  console.log(selectedMenu)
return(
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="">
        <button type="button" class="close m-3" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body mt-5 ml-4">
        <p className={selectedMenu !== "HOME"? "model-body-text" : "model-body-text-selected"} onClick={(e)=>selectingMenu(e)}>Home</p>
        <p className={selectedMenu !== "ABOUT"? "model-body-text" : "model-body-text-selected"} onClick={(e)=>selectingMenu(e)}>About</p>
        <p className="model-body-text">
          <img src={expandIcon} className="plusiconsrc" onClick={()=>caniexpandbusiness()}/>
          business lines
        </p>
        {expanding &&<>
        {businessLines.map((line)=>(
          <p className={selectedMenu != line ? "business-lines":"business-lines-selected"} onClick={(e)=>selectingMenu(e)}>{line}</p>
        ))}
        </>}
        <p className="model-body-text">
          <img src={expandIcon} className="plusiconsrc" onClick={()=>caniexpandproject()}/>
          PROJECTS
        </p>
        {projectexpand &&<>
        {businessLines.map((line)=>(
          <p className={selectedMenu !== line ? "business-lines":"business-lines-selected"} onClick={(e)=>selectingMenu(e)}>{line}</p>
        ))}
        </>}
      </div>
        <div className="mt-5 model-footer ml-5">
        <button type="button" class="btn btn-warning">CONTACT US</button>
        <div className="d-flex">
          <img src={instagram} style={{width: '42px',height: '42px'}}/>
        <img src={facebook} style={{width: '42px',height: '42px'}}/>
        <img src={twitter}  style={{width: '42px',height: '42px'}}/>
        </div>
        </div>
    </div>
  </div>
</div>
)
}
