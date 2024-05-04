/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SetPhoneNumber } from "../../../Redux/Slices/FormSlice";
import DefualtButton from "../../Common/DefualtButton";

import { PhoneValidation } from "../../../Core/Validations/SingUp.validation";
import toast from "react-hot-toast";

function MainForm() {
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Code, setCode] = useState("");
  const dispatch = useDispatch();
  var Errortxt = document.querySelectorAll(".InputHolder > span");

  const ShowPhoneErr = (innerHTML) => {
    Errortxt[0].classList.remove("HideError");
    Errortxt[0].classList.add("ShowError", "scale-down-center");
    Errortxt[0].innerHTML = innerHTML;
    setTimeout(() => {
      Errortxt[0].classList.remove("scale-down-center");
    }, 1000);
  };
  const HidePhoneErr = () => {
    Errortxt[0].classList.add("HideError");
    Errortxt[0].classList.remove("ShowError");
  };

  const SendCodeHandler = () => {
    if (PhoneNumber === "") {
      ShowPhoneErr("شماره موبایل خود را وارد کنید *");
    } else {
      if (PhoneValidation(PhoneNumber)) {
        toast.success("We Sent Code to " + PhoneNumber);

        const CodeTitle = document.getElementById("CodeTitle");
        const CodeInput = document.getElementById("CodeInput");
        CodeTitle.classList.remove("invisible", "opacity-0", "h-0");
        CodeInput.classList.remove("invisible", "opacity-0", "h-0");
        CodeInput.classList.add("mb-9");

        HidePhoneErr();
      } else {
        ShowPhoneErr("شماره موبایل خود را به درستی وارد کنید *");
      }
    }
  };

  useEffect(() => {
    Errortxt = document.querySelectorAll(".InputHolder > span");
  }, []);

  useEffect(() => {
    dispatch(SetPhoneNumber(PhoneNumber));
    console.log(PhoneNumber);
  }, [PhoneNumber]);

  return (
    <form action="">
      <div className="mt-[55px] w-[100%] m-auto ">
        <h3
          dir="rtl"
          className="text-[#727272] text[17px] text-right indent-[15px]  mb-[10px]"
        >
          شماره تلفن
        </h3>
        <div className="InputHolder overflow-visible mb-10 bg-[url('./Image/SignUp/mobile-notch.svg')] bg-no-repeat bg-[10px_7px] border w-[100%]">
          <input
            className="rounded-[50px]"
            placeholder="شماره تلفن خود را وارد کنید"
            dir="rtl"
            type="text"
            value={PhoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <span className="ShowError text-[10px] text-red-700 absolute left-[40px] top-[-30px]  "></span>
        </div>

        <h3
          dir="rtl"
          id="CodeTitle"
          className="text-[#727272] transition-all text-center indent-[15px]  mb-[10px] invisible opacity-0 h-0"
        >
          کد تایید
        </h3>
        <div
          id="CodeInput"
          className=" transition-all InputHolder  m-auto border w-[70%] invisible opacity-0 h-0"
        >
          <input
            className="text-center indent-0 tracking-[10px]"
            style={{ width: "100%" }}
            dir="rtl"
            type="text"
            value={Code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>

        <DefualtButton innerHTML="دریافت کد" onClick={SendCodeHandler} />
      </div>
    </form>
  );
}

export default MainForm;
