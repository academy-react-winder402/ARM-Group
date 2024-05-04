import { Slider } from "@mui/material";

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
    <div className="flex">
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
      PriceFilter
    </div>
  );
}

export default PriceFilter;
