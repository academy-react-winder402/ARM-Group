import { useEffect } from "react";

/* redux */
import { useDispatch, useSelector } from "react-redux";

/* eslint-disable react/prop-types */
function Index({ TotalCount, PerPageCount, SetPageNumber, PageNumberState }) {
  const dispatch = useDispatch();
  const row = [];
  for (let i = 1; i <= Math.ceil(TotalCount / PerPageCount); i++) {
    row.push({ id: i });
  }

  const ClickHandler = (e) => {
    const items = document.getElementsByClassName("PaginationItems");
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove("SelectedItem");
    }
    e.classList.add("SelectedItem");

    dispatch(SetPageNumber(e.id));
  };

  useEffect(() => {
    /* For Show Landing On Page 1 */
    const items = document.getElementsByClassName("PaginationItems");
    items[0].classList.add("SelectedItem");
  }, []);

  useEffect(() => {
    console.log(PageNumberState + " Selected");
    const items = document.getElementsByClassName("PaginationItems");
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove("SelectedItem");
    }
    items[PageNumberState - 1].classList.add("SelectedItem");
  }, [PageNumberState]);

  return (
    <div className="w-fit h-f flex gap-2 m-auto flex-row-reverse mt-[100px]">
      {row.map((item, key) => (
        <div
          key={key}
          id={item.id}
          onClick={(e) => ClickHandler(e.target)}
          className=" PaginationItems w-[40px] hover:scale-[1.1] transition-all bg-white h-[40px] text-center leading-[40px] cursor-pointer rounded-[8px] text-[19px] text-[#565656]"
        >
          {item.id}
        </div>
      ))}

      <style>{`
            .SelectedItem{
              color:white;
              background-color : #91ACCF;
            }
          `}</style>
    </div>
  );
}

export default Index;
