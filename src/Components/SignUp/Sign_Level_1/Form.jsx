/* eslint-disable react/prop-types */
import TopForm from "./TopForm";
import MainForm from "./MainForm";
import FooterForm from "./FooterForm";

function Form() {
  return (
    <div className="w-[350px] h-auto">
      <TopForm />
      <MainForm />
      <FooterForm />
    </div>
  );
}

export default Form;
