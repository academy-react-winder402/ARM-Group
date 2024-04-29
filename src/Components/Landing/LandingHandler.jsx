import { Svg } from "./Svg";
import { SvgBackGround } from "./SvgBackGround.jsx";
import { HeroSection } from "./HeroSection//Container.jsx";
import { Product } from "./Product/Container.jsx";
import { Education } from "./Education/Container.jsx";
import { Goals } from "./Goals/Container.jsx";
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
      <MainNews />
    </>
  );
}
``;

export default LandingHandler;
