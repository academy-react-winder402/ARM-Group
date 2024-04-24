/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";
import { useState } from "react";
import "./ButtStyle.css";
import Sign_1 from "./Sign_Level_1/Container";

export default function simple() {
  const [PhoneNumber, setPhoneNumber] = useState("");

  return (
    <>
      <div className="pb-8 mx-auto mt-[70px] bg-[#FBFBFB] w-[75%] h-auto border border-[#DCDCDC] rounded-[20px]">
        <FormWizard
          color="#009087"
          stepSize="xs"
          startIndex={0}
          /* nextButtonTemplate={nextTemplate} */
        >
          <FormWizard.TabContent icon="ti-user">
            <Sign_1 PhoneNumber={PhoneNumber} setPhoneNumber={setPhoneNumber} />
          </FormWizard.TabContent>

          <FormWizard.TabContent icon="ti-settings">
            <h3>Second Tab</h3>
            <p>Some content for the second tab</p>
          </FormWizard.TabContent>

          <FormWizard.TabContent icon="ti-check">
            <h3>Last Tab</h3>
            <p>Some content for the last tab</p>
          </FormWizard.TabContent>
        </FormWizard>
        {/* add style */}
        <style>{`
        @import url("https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css");
      `}</style>
      </div>
    </>
  );
}
