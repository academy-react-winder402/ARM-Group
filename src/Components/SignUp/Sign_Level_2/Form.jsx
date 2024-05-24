/* eslint-disable react/prop-types */
import TopForm from "./TopForm";
import MainForm from "./MainForm";
import FooterForm from "./FooterForm";

function Form() {
  return (
    <div className="w-[350px] h-auto relative">
      <img
        src={"./public/Image/SignUp/Level3.svg"}
        className=" max-h-[240px] mt-[100px] absolute right-[-40px] "
      />
      <TopForm />
      <MainForm />
      <FooterForm />
    </div>
  );
}

export default Form;
