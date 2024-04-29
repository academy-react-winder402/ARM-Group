import { Svg } from "./Svg";
import { SvgBackGround } from "./SvgBackGround.jsx";
import { HeroSection } from "./HeroSection//Container.jsx";
import { Product } from "./Product/Container.jsx";
import { Education } from "./Education/Container.jsx";
import { Goals } from "./Goals/Container.jsx";
import { Course } from "./Course/Container.jsx";
import { MainNews } from "./NewsAndArticles/Container.jsx";

function LandingHandler() {
  return (
    <>
      <Svg />
      <SvgBackGround />
      <HeroSection />
      <Product />
      <Education />
      <Goals />
      <Course />
      <MainNews />
    </>
  );
}
``;

export default LandingHandler;
