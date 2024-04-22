/* eslint-disable react/prop-types */
import Button from "@mui/material/Button";

function DefualtButton({ innerHTML }) {
  return (
    <Button
      className="w-[310px] h-[40px]"
      style={{
        background: "linear-gradient(to right bottom, #0DA39480, #40BE5D)",
        marginTop: "35px",
        marginLeft: "20px",
        fontSize: "16px",
        fontWeight: "bold",
      }}
      variant="contained"
      type="submit"
    >
      {innerHTML}
    </Button>
  );
}

export default DefualtButton;
