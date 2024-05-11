import Form from "./Form";

const LogInContainer = () => {
  return (
    <div className="transition-all duration-[1s] mx-auto mt-[120px] bg-[#FBFBFB] dark:bg-Dark_ContainerBG w-[75%] max-w-[1400px] h-[574px] border border-[#DCDCDC] dark:border-Dark_Border rounded-[20px] flex justify-around">
      <img className="ResponsiveIMG" src="./Image/LogIn/Image-7.svg" alt="" />
      <Form />
    </div>
  );
};

export default LogInContainer;
