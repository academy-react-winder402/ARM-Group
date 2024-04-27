import Svg from "./Svg";
import SvgBackGround from "./SvgBackGround.jsx";
import { Section_1 } from "./Section_1/Container.jsx";
import { Section_2 } from "./Section_2/Container.jsx";
import { Section_3 } from "./Section_3/Container.jsx";

function LandingHandler() {
  return (
    <>
      <Svg />
      <SvgBackGround />
      <Section_1 />
      <Section_2 />
      <Section_3 />
    </>
  );
}

export default LandingHandler;
