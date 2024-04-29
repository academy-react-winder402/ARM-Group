import Svg from "./Svg";
import SvgBackGround from "./SvgBackGround.jsx";
import { HeroSection } from "./HeroSection//Container.jsx";
import { Product } from "./Product/Container.jsx";
import { Education } from "./Section_3/Container.jsx";
import { MainNews } from "./NewsAndArticles/MainNews.jsx";

function LandingHandler() {
  return (
    <>
      <Svg />
      <SvgBackGround />
      <HeroSection />
      <Product />
      <Education />
      <MainNews />
    </>
  );
}

export default LandingHandler;
