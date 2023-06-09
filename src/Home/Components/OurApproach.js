import React from "react";
import { useEffect, useState } from "react";
import sideview from '../../assets/side-style.png'
import NOSECTION from '../../assets/NOSECTION.png'
import './ourapproach.css'
import MediaQuery from "react-responsive";
import { Zoom, Flip } from 'react-reveal';


export default function OurApproach() {
    const [tabList, setTabList] = useState([])
    const [listSelected, setListedSelected] = useState('values that matters')
    const forceUpdate = React.useReducer(bool => !bool)[1];

    let lang = JSON.parse(localStorage.getItem('language'))
    let our_approach
    if (lang == "ltr") {
        our_approach = "Our Approach"
    } else {
        our_approach = "نهجنا"
    }

    useEffect(() => {
        let data = [{
            name: "More Human Like", image: NOSECTION, text: "We recognize the importance of managing our resources responsibly and minimizing our impact on the environment. We are committed to promoting sustainability both within our organization and in the solutions, we provide to our clients. These values reflect our commitment to providing exceptional service, operating with integrity and transparency, working collaboratively, embracing innovation, and promoting sustainability.", heading: "MORE HUMAN LIKE",
            status: true
        }, {
            name: "Integration", image: NOSECTION, text: "Hii ", heading: "MORE HUMAN LIKE",
            status: false
        }, {
            name: "Values that matters", image: NOSECTION, text: "Welcome  ", heading: "MORE HUMAN LIKE",
            status: false
        }, {
            name: "More Human", image: NOSECTION, text: "Welcome Tomorrow ", heading: "MORE HUMAN LIKE",
            status: false
        }, {
            name: "Integrations", image: NOSECTION, text: "Welcome Tomorrow Our  ", heading: "MORE HUMAN LIKE",
            status: false
        }]
        setTabList(data)
    }, [])

    function savingList(selected) {
        tabList.map((lis) => {
            if (lis.name == selected) {
                lis.status = true
            } else {
                lis.status = false
            }
        })
        setTabList(tabList)
        forceUpdate();

    }

    function changeType(type) {
        setListedSelected(type)
    }

    return (
        <div >
            <MediaQuery minWidth={770}>
                <div className="mb-5">
                    <div className="d-flex">
                        <img className={lang == "ltr" ? "ourapproach_img" : "ourapproach_img_ar"} src={sideview} />
                        <Zoom right cascade>
                            <p className="ourapproach ">{our_approach}</p>
                        </Zoom>
                    </div>
                    <div className="mt-5 ml-2 d-flex justify-content-between">
                        <div className="mt-5 m-5">
                            <p className={listSelected == "objective" ? "ourapproach_matter mt-5" : "objective mt-5"} onClick={() => changeType('objective')}>Objective</p>
                            <p className={listSelected == 'values that matters' ? "ourapproach_matter mt-5 topinc" : "objective mt-5 topinc"} onClick={() => changeType('values that matters')}>Values that matter</p>
                            <div className="d-flex">
                                <div id={listSelected == "objective" ? "hline-2" : "hline-1"}></div>
                                <div className={lang == "ltr" ? "square" : "square_ar"}>
                                    <Flip right cascade>
                                        {listSelected == "values that matters" ?
                                            <div className="m-5">
                                                <p className={lang == "ltr" ? "square_font-size" : "square_font-size_ar"}>We recognize the importance of managing our resources responsibly and minimizing our impact on the environment. We are committed to promoting sustainability both within our organization and in the solutions, we provide to our clients.</p>

                                                <p className={lang == "ltr" ? "square_font-size" : "square_font-size_ar"}>These values reflect our commitment to providing exceptional service, operating with integrity and transparency, working collaboratively, embracing innovation, and promoting sustainability.</p>
                                            </div> :
                                            <div className="m-3">
                                                <p className={lang == "ltr" ? "square_font-size" : "square_font-size_ar"}>Objective description will come here</p>

                                                <p className={lang == "ltr" ? "square_font-size" : "square_font-size_ar"}>These values reflect our commitment to providing exceptional service, operating with integrity and transparency, working collaboratively, embracing innovation, and promoting sustainability.</p>
                                            </div>}
                                    </Flip>
                                </div>
                            </div>
                        </div>
                        <img src={NOSECTION} className="nosection_img" />
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={770}>
                <div className="mb-5">

                    <p className="ourapproach1 ">Our Approach</p>
                    <div className="scrollmenu nav-tabs ">
                        {tabList.map((list) => (
                            <a onClick={() => savingList(list.name)} className={list.status == true && "selectedlist"}>{list.name}</a>
                        ))}
                    </div>
                    <div id="underline"></div>
                    {tabList.map((list) => (<>
                        {list.status == true &&
                            <div style={{
                                background: `url(${list.image})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                width: "100%",
                                height: "200px",
                            }}>
                                <div className={lang == "ltr" ? "square_mobile" : "square_mobile_ar"}>
                                    <div className="m-4">
                                    <p className="ourapproach_matter_mobile">{list.name}</p>
                                    <p className="">{list.text}</p>
                                    </div>
                                </div>
                            </div>}</>
                    ))}
                </div>
            </MediaQuery>
        </div>
    )
}