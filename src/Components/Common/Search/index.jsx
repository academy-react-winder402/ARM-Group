/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

/* redux */
import { useDispatch } from "react-redux";

function Index({ DeleteStatus, SetSearchState }) {
  const [SearchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const CheckCurrRadio = () => {
    document.getElementById("F/[1]").checked = true;
  };

  useEffect(() => {
    setSearchValue("");
  }, [DeleteStatus]);

  useEffect(() => {
    SetSearchState ? dispatch(SetSearchState(SearchValue)) : null;
  }, [SearchValue]);

  return (
    <div className="w-[100%] h-[100%] flex items-center relative pl-3 pr-3">
      <input
        value={SearchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        onClick={CheckCurrRadio}
        type="text"
        placeholder="دنبال چیز خاصی میگردی؟"
        className="bg-transparent w-[90%] text-[13px]"
        style={{ outline: "none" }}
      />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        className="block w-[20px] h-[20px] absolute left-3 "
      >
        <path
          id="search_1_"
          data-name="search (1)"
          d="M19.724,18.547,14.757,13.58a8.336,8.336,0,1,0-1.177,1.177l4.968,4.968a.832.832,0,1,0,1.177-1.177ZM8.317,14.975a6.658,6.658,0,1,1,6.658-6.658,6.658,6.658,0,0,1-6.658,6.658Z"
          transform="translate(0.032 0.032)"
          fill="#78716c"
        />
      </svg>
    </div>
  );
}

export default Index;
