import DefualtButton from "../../common/DefualtButton";

function MainForm() {
  return (
    <form action="">
      <div className="mt-[55px] w-[310px] m-auto mb-[20px]">
        <h3
          dir="rtl"
          className="text-[#727272] text[17px]  indent-[15px]  mb-[10px]"
        >
          شماره تلفن
        </h3>

        <div className="InputHolder bg-[url('./Image/LogIn/profileLogIn.svg')] bg-no-repeat bg-[10px_7px] border w-[100%]">
          <input
            placeholder="شماره تلفن خود را وارد کنید"
            dir="rtl"
            type="text"
          />
        </div>
      </div>

      <DefualtButton innerHTML="دریافت کد تایید" />
    </form>
  );
}

export default MainForm;
