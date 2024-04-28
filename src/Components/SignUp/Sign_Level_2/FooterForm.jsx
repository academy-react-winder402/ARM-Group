import LogInLink from "../../common/LogInLink";

function FooterForm() {
  return (
    <div className="flex justify-center gap-[20px] mt-[10px] text-[#727272]">
      <LogInLink />
      <span>عضو سایت هستید؟</span>
    </div>
  );
}

export default FooterForm;
