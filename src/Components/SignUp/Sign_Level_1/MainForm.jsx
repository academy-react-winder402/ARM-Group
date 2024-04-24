/* eslint-disable react/prop-types */
import DefualtButton from "../../common/DefualtButton";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetPhoneNumber } from "../FormSlice";

function MainForm() {
  const [PhoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch();
  const Form = useSelector((state) => state.Form);

  useEffect(() => {
    dispatch(SetPhoneNumber(PhoneNumber));
    console.log(PhoneNumber);
  }, [PhoneNumber]);

  const GetCodeButt = () => {
    alert("we sent you a code to: " + Form.PhoneNumber);
    console.log(Form);
  };

  return (
    <form action="">
      <div className="mt-[55px] w-[100%] m-auto mb-[80px]">
        <h3
          dir="rtl"
          className="text-[#727272] text[17px] text-right indent-[15px]  mb-[10px]"
        >
          شماره تلفن
        </h3>

        <div className="InputHolder bg-[url('./Image/LogIn/profileLogIn.svg')] bg-no-repeat bg-[10px_7px] border w-[100%]">
          <input
            placeholder="شماره تلفن خود را وارد کنید"
            dir="rtl"
            type="text"
            value={PhoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
      </div>

      <DefualtButton innerHTML="مرحله بعد" onClick={GetCodeButt} />
    </form>
  );
}

export default MainForm;
