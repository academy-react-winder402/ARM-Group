/* eslint-disable react/prop-types */
import Button from "@mui/material/Button";

function DefualtButton({ innerHTML, onClick, Style, sumbit }) {
  const Defualt_Style = {
    background: "linear-gradient(to right bottom, #0DA39480, #40BE5D)",
    fontSize: "16px",
    fontFamily: "IranSanse",
  };

  return (
    <Button
      className="w-[100%] hover:scale-[1.01] transition-all"
      style={Style ? Style : Defualt_Style}
      variant="contained"
      type={sumbit ? "submit" : "button"}
      onClick={() => (onClick ? onClick() : null)}
    >
      {innerHTML}
    </Button>
  );
}

export default DefualtButton;
