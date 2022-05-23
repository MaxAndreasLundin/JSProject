import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

function BasicTimePicker({ onSelectTime, value }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        value={value}
        onChange={(e) => {
          onSelectTime(e);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

export default BasicTimePicker;
