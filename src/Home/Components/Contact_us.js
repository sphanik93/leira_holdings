import React from "react";
import { useEffect, useState } from "react";
import contact_us from '../../assets/Contact_us.png';
import Header from "../Header_Footer/Header.js"
import Footer from "../Header_Footer/Footer.js"
import './Contact_us.css'
import ReCAPTCHA from "react-google-recaptcha";
import map from "../../assets/map.png"
import phone_ring from '../../assets/call.png'
import mail_icon from '../../assets/mail.png'
import {Zoom, Bounce} from 'react-reveal';
import MediaQuery from "react-responsive";

export function Contact_Us(props) {
    const [buttonSelect, setButtonSelect] = useState([true, false, false])
    const [langChange, setLangChange] = useState('ltr')

    function changelanguage(lan){
        setLangChange(lan)
      }

      useEffect(() => {
        let language = JSON.parse(localStorage.getItem('language'));
        setLangChange(language)
      }, [])
      let lang = JSON.parse(localStorage.getItem('language'))

    return (
        <div  dir={langChange}>
            <Header path={'HOME'} page={'/ CONTACT US'} langset={changelanguage}/>
            <div class="" style={{
                background: `url(${contact_us})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "668px",
                // marginTop: '87px'
            }}>
                 <Zoom left cascade>
                <div className="text-onBG_contact topset">
                    <p className="contact_text">Contact Us</p>
                    <p className="what_help">What can we help you with today?</p>
                </div>
                </Zoom>
            </div>
            <div className="flexing mb-5">
                <div className="col-md-1"></div>
                <div className="col-md-5 mt-5" style={{position: 'inherit'}}>
                    <p className="enquiry_heading">Please select an enquiry type before completing
                        the form below.</p>
                    <div className="d-flex flex-column">
                        <div className="d-flex justify-content-between div-type-width">
                            <button class={!buttonSelect[0] ? "btn contact_type_btn" : "btn contact_type_btn_select"} type="submit" onClick={() => setButtonSelect([true, false, false])}>GENERAL</button>
                            <button class={!buttonSelect[1] ? "btn contact_type_btn" : "btn contact_type_btn_select"} type="submit" onClick={() => setButtonSelect([false, true, false])}>INVESTOR</button>
                            <button class={!buttonSelect[2] ? "btn contact_type_btn" : "btn contact_type_btn_select"} type="submit" onClick={() => setButtonSelect([false, false, true])}>MEDIA</button>
                        </div>
                        <div className="d-flex justify-content-between mt-5">
                            <input type="text" className="contact_input_box" placeholder="Full Name" />
                            <input type="text" className="contact_input_box" placeholder="Subjest of enquiry" />
                        </div>
                        <div className="d-flex justify-content-between mt-5">
                            <input type="text" className="contact_input_box2" placeholder="Email" />
                            <input type="text" className="contact_input_box2" placeholder="Ph no." />
                            <input type="text" className="contact_input_box2" placeholder="Organization" />
                        </div>
                        <textarea id="w3review" name="w3review" rows="8" cols="50" className="mt-5" placeholder="Message">
                        </textarea>
                        <MediaQuery minWidth={381}>
                        <div className="mt-5 d-flex justify-content-between">
                            <ReCAPTCHA
                                sitekey="Your client site key"
                            // onChange={onChange}
                            />
                            <button class="btn" type="submit" className="send_btn">SEND</button>
                        </div>
                        </MediaQuery>
                        <MediaQuery maxWidth={380}>
                        <div className="mt-5">
                            <ReCAPTCHA
                                sitekey="Your client site key"
                            // onChange={onChange}
                            />
                            <button class="btn" type="submit" className="send_btn">SEND</button>
                        </div>
                        </MediaQuery>
                    </div>
                </div>

                <div class="col-md-6 mt-1" style={{
                    background: `url(${map})`,
                    width: "100%",
                    height: "450px",
                    position: 'inherit'
                }}>
                    <div className="circle_square_box">
                    <Bounce bottom cascade>
                        <p className="box_text_heading">Leira Holdings Corporate Office</p>
                        <p className="box_text_address">Umm Suqeim RoadP.O. Box 66000Dubai,</p>
                        <p className="box_text_address1"> United Arab Emirates</p>
                        <p className="box_text_address mt-5"><img src={phone_ring} className="address_contact_icon mr-2" />(+971) - 8829921232</p>
                        <p className="box_text_address1"><img src={mail_icon} className="address_contact_icon mr-2" />support@leiraholding.com</p>
                    </Bounce>
                    <div className="circle_map "></div>
                    </div>
                </div>
            </div>
            <div className="widthing_trustline m-5">
                <p class={lang == "ltr" ?"trustline":"trustline_ar"}>TRUSTLINE</p>
                <p className={lang == "ltr"? "trusline_des":"trusline_des_ar"}>Leira Holdings recognises the value of transparency and accountability in its management practices and supports the right of individuals to report fraud or unethical behaviour.</p>
                <p className={lang == "ltr"? "trusline_des mt-5":"trusline_des_ar mt-5"}>Please address your concerns via our dedicated website <span className="mail">leira.trustline.com</span></p>
            </div>
            <Footer />
        </div>
    )
}