import TopForm from "./TopForm";
import MainForm from "./MainForm";
import FooterForm from "./FooterForm";

function Form() {
  return (
    <div className="w-[350px] h-[400px] mt-[75px]">
      <TopForm />
      <MainForm />
      <FooterForm />
    </div>
  );
}

export default Form;
