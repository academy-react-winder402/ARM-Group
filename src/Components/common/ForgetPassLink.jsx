import { Link } from "react-router-dom";

function ForgetPassLink() {
  return (
    <Link
      className="transition duration-[1000] hover:scale-105 text-[14px]"
      to="/ForgetPass"
    >
      فراموشی رمز عبور
    </Link>
  );
}

export default ForgetPassLink;
