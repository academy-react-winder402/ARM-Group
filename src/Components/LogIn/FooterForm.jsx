import SignUpLink from "../common/SignUpLink";
import ForgetPassLink from "../common/ForgetPassLink";

function FooterForm() {
  return (
    <div className="flex justify-center gap-[20px] mt-[10px] text-[#727272]">
      <SignUpLink />
      <div> | </div>
      <ForgetPassLink />
    </div>
  );
}

export default FooterForm;
