/* eslint-disable react/prop-types */
import Button from "@mui/material/Button";

function DefualtButton({ innerHTML, onClick }) {
  return (
    <Button
      className="w-[100%] h-[40px]"
      style={{
        background: "linear-gradient(to right bottom, #0DA39480, #40BE5D)",
        fontSize: "16px",
        fontWeight: "bold",
      }}
      variant="contained"
      onClick={() => (onClick ? onClick() : null)}
    >
      {innerHTML}
    </Button>
  );
}

export default DefualtButton;
