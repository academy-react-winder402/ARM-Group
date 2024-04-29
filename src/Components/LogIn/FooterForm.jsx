import SignUpLink from "../Common/SignUpLink";
import ForgetPassLink from "../Common/ForgetPassLink";

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
