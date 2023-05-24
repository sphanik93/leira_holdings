import React from "react";
import { useEffect, useState } from "react";
import dubaitopview from '../assets/top-view-dubai.png'
import logo from '../assets/leira_logo.png.png'
// import brick from '../assets/old-brick.png'
// import spring from '../assets/spring.png'


export function Homepage() {
  const [photo, setPhoto] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      change();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [photo]);

  const change = () => {
    if (photo === 5) {
      setPhoto(1);
      return;
    }

    setPhoto((prev) => prev + 1);
  };

  const returnPhotoURL = () => {
    switch (photo) {
      case 1:
        return dubaitopview;
      // case 2:
      //   return brick;
      // case 3:
      //   return spring;
      // case 4:
      //   return brick;
      default:
        return dubaitopview;
    }
  };

  return (
    //     <div
    //       style={{
    //         // backgroundImage: 'url("../assets/top-view-dubai.png")',
    //         backgroundImage: `url(${returnPhotoURL()})`,
    //         backgroundPosition: "center",
    //         backgroundSize: "cover",
    //         backgroundRepeat: "no-repeat",
    //         width: "100%",
    //         height: "500px",
    //       }}
    //     >
    // {/* <img src={dubaitopview} /> */}
    // <p style={{backgroundImage: url('../assets/top-view-dubai.png')}}></p>
    //       <p>hiii</p>
    //     </div>

    <div
      style={{
        background: `url(${returnPhotoURL()})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "500px",
      }}
    ></div>
  );
}