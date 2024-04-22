import IMG from "./IMG";
import Form from "./Form";
function container() {
  return (
    <div className="mx-auto mt-16 bg-[#FBFBFB] w-[75%] h-[574px] border border-[#DCDCDC] rounded-[20px] flex justify-around">
      <IMG />
      <Form />
    </div>
  );
}

export default container;
