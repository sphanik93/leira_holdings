import React from "react";
import { useEffect, useState } from "react";
import Header from "../Header_Footer/Header.js"
import Footer from "../Header_Footer/Footer.js"
import leira_holding from '../../assets/Holdings.png'
import env_friendly from "../../assets/enveronmental_friendly.png"
import smartgreen from "../../assets/smartgreen.png"
import './About.css'
import MediaQuery from "react-responsive";
import {Bounce} from 'react-reveal/';
import $ from 'jquery';


export function About_us() {


    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 490) {
          console.log('insidescrolling',window.pageYOffset)
          $(".scroll-class").css("-webkit-filter" , "grayscale(100%)");
        } else{
            console.log('inside not',window.pageYOffset)
          $(".scroll-class").css("-webkit-filter" , "grayscale(0%)");
        } 
         if (window.pageYOffset > 0 && this.window.pageYOffset < 550) {
            console.log('insidescrolling',window.pageYOffset)
          $(".scroll-class1").css("-webkit-filter" , "grayscale(100%)");
        }  else{
            console.log('inside not',window.pageYOffset)
            $(".scroll-class1").css("-webkit-filter" , "grayscale(0%)");
          }
         if (window.pageYOffset > 1156 && this.window.pageYOffset < 1247) {
            console.log('insidescrolling',window.pageYOffset)
          $(".scroll-class1").css("-webkit-filter" , "grayscale(100%)");
          $(".scroll-class2").css("-webkit-filter" , "grayscale(100%)");
        }  else{
            console.log('inside not',window.pageYOffset)
            $(".scroll-class1").css("-webkit-filter" , "grayscale(0%)");
          $(".scroll-class2").css("-webkit-filter" , "grayscale(0%)");
          }
         if (window.pageYOffset > 1720) {
            console.log('insidescrolling',window.pageYOffset)
          $(".scroll-class1").css("-webkit-filter" , "grayscale(100%)");
          $(".scroll-class2").css("-webkit-filter" , "grayscale(100%)");
        } else{
          console.log('inside not',window.pageYOffset)
          $(".scroll-class1").css("-webkit-filter" , "grayscale(0%)");
          $(".scroll-class2").css("-webkit-filter" , "grayscale(0%)");
        }
      })

    return (
        <div className="">
            <Header path={'HOME'} page={'/ ABOUT'} />
            <div class="scroll-class" style={{
                background: `url(${leira_holding})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "668px",
                // marginTop: '87px'
            }}>
                <Bounce left cascade>
                <div className="text-on_contact">
                    <p className="about_text">About us</p>
                    <p className="about_welcome">Welcome to Leira Holding, a dynamic and</p>
                    <p className="about_welcome">forward-thinking company</p>
                    <p className="labout_longdesc mt-5">that specializes in building mega projects with a focus on the future. As a relatively new player in the industry, Leira Holding pursues strategic, sustainable, and economically feasible investments in vital and promising sectors, as well as viable long-term projects, with the goal of creating a clear and sustainable socioeconomic impact and aligning its objectives with the global strategic investment direction. At Leira, we are passionate about what we do and are always seeking new and creative ways to bring value to our clients and stakeholders.</p>
                </div>
                </Bounce>
            </div>

            <div class="scroll-class1" style={{
                background: `url(${env_friendly})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "668px",
                // marginTop: '87px'
            }}>
                <Bounce left cascade>
                <div className="text-on_contact1">
                    <p className="about_welcome">The company is actively pursuing</p>
                    <p className="about_welcome">environmentally friendly</p>
                    <p className="labout_longdesc mt-5">activities such as encouraging eco-friendly consumption, conservation measures, and investments in renewable energy sources. We also seek to provide high-tech services to all of the units served, as well as stunning homes and communities with all of the amenities and services you need for a world-class living experience.</p>
                </div>
                </Bounce>
            </div>

            <div class="scroll-class2" style={{
                background: `url(${smartgreen})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "668px",
            }}>
                <Bounce left cascade>
                <div className="text-on_contact1">
                    <p className="about_welcome">Our focus is on developing a secured</p>
                    <p>smart green community,</p>
                    <p className="labout_longdesc">that specializes in building mega projects with a focus on the future. As a relatively new player in the industry, Leira Holding pursues strategic, sustainable, and economically feasible investments in vital and promising sectors, as well as viable long-term projects, with the goal of creating a clear and sustainable socioeconomic impact and aligning its objectives with the global strategic investment direction. At Leira, we are passionate about what we do and are always seeking new and creative ways to bring value to our clients and stakeholders. This includes using the latest technologies, implementing sustainable building practices, and collaborating with the best and brightest minds in the industry.</p>
                </div>
                </Bounce>
            </div>
            <Footer />

        </div>
    )
}