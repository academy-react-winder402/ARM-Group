/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */

import "react-form-wizard-component/dist/style.css";
import { useSelector } from "react-redux";

import Sign_1 from "./Sign_Level_1/Container";
import Sign_2 from "./Sign_Level_2/Container";

export default function simple() {
  const CurrLevel = useSelector((state) => state.SignUpForm.Step);

  return (
    <>
      <div className="w-full h-full mt-[100px]">
        <div className="relative pb-[120px] pr-5 pt-[120px] mx-auto dark:border-Dark_Border dark:bg-Dark_ContainerBG  mt-[40px] bg-[#FBFBFB] w-[75%] h-fit border border-[#DCDCDC] rounded-[20px]">
          {CurrLevel == 1 && <Sign_1 />}
          {CurrLevel == 2 && <Sign_2 />}
        </div>
      </div>
    </>
  );
}
