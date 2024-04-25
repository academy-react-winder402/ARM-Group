/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SetPhoneNumber } from "../FormSlice";
import DefualtButton from "../../common/DefualtButton";
//import toast from "react-hot-toast";

function MainForm() {
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Code, setCode] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SetPhoneNumber(PhoneNumber));
    console.log(PhoneNumber);
  }, [PhoneNumber]);

  const SendCodeHandler = () => {
    //toast(PhoneNumber);
    const CodeTitle = document.getElementById("CodeTitle");
    const CodeInput = document.getElementById("CodeInput");

    CodeTitle.classList.remove("invisible", "opacity-0", "h-0");
    CodeInput.classList.remove("invisible", "opacity-0", "h-0");
  };

  return (
    <form action="">
      <div className="mt-[55px] w-[100%] m-auto">
        <h3
          dir="rtl"
          className="text-[#727272] text[17px] text-right indent-[15px]  mb-[10px]"
        >
          شماره تلفن
        </h3>
        <div className="InputHolder mb-10 bg-[url('./Image/LogIn/profileLogIn.svg')] bg-no-repeat bg-[10px_7px] border w-[100%]">
          <input
            placeholder="شماره تلفن خود را وارد کنید"
            dir="rtl"
            type="text"
            value={PhoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
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
          className=" transition-all InputHolder mb-10 m-auto border w-[70%] invisible opacity-0 h-0"
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
