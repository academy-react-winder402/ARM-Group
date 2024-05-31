import { Box, Slider } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

const PrettoSlider = styled(Slider)({
  "& .MuiSlider-valueLabel": {
    fontSize: 22,
  },
});

function PriceFilter() {
  const [value, setValue] = useState([30, 70]);

  const valuetext = (value) => {
    return `${value}°C`;
  };

  const minDistance = 20;
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
        <span className="absolute right-0 top-[-27px] text-[9px]">
          حداکثر: ۴.۰۰۰.۰۰۰
        </span>
        <span className="absolute left-0 top-[-27px] text-[9px]">
          حداقل: ۲۰۰.۰۰۰
        </span>
        <PrettoSlider
          style={{ color: "#91ACCF", height: "6px", scale: "0.8" }}
          getAriaLabel={() => "Minimum distance"}
          step={200000}
          min={100000}
          max={3000000}
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
