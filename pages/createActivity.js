import * as React from "react";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DatePicker from "../components/datePicker";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

export default function UseFormControl() {
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <Container variant="flex">
      <Box component="form" noValidate autoComplete="off">
        <Typography variant="h1" sx={{ mb: 4, mt: 4, textAlign: "center" }}>
          Skapa en egen aktivitet
        </Typography>
        <Typography variant="subtitle1" sx={{ fontSize: 20 }}>
          Namn på aktivitet
        </Typography>
        <FormControl>
          <OutlinedInput
            placeholder="Detta blir din aktivitets rubrik, beskriv den med 1-4 ord"
            sx={{
              "& input::placeholder": {
                fontSize: "11px",
              },
            }}
          />
        </FormControl>
        <Typography variant="subtitle1" sx={{ fontSize: 20 }}>
          Plats
        </Typography>
        <FormControl>
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
          sx={{ fontSize: 20, display: "flex", alignItems: "center" }}
        >
          <AccessTimeIcon />
          Datum och tid
        </Typography>
        <DatePicker />
        <Typography variant="subtitle1" sx={{ fontSize: 20, mt: 3 }}>
          Passar ålder:
        </Typography>
        <FormControl>
          <OutlinedInput
            placeholder="Vilken ålder passar din aktivitet för?"
            sx={{
              "& input::placeholder": {
                fontSize: "11px",
              },
            }}
          />
        </FormControl>
        <Chip
          variant="createActivity"
          color="error"
          label="Alla åldrar"
          size="medium"
          onDelete={handleDelete}
          deleteIcon={<CloseIcon />}
        />
        <Typography variant="subtitle1" sx={{ fontSize: 20, mt: 3 }}>
          Passar dig som gillar:
        </Typography>
        <Typography variant="subtitle1" sx={{ fontSize: 12 }}>
          Lägg gärna till 1-3 stycken taggar för att hjälpa andra att hitta rätt
        </Typography>
        <FormControl
          sx={{
            width: "100%",
            "& fieldset": {
              borderRadius: "29px",
              borderColor: "#7D7D7D",
            },
          }}
        >
          <OutlinedInput
            placeholder="Till exempel: Tv-spel, Inomhus, Grillning ..."
            sx={{
              "& input::placeholder": {
                fontSize: "11px",
              },
            }}
          />
        </FormControl>
        <Chip
          variant="createActivity"
          color="info"
          label="Utomhus"
          size="medium"
          onDelete={handleDelete}
          deleteIcon={<CloseIcon />}
          sx={{ mr: 2 }}
        />
        <Chip
          variant="createActivity"
          color="info"
          label="Grillning"
          size="medium"
          onDelete={handleDelete}
          deleteIcon={<CloseIcon />}
          sx={{ mr: 2 }}
        />
        <Typography variant="subtitle1" sx={{ fontSize: 20, mt: 3 }}>
          Om aktiviteten
        </Typography>
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={5}
          placeholder="Kort beskrivning om aktiviteten"
          sx={{
            width: "100%",
            "& fieldset": {
              borderRadius: "10px",
              borderColor: "#7D7D7D",
            },
          }}
        />
        <Button
          variant="contained"
          sx={{ width: "100%", fontSize: 22, mt: 2, mb: 2 }}
        >
          DELA AKTIVITET
        </Button>
      </Box>
    </Container>
  );
}
