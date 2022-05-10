import * as React from "react";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import FormHelperText from "@mui/material/FormHelperText";
import { Container, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DatePicker from "../components/datePicker";

function MyFormHelperText() {
  const { focused } = useFormControl() || {};

  const helperText = React.useMemo(() => {
    if (focused) {
      return "This field is being focused";
    }

    return "Helper text";
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
}

export default function UseFormControl() {
  return (
    <Container variant="flex">
      <Box component="form" noValidate autoComplete="off">
        <Typography variant="h1" sx={{ mb: 4, mt: 4 }}>
          {" "}
          Skapa en egen aktivitet
        </Typography>
        <Typography variant="subtitle1" sx={{ fontSize: 18 }}>
          Namn på aktivitet
        </Typography>
        <FormControl
          sx={{
            width: "100%",
            "& fieldset": {
              borderRadius: "29px",
            },
          }}
        >
          <OutlinedInput
            placeholder="Detta blir din aktivitets rubrik, beskriv den med 1-4 ord"
            sx={{
              "& input::placeholder": {
                fontSize: "11px",
              },
            }}
          />
        </FormControl>
        <Typography variant="subtitle1" sx={{ fontSize: 18 }}>
          Plats
        </Typography>
        <FormControl
          sx={{
            width: "100%",
            "& fieldset": {
              borderRadius: "29px",
            },
          }}
        >
          <OutlinedInput
            placeholder="Skriv ut hela adressen inkl. postnummer"
            sx={{
              "& input::placeholder": {
                fontSize: "11px",
              },
            }}
          />
        </FormControl>
        <Typography
          variant="subtitle1"
          sx={{ fontSize: 18, display: "flex", alignItems: "center" }}
        >
          <AccessTimeIcon />
          Datum och tid
        </Typography>
        <DatePicker
          sx={{
            borderRadius: "29px",
          }}
        />
      </Box>
    </Container>
  );
}
