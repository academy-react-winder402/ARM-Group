import { Link } from "react-router-dom";

function SignUpLink() {
  return (
    <Link
      className="transition duration-[1000] hover:scale-105 text-[14px]"
      to="/SignUp"
    >
      هم اکنون ثبت نام کنید
    </Link>
  );
}

export default SignUpLink;
