import React from "react";

// import { Svg } from "./Svg";
import ReactComponent from "./MainPath.svg";
import { PathMotion } from "./PathMotion/PathMotion";
import { SvgBackGround } from "./SvgBackGround.jsx";
import { HeroSection } from "./HeroSection/Container.jsx";
import { Product } from "./Product/Container.jsx";
import { Education } from "./Education/Container.jsx";
import { Goals } from "./Goals/Container.jsx";
import { Course } from "./Course/Container.jsx";
import { MainNews } from "./NewsAndArticles/Container.jsx";
import { Statistics } from "./Statistics/Statistics.jsx";
import { MainAdvertising } from "./Advertising/MainAdvertising.jsx";
import ScrolBtn from "./ScrolBtn/ScrolBtn.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

function LandingHandler() {
  window.addEventListener("scroll", () => {
    AOS.refresh();
  });

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <>
      <div className="svgHolder absolute w-[85%] top-0 right-1/2 translate-x-1/2  max-lg:hidden  xl:mt-24 mt-80 mx-auto">
        <PathMotion
          progressObject={[
            { percent: 5, line: 11, flow: 0 },
            { percent: 10, line: 5, flow: 15 },
            { percent: 15, line: 5, flow: 19 },
            { percent: 20, line: 5, flow: 35 },
            { percent: 25, line: 5, flow: 37 },
            { percent: 30, line: 5, flow: 43 },
            { percent: 35, line: 5, flow: 45 },
            { percent: 40, line: 5, flow: 50 },
            { percent: 45, line: 5, flow: 55 },
            { percent: 50, line: 5, flow: 57 },
            { percent: 55, line: 5, flow: 60 },
            { percent: 60, line: 5, flow: 65 },
            { percent: 65, line: 5, flow: 75 },
            { percent: 70, line: 5, flow: 80 },
            { percent: 75, line: 5, flow: 85 },
            { percent: 80, line: 3, flow: 90 },
            { percent: 85, line: 1, flow: 92 },
            { percent: 87, line: 2, flow: 95 },
            { percent: 90, line: 2, flow: 100 },
          ]}
        >
          {ReactComponent}
        </PathMotion>
      </div>
      <div className="cotainer mx-auto mt-[80px]">
        {/* <SvgBackGround /> */}
        <ScrolBtn />
        <HeroSection />
        <Product />
        <Education />
        <Goals />
        <Course />
        <Statistics />
        <MainAdvertising />
        <MainNews />
      </div>
    </>
  );
}

export default LandingHandler;
