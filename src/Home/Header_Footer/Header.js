import React from "react";
import { useEffect, useState } from "react";
import Hamburger from "../Components/hamBurger";
import hambericon from '../../assets/menu.png';
import gold_menu from "../../assets/gold-menu.png";
import logo from '../../assets/leira_logo.png.png'

export default function Header() {
    const [blackMenu, setGoldmenu] = useState(false)
    const [langChange, setLangChange] = useState('eng')

    function isblackMenu(mes){
        setGoldmenu(mes)
      }

return(
<div className="sticky d-flex justify-content-between">
<img src={logo} className="logo" />
          <div className={!blackMenu?"rightCorner":"rightCornerGold"}>
            <button type="button" class={langChange == "eng" ? "btn-sm border border-warning langEng" : "btn-sm border border-warning langArab"} onClick={() => setLangChange('eng')} >ENGLISH</button>
            <button type="button" class={langChange == "arab" ? "btn-sm border border-warning langEngArab" : "btn-sm border border-warning langArabEng"} onClick={() => setLangChange('arab')}>ٱلشَّارقَة</button>
            
            {!blackMenu? <img src={hambericon} class="hamberIcon ml-4  m-3" data-toggle="modal" data-target="#exampleModal" onClick={()=>setGoldmenu(true)}/>:
            <img src={gold_menu} style={{marginRight:"-2% im"}} class="hamberIcon ml-4  m-3" data-toggle="modal" data-target="#exampleModal"  onClick={()=>setGoldmenu(false)}/>}

            <Hamburger opened={isblackMenu}/>
            </div>
            </div>
)
}