/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import TextField from "@mui/material/TextField";

import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "#E0E3E7",
            "--TextField-brandBorderHoverColor": "#B2BAC2",
            "--TextField-brandBorderFocusedColor": "rgb(0, 144, 135)",
            "& label.Mui-focused": {
              color: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },

      MuiFilledInput: {
        styleOverrides: {
          root: {
            "&::before, &::after": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
            ".": {
              backgroundColor: "white",
            },
          },
        },
      },
    },
  });

function BirthInputs({
  BirthDay,
  BirthMonth,
  BirthYear,
  setBirthDay,
  setBirthMonth,
  setBirthYear,
}) {
  const outerTheme = useTheme();

  return (
    <ThemeProvider theme={customTheme(outerTheme)}>
      <TextField
        label="روز"
        variant="filled"
        value={BirthDay}
        onChange={(e) => {
          setBirthDay(e.target.value);
        }}
      />
      <TextField
        label="ماه"
        variant="filled"
        value={BirthMonth}
        onChange={(e) => {
          setBirthMonth(e.target.value);
        }}
      />
      <TextField
        label="سال"
        variant="filled"
        value={BirthYear}
        onChange={(e) => {
          setBirthYear(e.target.value);
        }}
      />
    </ThemeProvider>
  );
}

export default BirthInputs;
