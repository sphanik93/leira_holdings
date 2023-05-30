import React from "react";
import { useEffect, useState } from "react";
import Hamburger from "../Components/hamBurger";
import hambericon from '../../assets/menu.png';
import gold_menu from "../../assets/gold-menu.png";
import menu_white from '../../assets/menu_white.png'
import logo from '../../assets/leira_logo.png.png'
import logowhite from '../../assets/Png 1.png'
import $ from 'jquery';
import Hamburger_ar from "../Components/arabic/hamBurger_ar.js";
import MediaQuery from "react-responsive";


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
  function languageChange(lang){
    setLangChange(lang)
    let dir
    if(lang == "eng"){
      dir = "ltr"
    } else{
      dir = "rtl"
    }
    console.log('lang==',lang,dir)
    props.langset(dir)
    localStorage.setItem('language', JSON.stringify(dir));
  }

  useEffect(()=>{
    let language = JSON.parse(localStorage.getItem('language'));
    let dir
    if(language == "ltr"){
      dir = "eng"
    } else{
      dir = "arab"
    }
    setLangChange(dir)
    languageChange(dir)
  },[])
  
  return (<div>
      <div className={isblack? "navclass mt-5":"navclass"}>
        <div className="d-flex">
      <div><img src={isblack? logowhite : logo} className={isblack?'logo_1 ml-5':'ml-5'} /></div>
        <div className={isblack? "d-flex path text-white ml-2 mt-4":"d-flex path ml-2 mt-5"}>
          <span className="mr-1">{props.path}</span> <label className="ml-1">{props.page}</label></div>
          </div>
      <div className={!blackMenu ? " m-4" : "Gold m-4"}>
      <MediaQuery minWidth={770}>
        <button type="button" class={langChange == "eng" ? "btn-sm border border-warning langEng" : "btn-sm border border-warning langArab"} onClick={() => languageChange('eng')} >ENGLISH</button>
        <button type="button" class={langChange == "arab" ? "btn-sm border border-warning langEngArab" : "btn-sm border border-warning langArabEng"} onClick={() => languageChange('arab')}>ٱلشَّارقَة</button>
      </MediaQuery>
        {!blackMenu ? 
        isblack?
        <img src={menu_white} class="hamberIcon ml-4  m-3" data-toggle="modal" data-target="#exampleModal" onClick={() => settingMenu(true)}/>:
        <img src={hambericon} class="hamberIcon ml-4  m-3" data-toggle="modal" data-target="#exampleModal" onClick={() => settingMenu(true)} /> :
          <img src={gold_menu} style={{ marginRight: "-2% im" }} class="hamberIcon ml-4  m-3" data-toggle="modal" data-target="#exampleModal" onClick={() => settingMenu(false)} />
        }

      </div>
    </div>
    {langChange == "eng"?
        <Hamburger opened={isblackMenu} langset={languageChange}/>
        :<>
        {blackMenu?<Hamburger_ar opened={isblackMenu} langset={languageChange}/>:null}</>
      }
    </div>
  )
}