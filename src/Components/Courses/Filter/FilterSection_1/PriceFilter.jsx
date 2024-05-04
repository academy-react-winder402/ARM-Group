import { Box, Slider } from "@mui/material";

import * as React from "react";

function PriceFilter() {
  const [value, setValue] = React.useState([20, 37]);
  const valuetext = (value) => {
    return `${value}°C`;
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="w-[400px] h-[10px] border border-red-800">
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
}

export default PriceFilter;
