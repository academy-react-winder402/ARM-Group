import { useEffect, useState } from "react";
import DefualtButton from "../Common/DefualtButton";
import { PhoneValidation } from "../../Core/Validations/SingUp.validation";
import {
  EmailValidation,
  PasswordValidation,
} from "../../Core/Validations/login.validation";

function MainForm() {
  const [EmailPhone, setEmailPhone] = useState("");
  const [Password, setPassword] = useState("");
  var Errortxt = document.querySelectorAll(".InputHolder > span");

  const ShowError = (innerHTML, i) => {
    if (i === 3) {
      for (let x = 0; x < 2; x++) {
        Errortxt[x].classList.remove("HideError");
        Errortxt[x].classList.add("ShowError", "scale-down-center");
        Errortxt[x].innerHTML = innerHTML;
        setTimeout(() => {
          Errortxt[x].classList.remove("scale-down-center");
        }, 1000);
      }
    } else {
      Errortxt[i].classList.remove("HideError");
      Errortxt[i].classList.add("ShowError", "scale-down-center");
      Errortxt[i].innerHTML = innerHTML;
      setTimeout(() => {
        Errortxt[i].classList.remove("scale-down-center");
      }, 1000);
    }
  };

  const SendCodeHandler = () => {
    if (EmailPhone === "" || Password === "") {
      if (EmailPhone === "") {
        ShowError("شماره موبایل یا ایمیل خود را وارد کنید *", 0);
      }
      if (Password === "") {
        ShowError("رمز عبور خود را وارد کنید *", 1);
      }
    } else {
      if (
        (EmailValidation(EmailPhone) || PhoneValidation(EmailPhone)) &&
        PasswordValidation(Password)
      ) {
        console.log("every things is ok");
      } else {
        ShowError("اطلاعات حساب به درستی وارد نشده است", 3);
      }
    }
  };

  useEffect(() => {
    Errortxt = document.querySelectorAll(".InputHolder > span");
  }, []);

  return (
    <form action="">
      <div className="mt-[55px] w-[100%] m-auto">
        <h3
          dir="rtl"
          className="text-[#727272] dark:text-Dark_TextColor_1 text[17px]  indent-[15px]  mb-[10px]"
        >
          حساب
        </h3>

        <div className="InputHolder overflow-visible bg-[url('./Image/LogIn/profileLogIn.svg')] dark:bg-[url('./Image/LogIn/profileLogIn-Dark.svg')] bg-no-repeat bg-[10px_8px] border w-[100%]">
          <input
            placeholder="ایمیل یا شماره تلفن خود را وارد کنید"
            dir="rtl"
            type="text"
            onChange={(e) => {
              setEmailPhone(e.target.value);
            }}
          />
          <span className="ShowError text-[10px] text-red-700 absolute mr-[100px] mt-[-35px]"></span>
        </div>
      </div>

      <div className="mt-[25px]  w-[100%] m-auto mb-[50px]">
        <h3
          dir="rtl"
          className="text-[#727272] dark:text-Dark_TextColor_1 text[17px]  indent-[15px] mb-[10px]"
        >
          رمز عبور
        </h3>

        <div className="InputHolder overflow-visible bg-[url('/Image/LogIn/lock.svg')] dark:bg-[url('/Image/LogIn/lock-Dark.svg')] bg-no-repeat bg-[10px_7px]  w-[100%]">
          <input
            placeholder="رمز عبور خود را وارد کنید"
            dir="rtl"
            type="text"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <span className="ShowError text-[10px] text-red-700 absolute mr-[100px] mt-[-35px]"></span>
        </div>
      </div>

      <DefualtButton innerHTML="ورود به حساب" onClick={SendCodeHandler} />
    </form>
  );
}

export default MainForm;
