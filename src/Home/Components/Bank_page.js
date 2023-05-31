import React from "react";
import { useEffect, useState } from "react";
import Header from "../Header_Footer/Header.js"
import Footer from "../Header_Footer/Footer.js"
import leira_holding from '../../assets/Holdings.png'
import leira_bank from "../../assets/bank.png"
import './Bank_page.css'
import twitter from '../../assets/a.twitter.png'
import facebook from '../../assets/a.facebook.png'
import insta from '../../assets/a.instagram.png'
import skype from '../../assets/a.google-plus.png'
import linkedin from '../../assets/a.linkedin.png'
import MediaQuery from "react-responsive";
import LightSpeed from 'react-reveal/LightSpeed';

export function BankPage() {
    const [langChange, setLangChange] = useState('ltr')

    function changelanguage(lan){
        setLangChange(lan)
      }

      useEffect(() => {
        let language = JSON.parse(localStorage.getItem('language'));
        setLangChange(language)
      }, [])

    return (
        <div className="" dir={langChange}>
            <Header path={'HOME'} page={'/ LEIRA BANK'} langset={changelanguage}/>
            <div class="" style={{
                background: `url(${leira_holding})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "668px",
                // marginTop: '87px'
            }}>
                <LightSpeed left cascade>
                <div className="text-onBG">
                    <p className="leira_bank mt-5">Leira Bank</p>
                    <p className="leira_bank_des">Welcome to Leira Holding, a dynamic and
                        forward-thinking company</p>
                    <p className="leira_bank_longdesc mt-3">that specializes in building mega projects with a focus on the future. As a relatively new player in the industry, Leira Holding pursues strategic, sustainable, and economically feasible investments in vital and promising sectors, as well as viable long-term projects, with the goal of creating a clear and sustainable socioeconomic impact and aligning its objectives with the global strategic investment direction. At Leira, we are passionate about what we do and are always seeking new and creative ways to bring value to our clients and stakeholders. This includes using the latest technologies, implementing sustainable building practices, and collaborating with the best and brightest minds in the industry.</p>
                </div>
                </LightSpeed>
            </div>
            <div className="container_box mb-5">
                <MediaQuery minWidth={770}>
                    <div className="d-flex justify-content-between">
                        <img src={leira_bank} className="bank_img" />
                        <div className="bak_box ml-2">
                            <p className="box_text">Leira Bank is part of our ongoing efforts to enhance the quality of life</p>
                        </div>
                    </div>
                </MediaQuery>
                <MediaQuery maxWidth={770}>
                    <div className="">
                        <img src={leira_bank} className="bank_img_mobile" />
                        <div className="bak_box_mobile mt-4">
                            <p className="box_text">Leira Bank is part of our ongoing efforts to enhance the quality of life</p>
                        </div>
                    </div>
                </MediaQuery>
                <div className="banking_style mt-5">
                    LEIRA BANK
                </div>
                <div id="leirabankline" className="mt-3"></div>
                <p className="big_desc mt-5">
                    Leira Bank is part of our ongoing efforts to enhance the quality of life for residents and visitors in Leira Smart City.
                    Leira Bank is a new financial institution that will provide a wide range of banking services to individuals and businesses in the country. Leira Bank will offer a comprehensive suite of products and services, including checking and savings accounts, personal and business loans, credit cards, and online banking. The bank will also provide investment products and wealth management services to help customers grow their wealth and achieve their financial goals.
                    One of the key features of Leira Bank will be its use of advanced technology to provide a seamless and convenient banking experience for customers and Investors. Leira Bank will also be committed to providing excellent customer service.
                    The bank will have a dedicated team of customer service representatives who are trained to assist customers and Investors with their banking needs. Additionally, Leira Bank will have a variety of branches strategically located throughout Kuwait to provide easy access to customers.
                </p>
                <div id="line_div"></div>
                <div className="d-flex">
                    <div className="banking_style mt-5">
                        Share

                        <img src={twitter} className="social_icons ml-4" />
                        <img src={facebook} className="social_icons ml-2" />
                        <img src={insta} className="social_icons ml-2" />
                        <img src={skype} className="social_icons ml-2" />
                        <img src={linkedin} className="social_icons ml-2" />
                    </div></div>

            </div>
            <Footer />

        </div>
    )
}