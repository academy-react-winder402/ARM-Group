/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";
import { useEffect, useState } from "react";

import Sign_1 from "./Sign_Level_1/Container";
import Sign_2 from "./Sign_Level_2/Container";
import Sign_3 from "./Sign_Level_3/Container";

import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import toast from "react-hot-toast";

export default function simple() {
  const checkValidateTab = () => {
    return true;
  };
  const errorMessages = () => {
    toast.error("لطفا فیلد های این مرحله را به درستی وارد کنید", {
      style: { direction: "rtl", marginTop: "42px" },
    });
  };

  const nextTemplate = (GoNext) => {
    return (
      <Button
        className="FormWizardButton"
        style={{
          background: "linear-gradient(to right bottom, #0DA39480, #40BE5D)",
          fontSize: "14px",
          fontWeight: "bold",
          /* position: "absolute",
          right: "7%", */
        }}
        variant="contained"
        onClick={GoNext}
      >
        مرحله بعد
      </Button>
    );
  };
  const backTemplate = (GoBack) => {
    return (
      <Button
        className="FormWizardButton"
        style={{
          background: "linear-gradient(to right bottom, #0DA39480, #40BE5D)",
          fontSize: "14px",
          fontWeight: "bold",
          /* position: "absolute",
          left: "7%", */
        }}
        variant="contained"
        onClick={GoBack}
      >
        مرحله قبل
      </Button>
    );
  };
  const finishTemplate = (Finish) => {
    return (
      <Button
        className="FormWizardButton w-[300px]"
        style={{
          background: "linear-gradient(to right bottom, #0DA39480, #40BE5D)",
          fontSize: "14px",
          fontWeight: "bold",
          width: "200px",
          /* position: "absolute",
          left: "7%", */
        }}
        variant="contained"
        onClick={Finish}
      >
        تکمیل ثبت نام
      </Button>
    );
  };

  const handleComplete = () => {
    toast.success("ثبت نام شما با موفقیت انجام شد", {
      style: { direction: "rtl", marginTop: "42px" },
    });
  };

  return (
    <>
      <div className="w-full h-full">
        <div className="relative pb-10 mx-auto  mt-[40px] bg-[#FBFBFB] w-[75%] h-fit border border-[#DCDCDC] rounded-[20px]">
          <FormWizard
            color="#009087"
            stepSize="xs"
            startIndex={0}
            nextButtonTemplate={nextTemplate}
            backButtonTemplate={backTemplate}
            finishButtonTemplate={finishTemplate}
            onComplete={handleComplete}
          >
            <FormWizard.TabContent icon="ti-user">
              <Sign_1 />
            </FormWizard.TabContent>

            <FormWizard.TabContent
              icon="ti-settings"
              isValid={checkValidateTab()}
              validationError={errorMessages}
            >
              <Sign_2 />
            </FormWizard.TabContent>

            <FormWizard.TabContent icon="ti-check">
              <Sign_3 />
            </FormWizard.TabContent>
          </FormWizard>
          {/* add style */}
          <style>{`
        @import url("https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css");

        .wizard-card-footer{
          display: flex;
          justify-content: end;
          gap:30px;
          margin-right: 120px;
        }

        .FormWizardButton {
          width: 100px;
          height: 40px;          
        }

      `}</style>
        </div>
      </div>
    </>
  );
}
