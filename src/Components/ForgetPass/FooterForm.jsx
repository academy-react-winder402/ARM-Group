import LogInLink from "../common/LogInLink";
import SignUpLink from "../common/SignUpLink";

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
