import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function BasicDatePicker({ onSelectDate, value }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        name="date"
        value={value}
        onChange={(e) => onSelectDate(e)}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

export default BasicDatePicker;
