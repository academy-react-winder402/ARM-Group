import TopForm from "./TopForm";
import MainForm from "./MainForm";
import FooterForm from "./FooterForm";

function Form() {
  return (
    <div className="min-w-[350px] h-[400px] mt-[130px]">
      <TopForm />
      <MainForm />
      <FooterForm />
    </div>
  );
}

export default Form;
