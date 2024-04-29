/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SetNameAndFamily } from "../../../Redux/Slices/FormSlice";

import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function MainForm() {
  const [NameAndFamily, setNameAndFamily] = useState("");
  const Errortxt = document.querySelectorAll(".InputHolder > span");
  const dispatch = useDispatch();

  const ShowPhoneErr = (innerHTML) => {
    Errortxt[0].classList.remove("HideError");
    Errortxt[0].classList.add("ShowError");
    Errortxt[0].classList.add("scale-down-center");
    Errortxt[0].innerHTML = innerHTML;
    setTimeout(() => {
      Errortxt[0].classList.remove("scale-down-center");
    }, 1000);
  };
  const HidePhoneErr = () => {
    Errortxt[0].classList.add("HideError");
    Errortxt[0].classList.remove("ShowError");
  };

  useEffect(() => {
    dispatch(SetNameAndFamily(NameAndFamily));
    console.log(NameAndFamily);
  }, [NameAndFamily]);

  useEffect(() => {
    const Calender = document.getElementsByClassName("MuiButtonBase-root");
    Calender[0].style.display = "none";
    Calender[1].style.display = "none";
    Calender[2].style.display = "none";
  }, []);

  return (
    <form action="">
      <div className="mt-[55px] w-[100%] m-auto">
        <h3
          dir="rtl"
          className="text-[#727272] text[17px] text-right indent-[15px]  mb-[10px]"
        >
          نام و نام خانوادگی
        </h3>
        <div className="InputHolder mb-10 bg-[url('./Image/LogIn/profileLogIn.svg')] bg-no-repeat bg-[10px_7px] border w-[100%]">
          <input
            placeholder="نام و نام خانوادگی خود را وارد کنید"
            dir="rtl"
            type="text"
            value={NameAndFamily}
            onChange={(e) => setNameAndFamily(e.target.value)}
          />
          <span className="HideError text-[10px] text-red-700 absolute left-[40px] top-[-30px]  "></span>
        </div>

        <h3
          dir="rtl"
          className="text-[#727272] text[17px] text-right indent-[15px]  mb-[10px]"
        >
          تاریخ تولد
        </h3>
        <div className=" w-[100%] h-[50px]">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label={"روز"}
              views={["day"]}
              className="w-[55px] border-[3px]"
            />
            <DatePicker
              label={"روز"}
              views={["day"]}
              className="w-[55px] border-[3px]"
            />
            <DatePicker
              label={"روز"}
              views={["day"]}
              className="w-[55px] border-[3px]"
            />
          </LocalizationProvider>
        </div>
      </div>
    </form>
  );
}

export default MainForm;
