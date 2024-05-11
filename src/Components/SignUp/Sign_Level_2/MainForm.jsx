/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SetNameAndFamily } from "../../../Redux/Slices/FormSlice";

import BirthInputs from "./BirthInputs";

function MainForm() {
  const [Family, setFamily] = useState("");
  const [Name, setName] = useState("");
  /*   const [BirthDay, setBirthDay] = useState("");
  const [BirthMonth, setBirthMonth] = useState("");
  const [BirthYear, setBirthYear] = useState(""); */
  /* const Errortxt = document.querySelectorAll(".InputHolder > span");
  const dispatch = useDispatch(); */

  /* useEffect(() => {
    dispatch(SetNameAndFamily(NameAndFamily));
    console.log(NameAndFamily);
  }, [NameAndFamily]); */

  /* useEffect(() => {
    console.log(BirthDay);
  }, [BirthDay]); */

  return (
    <form action="">
      <div className="mt-[55px] w-[100%] m-auto">
        <h3
          dir="rtl"
          className="text-[#727272] text[17px] text-right indent-[15px]  mb-[10px]"
        >
          نام
        </h3>
        <div className="InputHolder mb-10 bg-[url('./Image/LogIn/profileLogIn.svg')] dark:bg-[url('./Image/LogIn/profileLogIn-Dark.svg')] bg-no-repeat bg-[10px_7px] border w-[100%]">
          <input
            placeholder="نام و نام خانوادگی خود را وارد کنید"
            dir="rtl"
            type="text"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
          <span className="HideError text-[10px] text-red-700 absolute left-[40px] top-[-30px]  "></span>
        </div>
      </div>

      <div className="mt-[55px] w-[100%] m-auto">
        <h3
          dir="rtl"
          className="text-[#727272] text[17px] text-right indent-[15px]  mb-[10px]"
        >
          نام خانوادگی
        </h3>
        <div className="InputHolder mb-10 bg-[url('./Image/LogIn/profileLogIn.svg')] dark:bg-[url('./Image/LogIn/profileLogIn-Dark.svg')] bg-no-repeat bg-[10px_7px] border w-[100%]">
          <input
            placeholder="  نام خانوادگی خود را وارد کنید"
            dir="rtl"
            type="text"
            value={Family}
            onChange={(e) => setFamily(e.target.value)}
          />
          <span className="HideError text-[10px] text-red-700 absolute left-[40px] top-[-30px]  "></span>
        </div>
      </div>
    </form>
  );
}

export default MainForm;
