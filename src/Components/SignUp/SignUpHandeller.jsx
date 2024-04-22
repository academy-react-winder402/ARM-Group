import { useState } from "react";
import Container_Level_1 from "./Sign_Level_1/Container";
import Container_Level_2 from "./Sign_Level_2/Container";
import Container_Level_3 from "./Sign_Level_3/Container";

function SignUp() {
  const [Level] = useState(1);

  return (
    <>
      {Level === 1 ? <Container_Level_1 /> : null}
      {Level === 2 ? <Container_Level_2 /> : null}
      {Level === 3 ? <Container_Level_3 /> : null}
    </>
  );
}

export default SignUp;
