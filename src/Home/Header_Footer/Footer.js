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
                                <div><img src={phone_ring} className="navbar-icons mr-2" />(+971) - 8829921232</div>
                                <div><img src={mail_icon} className="navbar-icons1 mr-2" />support@leiraholding.com</div>
                            </div>
                            <div className="mt-5">
                                © 2023 LEIRA. Design & Developed by Eterna
                            </div>
                        </div>
                        <div className="d-flex flex-column">
                            <div className=" mt-5" id="box-footer">
                                <img src={twitter} className="navbar-social-icons" />
                                <img src={facebook} className="navbar-social-icons" />
                                <img src={insta} className="navbar-social-icons" />
                                <img src={skype} className="navbar-social-icons" />
                                <img src={linkedin} className="navbar-social-icons" />
                            </div>
                            <div className="mt-4 ml-2">
                                <span className="newsletter">Newsletter</span>
                            </div>
                            <div className="ml-2">
                                <input type="" className="newsletter_input" /><img src={arrow} className="newsletter_arrow" />
                            </div>
                        </div>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={770}>
                <div className="footer-layout-mobile">
                    <div className="d-flex flex-column mobile-footer">
                        <img src={logo} className="footerlogo_mobile" />

                        <div onClick={() => navigate('/')} className="cursoerNav">Home</div>
                        <div onClick={() => navigate('/AboutUs')} className="cursoerNav">About Us</div>
                        <div className="cursoerNav">Business Lines</div>
                        <div className="cursoerNav">Projects</div>
                        <div className="cursoerNav">Approach</div>
                        <div className="mt-4"><img src={phone_ring} className="mobil-footer-img mr-2" />(+971) - 8829921232</div>
                        <div><img src={mail_icon} className="mobil-footer-img mr-2" />support@leiraholding.com</div>
                        <div className="mt-2">
                            © 2023 LEIRA. Design & Developed by Eterna
                        </div>
                        <div className="d-flex justify-content-between setwidthflex mt-5">
                            <img src={twitter} className="navbar-social-icons_mobile" />
                            <img src={facebook} className="navbar-social-icons_mobile" />
                            <img src={insta} className="navbar-social-icons_mobile" />
                            <img src={skype} className="navbar-social-icons_mobile" />
                            <img src={linkedin} className="navbar-social-icons_mobile" />
                        </div>
                        <span className="newsletter">Newsletter</span>
                        <div className="">
                            <input type="" className="newsletter_input_mobile" /><img src={arrow} className="newsletter_arrow" />
                        </div>
                    </div>
                </div>
            </MediaQuery>
        </div>
    )
}