import LogInLink from "../common/LogInLink";
import ForgetPassLink from "../common/ForgetPassLink";

function FooterForm() {
  return (
    <div className="flex gap-[20px] mt-[10px] text-[#727272]">
      <LogInLink />
      <div> | </div>
      <ForgetPassLink />
    </div>
  );
}

export default FooterForm;
