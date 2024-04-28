/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";
import { useEffect, useState } from "react";
import "./ButtStyle.css";
import Sign_1 from "./Sign_Level_1/Container";
import Sign_2 from "./Sign_Level_2/Container";
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
        className="w-[100px] h-[40px]"
        style={{
          background: "linear-gradient(to right bottom, #0DA39480, #40BE5D)",
          fontSize: "16px",
          fontWeight: "bold",
          position: "absolute",
          right: "9%",
          bottom: "12%",
        }}
        variant="contained"
        onClick={GoNext}
      >
        مرحله بعد
      </Button>
    );
  };
  const backTemplate = (e) => {
    return (
      <Button
        className="w-[100px] h-[40px]"
        style={{
          background: "linear-gradient(to right bottom, #0DA39480, #40BE5D)",
          fontSize: "16px",
          fontWeight: "bold",
          position: "absolute",
          left: "10%",
          bottom: "5%",
        }}
        variant="contained"
        onClick={e}
      >
        مرحله قبل
      </Button>
    );
  };

  return (
    <>
      <div className="relative pb-24 mx-auto mt-[70px] bg-[#FBFBFB] w-[75%] h-auto border border-[#DCDCDC] rounded-[20px]">
        <FormWizard
          color="#009087"
          stepSize="xs"
          startIndex={0}
          nextButtonTemplate={nextTemplate}
          backButtonTemplate={backTemplate}
        >
          <FormWizard.TabContent icon="ti-user">
            <Sign_1 />
          </FormWizard.TabContent>

          <FormWizard.TabContent
            icon="ti-settings"
            isValid={checkValidateTab()}
            validationError={errorMessages}
          >
            <h3>Second Tab</h3>
          </FormWizard.TabContent>

          <FormWizard.TabContent icon="ti-check">
            <h3>Last Tab</h3>
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
