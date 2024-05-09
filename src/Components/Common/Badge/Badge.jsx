/* eslint-disable react/prop-types */

function Badge(props) {
  /* const DeletAllHandler = () => {
    toast.success("Delete All");
  }; */

  return (
    <div
      onClick={props.onClick && props.onClick}
      className={
        "cursor-pointer transition-all min-w-fit hover:scale-105 h-[30px] pt-[6px] px-2 rounded-[16px] text-[#FF8E8E] flex gap-4 text-[12px] bg-white " +
        (props.className ? props.className : "") +
        " " +
        (props.Size == "Small" ? "scale-[0.6] hover:scale-[0.65]" : "")
      }
    >
      <span className="leading-[20px]">
        {props.innerHTML && props.innerHTML}
      </span>
      <svg
        className="w-[10px] mt-1 h-fit"
        xmlns="http://www.w3.org/2000/svg"
        width="7.071"
        height="7.071"
        viewBox="0 0 7.071 7.071"
      >
        <g
          id="Group_95"
          data-name="Group 95"
          transform="translate(3.536 -2.121) rotate(45)"
        >
          <line
            id="Line_17"
            data-name="Line 17"
            x2="8"
            transform="translate(0 4)"
            fill="none"
            stroke="#ff8e8e"
            strokeLinecap="round"
            strokeWidth="1"
          />
          <line
            id="Line_18"
            data-name="Line 18"
            y2="8"
            transform="translate(4 0)"
            fill="none"
            stroke="#ff8e8e"
            strokeLinecap="round"
            strokeWidth="1"
          />
        </g>
      </svg>
    </div>
  );
}

export default Badge;
