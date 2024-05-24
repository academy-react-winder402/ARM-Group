/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { SetPhoneNumber } from "../../../Redux/Slices/FormSlice";
import DefualtButton from "../../Common/DefualtButton";
import ReactCodeInput from "react-code-input";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { PhoneValidation } from "../../../Core/Validations/SingUp.validation";
import toast from "react-hot-toast";
import { SendVerifyMessage } from "../../../Core/Services/api/Auth/SignUp";
import PropagateLoader from "react-spinners/PropagateLoader";

/* redux */
import { SetLevel } from "../../../Redux/Slices/SignUpFormSlice";
import { useDispatch } from "react-redux";

function MainForm({ setStep }) {
  const [isLoad, setIsload] = useState(false);
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Code, setCode] = useState();
  const [TrueCode] = useState("12345");
  const [CodeTime] = useState(10);
  const [IsPhoneValid, setIsPhoneValid] = useState(false);
  const [ShowTimer, setShowTimer] = useState(false);
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
        /* Api Fetching */
        SendCodeApi();
      } else {
        ShowPhoneErr("شماره موبایل خود را به درستی وارد کنید *");
      }
    }
  };

  const ShowCodeInput = () => {
    const CodeTitle = document.getElementById("CodeTitle");
    const CodeInput = document.getElementById("CodeInput");
    CodeTitle.classList.remove("invisible", "opacity-0", "h-0");
    CodeInput.classList.remove("invisible", "opacity-0", "h-0");
    CodeInput.classList.add("mb-10");

    HidePhoneErr();

    /* change step image */
    setStep(2);

    /* enable timer */
    setShowTimer(true);
    setTimeout(() => {
      setShowTimer(false);
    }, CodeTime * 1000);

    /* enable submit */
    setIsPhoneValid(true);
  };

  const Submit = () => {
    if (Code == TrueCode) {
      dispatch(SetLevel(2));
      toast.success("کد تایید شد");
    } else {
      toast.error("کد وارد شده اشتباه میباشد");
    }
  };

  const SendCodeApi = async () => {
    let PhoneObj = { phoneNumber: PhoneNumber };

    setIsload(true);
    const Phone = await SendVerifyMessage(PhoneObj);
    setIsload(false);

    //console.log(Phone.success);

    if (Phone.message == "لطفا اندکی دیگر تلاش کنید.") {
      toast.error("لطفا اندکی دیگر تلاش کنید");
    }
    if (Phone.message == "درخواست نامعتبر") {
      toast.error("شماره موبایل از قبل وارد شده");
    }
    if (Phone.message == "لطفا  کد تایید را وارد نمایید") {
      toast.success("کد با موفقیت ارسال شد");
      ShowCodeInput();
    }
  };

  useEffect(() => {
    Errortxt = document.querySelectorAll(".InputHolder > span");
  }, []);

  useEffect(() => {
    dispatch(SetPhoneNumber(PhoneNumber));
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
        <div className="InputHolder overflow-visible mb-10 bg-[url('./Image/SignUp/mobile-notch.svg')] dark:bg-[url('/Image/SignUp/mobile-notch-Dark.svg')] bg-no-repeat bg-[10px_7px] border w-[100%]">
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
          className="text-[#727272] transition-all  indent-[15px]  mb-[10px] invisible opacity-0 h-0"
        >
          کد تایید
        </h3>
        <div
          id="CodeInput"
          className="flex justify-center invisible opacity-0 h-0 transition-all"
        >
          <ReactCodeInput
            type="number"
            value={Code}
            onChange={setCode}
            fields={5}
          />
        </div>

        {ShowTimer ? (
          <div className="relative">
            <DefualtButton innerHTML="دریافت مجدد کد" className="opacity-50" />

            <div className="absolute top-[7px] left-2 text-[10px]">
              <CountdownCircleTimer
                isPlaying
                duration={CodeTime}
                size={28}
                strokeWidth={15}
                strokeLinecap="butt"
                colors={"#45D4B2"}
                trailColor="white"
              ></CountdownCircleTimer>
            </div>
          </div>
        ) : (
          <>
            {isLoad ? (
              <DefualtButton
                Style={{
                  background:
                    "linear-gradient(to right bottom, #0DA39480, #40BE5D)",
                  height: "40px",
                  paddingBottom: "20px",
                  fontSize: "16px",
                  fontFamily: "IranSanse",
                }}
                innerHTML={<PropagateLoader color="white" />}
              />
            ) : (
              <DefualtButton innerHTML="دریافت کد" onClick={SendCodeHandler} />
            )}
          </>
        )}

        {IsPhoneValid ? (
          <div className="mt-2">
            <DefualtButton innerHTML="مرحله بعد" onClick={Submit} />
          </div>
        ) : null}
      </div>
    </form>
  );
}

export default MainForm;
