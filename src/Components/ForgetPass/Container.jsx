import Form from "./Form";
function Container() {
  return (
    <div className="transition-all duration-[1s]  mx-auto mt-[120px] bg-[#FBFBFB] dark:bg-Dark_ContainerBG w-[75%] h-[574px] border border-[#DCDCDC] dark:border-Dark_Border rounded-[20px] flex justify-around">
      <img className="ResponsiveIMG" src="./Image/ForgetPass/Image-8.svg" />
      <Form />
    </div>
  );
}

export default Container;
