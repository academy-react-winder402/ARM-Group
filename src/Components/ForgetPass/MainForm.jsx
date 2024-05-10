import { useState, useEffect } from "react";
import DefualtButton from "../Common/DefualtButton";
import { PhoneValidation } from "../../Core/Validations/SingUp.validation";
import { EmailValidation } from "../../Core/Validations/login.validation";

function MainForm() {
  const [EmailPhone, setEmailPhone] = useState(""); 
  var Errortxt = document.querySelectorAll(".InputHolder > span");

  const ShowError = (innerHTML) =>{
    Errortxt[0].classList.remove("HideError");
    Errortxt[0].classList.add("ShowError", "scale-down-center");
    Errortxt[0].innerHTML = innerHTML;
    setTimeout(() => {
      Errortxt[0].classList.remove("scale-down-center");
    }, 1000);
  }
  const SendCodeHandler = () =>{
    if (EmailPhone == ""){
      ShowError("شماره موبایل یا ایمیل خود را وارد کنید *");
    }

    else{
      if(PhoneValidation(EmailPhone) || EmailValidation(EmailPhone)){
        console.log("every things is ok");
      }

      else{
        ShowError("اطلاعات حساب به درستی وارد نشده است")
      }
    }
  }

  useEffect(() => {
    Errortxt = document.querySelectorAll(".InputHolder > span");
  }, []);
  return (
    <form action="">
      <div className="mt-[55px] w-[100%] m-auto  mb-[50px]">
        <h3
          dir="rtl"
          className="text-[#727272] text[17px]  indent-[15px]  mb-[10px]"
        >
          حساب
        </h3>

        <div className="InputHolder overflow-visible bg-[url('./Image/LogIn/profileLogIn.svg')] dark:bg-[url('./Image/LogIn/profileLogIn-Dark.svg')] bg-no-repeat bg-[10px_7px] border w-[100%]">
          <input
            placeholder="ایمیل یا شماره تلفن خود را وارد کنید"
            dir="rtl"
            type="text"
            onChange={(e) => {setEmailPhone(e.target.value)}}
          />
          <span className="ShowError text-[10px] text-red-700 absolute mr-[100px] mt-[-30px]"></span>
        </div>
      </div>

      <DefualtButton innerHTML="ارسال لینک بازیابی" onClick={SendCodeHandler}/>
    </form>
  );
}

export default MainForm;
