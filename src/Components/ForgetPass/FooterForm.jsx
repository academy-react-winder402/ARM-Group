import LogInLink from "../Common/LogInLink";
import SignUpLink from "../Common/SignUpLink";

function FooterForm() {
  return (
    <div className="flex justify-center gap-[20px] mt-[10px] text-[#727272]">
      <SignUpLink />
      <div> | </div>
      <LogInLink />
    </div>
  );
}

export default FooterForm;
