/* eslint-disable react/prop-types */
import { useState } from "react";

function MainForm() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  return (
    <form action="">
      <div className="mt-[55px] w-[100%] m-auto">
        <h3
          dir="rtl"
          className="text-[#727272] text[17px] text-right indent-[15px]  mb-[10px]"
        >
          ایمیل
        </h3>
        <div className="InputHolder mb-10 bg-[url('./Image/LogIn/profileLogIn.svg')] bg-no-repeat bg-[10px_7px] border w-[100%]">
          <input
            placeholder="ایمیل خود را وارد کنید"
            dir="rtl"
            type="text"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="HideError text-[10px] text-red-700 absolute left-[40px] top-[-30px]  "></span>
        </div>
      </div>

      <div className="mt-[40px] w-[100%] m-auto">
        <h3
          dir="rtl"
          className="text-[#727272] text[17px] text-right indent-[15px]  mb-[10px]"
        >
          رمز عبور
        </h3>
        <div className="InputHolder mb-10 bg-[url('./Image/LogIn/lock.svg')] bg-no-repeat bg-[10px_7px] border w-[100%]">
          <input
            placeholder="رمز عبور خود را وارد کنید"
            dir="rtl"
            type="text"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="HideError text-[10px] text-red-700 absolute left-[40px] top-[-30px]  "></span>
        </div>
      </div>
    </form>
  );
}

export default MainForm;
