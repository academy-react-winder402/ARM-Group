import { Link } from "react-router-dom";

function LogInLink() {
  return (
    <Link
      className="transition duration-[1000] hover:scale-105 text-[14px]"
      to="/login"
    >
      ورود به حساب کاربری
    </Link>
  );
}

export default LogInLink;
