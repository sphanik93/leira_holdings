import React from "react";
import { useEffect, useState } from "react";
import expandIcon from "../../assets/expand-icon.png"

export default function Hamburger() {
  const [businessLines, setBusinessLines] = useState([])
  const [expanding, setExpanding] = useState(false)
  const [projectexpand,setProjectexpand] = useState(false)

  useEffect(()=>{
    let businessData = ['SMART CITIES', 'FINANCIAL Services', 'INDUSTRIAL SECTOR', 'AGRICULTURE SERVICES']
    setBusinessLines(businessData)
  },[])
  function caniexpandbusiness(){
    expanding ? setExpanding(false) : setExpanding(true)
  }
  function caniexpandproject(){
    projectexpand ? setProjectexpand(false) : setProjectexpand(true)
  }
return(
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="">
        <button type="button" class="close m-3" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body mt-5">
        <p className="model-body-text">Home</p>
        <p className="model-body-text">About</p>
        <p className="model-body-text">
          <img src={expandIcon} className="plusiconsrc" onClick={()=>caniexpandbusiness()}/>
          business lines
        </p>
        {expanding &&<>
        {businessLines.map((line)=>(
          <p className="business-lines">{line}</p>
        ))}
        </>}
        <p className="model-body-text">
          <img src={expandIcon} className="plusiconsrc" onClick={()=>caniexpandproject()}/>
          PROJECTS
        </p>
        {projectexpand &&<>
        {businessLines.map((line)=>(
          <p className="business-lines">{line}</p>
        ))}
        </>}
      </div>
        <div className="mt-5 text-center model-footer">
        <button type="button" class="btn btn-warning">CONTACT US</button>
        </div>
    </div>
  </div>
</div>
)
}
