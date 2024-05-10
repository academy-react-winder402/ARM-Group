import { Box, Slider } from "@mui/material";
import { useState } from "react";

function PriceFilter() {
  const [value, setValue] = useState([30, 70]);

  const valuetext = (value) => {
    return `${value}°C`;
  };

  const minDistance = 10;
  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  };

  return (
    <div className="flex justify-center relative">
      <span className="block absolute top-[-2px] right-3">قیمت :</span>

      <Box className="w-[70%] h-[40px] mr-5 mt-[13px] relative">
        <span className="absolute right-0 top-[-30px] text-[9px]">
          حداکثر: ۴.۰۰۰.۰۰۰
        </span>
        <span className="absolute left-0 top-[-30px] text-[9px]">
          حداقل: ۲۰۰.۰۰۰
        </span>
        <Slider
          style={{ color: "#91ACCF", height: "6px", scale: "0.8" }}
          getAriaLabel={() => "Minimum distance"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          disableSwap
        />
      </Box>
    </div>
  );
}

export default PriceFilter;
