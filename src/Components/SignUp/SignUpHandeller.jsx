import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";
import Sign_1 from "./Sign_Level_1/Container";

export default function simple() {
  const handleComplete = () => {
    console.log("Form completed!");
    // Handle form completion logic here
  };

  const tabChanged = ({ prevIndex, nextIndex }) => {
    console.log("prevIndex", prevIndex);
    console.log("nextIndex", nextIndex);
  };

  const ClickHandler = () => {};

  return (
    <>
      <div className="mx-auto mt-[30px] bg-[#FBFBFB] w-[75%] h-[700px] border border-[#DCDCDC] rounded-[20px]">
        <FormWizard
          color="green"
          stepSize="xs"
          onComplete={handleComplete}
          onTabChange={tabChanged}
          startIndex={0}
        >
          <FormWizard.TabContent icon="ti-user">
            <Sign_1 />
          </FormWizard.TabContent>

          <FormWizard.TabContent icon="ti-settings">
            <h3>Second Tab</h3>
            <p>Some content for the second tab</p>
          </FormWizard.TabContent>

          <FormWizard.TabContent icon="ti-check">
            <h3>Last Tab</h3>
            <p>Some content for the last tab</p>
          </FormWizard.TabContent>
        </FormWizard>
        {/* add style */}
        <style>{`
        @import url("https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css");
      `}</style>
      </div>
    </>
  );
}
