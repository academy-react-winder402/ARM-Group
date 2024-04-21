import Button from "@mui/material/Button";

function MainForm() {
  return (
    <form action="">
      <div className="mt-[55px] w-[310px] m-auto">
        <h3
          dir="rtl"
          className="text-[#727272] text[17px]  indent-[15px]  mb-[10px]"
        >
          حساب
        </h3>

        <div className="InputHolder bg-[url('/Image/profileLogIn.svg')] bg-no-repeat bg-[10px_7px] border w-[100%]">
          <input
            placeholder="ایمیل یا شماره تلفن خود را وارد کنید"
            dir="rtl"
            type="text"
          />
        </div>
      </div>

      <div className="mt-[25px]  w-[310px] m-auto">
        <h3
          dir="rtl"
          className="text-[#727272] text[17px]  indent-[15px] mb-[10px]"
        >
          رمز عبور
        </h3>

        <div className="InputHolder bg-[url('/Image/lock.svg')] bg-no-repeat bg-[10px_7px]  w-[100%]">
          <input
            placeholder="رمز عبور خود را وارد کنید"
            dir="rtl"
            type="text"
          />
        </div>
      </div>

      <Button
        className="w-[310px] h-[40px]"
        style={{
          background: "linear-gradient(to right bottom, #0DA39480, #40BE5D)",
          marginTop: "35px",
          marginLeft: "20px",
          fontSize: "16px",
          fontWeight: "bold",
        }}
        variant="contained"
      >
        ورود به حساب
      </Button>
    </form>
  );
}

export default MainForm;
