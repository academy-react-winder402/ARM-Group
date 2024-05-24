/* eslint-disable react/prop-types */
import TopForm from "./TopForm";
import MainForm from "./MainForm";
import FooterForm from "./FooterForm";
import { useState } from "react";

function Form() {
  const [Step, setStep] = useState(1);
  return (
    <div className="w-[350px] relative h-auto" dir="ltr">
      <img
        src={"./public/Image/SignUp/Level" + Step + ".svg"}
        className=" max-h-[240px] mt-10 absolute right-[-40px] "
      />

      <TopForm />
      <MainForm setStep={setStep} />
      <FooterForm />
    </div>
  );
}

export default Form;
