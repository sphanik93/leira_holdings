import React from "react";
import { useEffect, useState } from "react";
import Hamburger from "../Components/hamBurger";
import hambericon from '../../assets/menu.png';
import gold_menu from "../../assets/gold-menu.png";
import menu_white from '../../assets/menu_white.png'
import logo from '../../assets/leira_logo.png.png'
import logowhite from '../../assets/Png 1.png'
import $ from 'jquery';

export default function Header(props) {
  const [blackMenu, setGoldmenu] = useState(false)
  const [langChange, setLangChange] = useState('eng')
  const [isblack, setIsBlack] = useState(true)

  function isblackMenu(mes) {
    console.log(mes,'.es==')
    setGoldmenu(mes)
  }

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 500) {
      // console.log('inside scroll',window.pageYOffset)
      $(".navclass").css("background" , "#fff");
      $(".scroll-class").css("-webkit-filter" , "");
      setIsBlack(false)
    }else{
      setIsBlack(true)
      // console.log('inside not scroll',window.pageYOffset)
      $(".scroll-class").css("-webkit-filter" , "");
      $(".navclass").css("background" , "#0000");
    }
  })

  function settingMenu(what){
    setGoldmenu(what)
  }
  console.log('goldmenu',blackMenu)
  return (<div>
      <div className={isblack? "navclass mt-5":"navclass"}>
        <div className="d-flex">
      <div><img src={isblack? logowhite : logo} className={isblack?'logo_1 ml-5':'ml-5'} /></div>
        <div className={isblack? "d-flex path text-white ml-2 mt-4":"d-flex path ml-2 mt-5"}>
          <span className="mr-1">{props.path}</span> <label className="ml-1">{props.page}</label></div>
          </div>
      <div className={!blackMenu ? " m-4" : "Gold m-4"}>
        <button type="button" class={langChange == "eng" ? "btn-sm border border-warning langEng" : "btn-sm border border-warning langArab"} onClick={() => setLangChange('eng')} >ENGLISH</button>
        <button type="button" class={langChange == "arab" ? "btn-sm border border-warning langEngArab" : "btn-sm border border-warning langArabEng"} onClick={() => setLangChange('arab')}>ٱلشَّارقَة</button>
        {/* {isblack?
        <img src={menu_white} class="hamberIcon ml-4  m-3" data-toggle="modal" data-target="#exampleModal" onClick={() => setGoldmenu(true)}/>:
        blackMenu ?<img src={gold_menu} style={{ marginRight: "-2% im" }} class="hamberIcon ml-4  m-3" data-toggle="modal" data-target="#exampleModal" onClick={() => setGoldmenu(false)} />:null
      } */}
        {!blackMenu ? 
        isblack?
        <img src={menu_white} class="hamberIcon ml-4  m-3" data-toggle="modal" data-target="#exampleModal" onClick={() => settingMenu(true)}/>:
        <img src={hambericon} class="hamberIcon ml-4  m-3" data-toggle="modal" data-target="#exampleModal" onClick={() => settingMenu(true)} /> :
          <img src={gold_menu} style={{ marginRight: "-2% im" }} class="hamberIcon ml-4  m-3" data-toggle="modal" data-target="#exampleModal" onClick={() => settingMenu(false)} />
        }

      </div>
    </div>
        <Hamburger opened={isblackMenu} />
    </div>
  )
}