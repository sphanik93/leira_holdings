import React from "react";
import { useEffect, useState } from "react";
import logo from '../../assets/leiralogo-04.png'
import phone_ring from '../../assets/call.png'
import mail_icon from '../../assets/mail.png'
import twitter from '../../assets/a.twitter.png'
import facebook from '../../assets/a.facebook.png'
import insta from '../../assets/a.instagram.png'
import skype from '../../assets/a.google-plus.png'
import linkedin from '../../assets/a.linkedin.png'
import arrow from '../../assets/Arrow1.png'
import MediaQuery from "react-responsive";
import "../../Home/home.css"
import { useNavigate } from 'react-router-dom';

export default function Footer() {
    let navigate = useNavigate();

    let lang = JSON.parse(localStorage.getItem('language'))

    return (
        <div>
            <MediaQuery minWidth={770}>
                <div className="footer-layout">
                    <div className="d-flex justify-content-around">
                        <img src={logo} className="footerlogo" />
                        <div className="d-flex flex-column">
                            <div className="d-flex justify-content-around mt-5" id="box-footer">
                                <div onClick={() => navigate('/')} className="cursoerNav">Home</div>
                                <div onClick={() => navigate('/AboutUs')} className="cursoerNav">About Us</div>
                                <div className="cursoerNav">Business Lines</div>
                                <div className="cursoerNav">Projects</div>
                                <div className="cursoerNav">Approach</div>
                            </div>
                            <div className="d-flex justify-content-around mt-4" id="box-footer">
                                <div><img src={phone_ring} className={lang == "ltr"?"navbar-icons mr-2":"navbar-icons ml-2"} />(+971) - 8829921232</div>
                                <div><img src={mail_icon} className={lang == "ltr"?"navbar-icons1 mr-2":"navbar-icons ml-2"} />support@leiraholding.com</div>
                            </div>
                            <div className="mt-5">
                                © 2023 LEIRA. Design & Developed by Eterna
                            </div>
                        </div>
                        <div className="d-flex flex-column">
                            <div className=" mt-5" id="box-footer">
                                <img src={twitter} className={lang == "ltr" ?"navbar-social-icons ml-3":"navbar-social-icons ml-3"} />
                                <img src={facebook} className={lang == "ltr" ?"navbar-social-icons ml-3":"navbar-social-icons ml-3"} />
                                <img src={insta} className={lang == "ltr" ?"navbar-social-icons ml-3":"navbar-social-icons ml-3"} />
                                <img src={skype} className={lang == "ltr" ?"navbar-social-icons ml-3":"navbar-social-icons ml-3"} />
                                <img src={linkedin} className={lang == "ltr" ?"navbar-social-icons ml-3":"navbar-social-icons ml-3"} />
                            </div>
                            <div className="mt-4 ml-4">
                                <span className={lang=="ltr"?"newsletter ml-2":"newsletter_ar mr-1"}>Newsletter</span>
                            </div>
                            <div className={lang=="ltr"?"mr-4":"ml-4"}>
                                <input type="" className={lang == "ltr" ?"newsletter_input":"newsletter_input_ar"} placeholder="Enter your Email ID"/><img src={arrow} className={lang == "ltr"?"newsletter_arrow":"newsletter_arrow_ar"} />
                            </div>
                        </div>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={770}>
                <div className="footer-layout-mobile">
                    <div className={lang == "ltr" ? "d-flex flex-column mobile-footer":"d-flex flex-column mobile-footer m-5"} dir={lang}>
                        <img src={logo} className="footerlogo_mobile" />

                        <div onClick={() => navigate('/')} className="cursoerNav">Home</div>
                        <div onClick={() => navigate('/AboutUs')} className="cursoerNav">About Us</div>
                        <div className="cursoerNav">Business Lines</div>
                        <div className="cursoerNav">Projects</div>
                        <div className="cursoerNav">Approach</div>
                        <div className={lang=="ltr"?"mt-4":"mt-4 phonemail_ar"}><img src={phone_ring} className={lang == "ltr"?"mobil-footer-img mr-2":"mobil-footer-img_ar ml-2"} />(+971) - 8829921232</div>
                        <div className={lang=="ltr"?"":"phonemail_ar"}><img src={mail_icon} className={lang == "ltr"?"mobil-footer-img mr-2":"mobil-footer-img_ar ml-2"} />support@leiraholding.com</div>
                        <div className={lang=="ltr"?"mt-2":"mt-2 phonemail_ar"}>
                            © 2023 LEIRA. Design & Developed by Eterna
                        </div>
                        <div className="d-flex justify-content-between setwidthflex mt-5">
                            <img src={twitter} className="navbar-social-icons_mobile" />
                            <img src={facebook} className="navbar-social-icons_mobile" />
                            <img src={insta} className="navbar-social-icons_mobile" />
                            <img src={skype} className="navbar-social-icons_mobile" />
                            <img src={linkedin} className="navbar-social-icons_mobile" />
                        </div>
                        <span className={lang == "ltr" ?"newsletter ml-2":"newsletter_ar mr-1"}>Newsletter</span>
                        <div className={lang == "ltr"?"":"phonemail_ar"}>
                            <input type="" className="newsletter_input_mobile" placeholder="Enter your Email ID"/><img src={arrow} className={lang == "ltr"?"newsletter_arrow":"newsletter_arrow_mobile_ar"} />
                        </div>
                    </div>
                </div>
            </MediaQuery>
        </div>
    )
}