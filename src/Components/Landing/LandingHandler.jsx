import { Svg } from "./Svg";
import { SvgBackGround } from "./SvgBackGround.jsx";
import { HeroSection } from "./HeroSection/Container.jsx";
import { Product } from "./Product/Container.jsx";
import { Education } from "./Education/Container.jsx";
import { Goals } from "./Goals/Container.jsx";
import { Course } from "./Course/Container.jsx";
import { MainNews } from "./NewsAndArticles/Container.jsx";
import Statistics from "./Statistics/Statistics.jsx";
import MainAdvertising from "./Advertising/MainAdvertising.jsx";


function LandingHandler() {
  return (
    <div className="cotainer md:w-[1300px] m-auto">
      <Svg />
      <SvgBackGround />
      <HeroSection />
      <Product />
      <Education />
      <Goals />
      <Course />
      <Statistics />
      <MainAdvertising />
      <MainNews />
    </div>
  );
}

export default LandingHandler;
