import LogInIMG from "./LogInIMG";
import LogInForm from "./LogInForm";

const LogInContainer = () => {
  return (
    <div className="mx-auto mt-16 bg-[#FBFBFB] w-[75%] h-[574px] border border-[#DCDCDC] rounded-[20px] flex justify-around">
      <LogInIMG />
      <LogInForm />
    </div>
  );
};

export default LogInContainer;
