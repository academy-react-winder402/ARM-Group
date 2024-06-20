import { Box, Slider } from "@mui/material";
import { useEffect, useState } from "react";
import styled from "styled-components";

/* redux */
import { useDispatch, useSelector } from "react-redux";
import { SetPriceFilter } from "../../../../Redux/Slices/CourseFilter";

const PrettoSlider = styled(Slider)({
  "& .MuiSlider-valueLabel": {
    fontSize: 18,
    fontFamily: "IransnsNumber",
  },
});

function PriceFilter() {
  const DeleteAll = useSelector((state) => state.CourseFilter.DeleteAll);
  const [value, setValue] = useState([5000000, 15000000]);
  const dispatch = useDispatch();

  const minDistance = 500000;
  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }

    /* Set With Redux */
    dispatch(SetPriceFilter(value));
  };

  useEffect(() => {
    DeleteAll && setValue([5000000, 15000000]);
  }, [DeleteAll]);

  return (
    <div className="flex justify-center relative">
      <span className="block absolute top-[-2px] right-[0px]">قیمت :</span>

      <Box className="w-[70%] h-[40px] mr-5 mt-[13px] relative">
        <span className="absolute right-0 top-[-27px] text-[12px]">
          حداکثر: ۲۰.۰۰۰.۰۰۰
        </span>
        <span className="absolute left-0 top-[-27px] text-[12px]">
          حداقل: ۲۰۰.۰۰۰
        </span>
        <PrettoSlider
          style={{ color: "#91ACCF", height: "6px", scale: "0.8" }}
          getAriaLabel={() => "Minimum distance"}
          step={500000}
          min={0}
          max={20000000}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          valueLabelFormat={(value) =>
            Intl.NumberFormat({
              maximumSignificantDigits: 3,
            }).format(value) + " تومان "
          }
          disableSwap
        />
      </Box>
    </div>
  );
}

export default PriceFilter;
