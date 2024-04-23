import { Box, Slider } from "@mui/material";
import * as React from "react";

function valuetext(value) {
  return `${value}°C`;
}

export function FilterCourse() {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="mt-5 pl-4 pb-2 rounded-lg shadow-3xl flex flex-row-reverse gap-4 h-[60px]">
      <Box className="max-md:w-[300px] w-[400px] h-[30px] mt-[16px]">
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
      </Box>
    </div>
  );
}
