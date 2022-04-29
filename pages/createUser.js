import * as React from "react";
import TextField from "@mui/material/TextField";
import { Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function CreateUser() {
  return (
    <Grid container width="90%" margin="auto" spacing={2}>
      <Typography variant="signupHeader" textAlign="center">
        Skapa konto
      </Typography>

      <Grid item>
        <TextField
          fullWidth
          id="outlined-basic"
          label="För- och efternamn"
          variant="outlined"
          color="info"
        />

        <TextField
          fullWidth
          id="outlined-basic"
          label="Mailadress"
          variant="outlined"
          color="info"
        />
      </Grid>

      <Grid item>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Lösenord*"
          variant="outlined"
          color="info"
        />

        <TextField
          fullWidth
          id="outlined-basic"
          label="Upprepa lösenord*"
          variant="outlined"
          color="info"
        />
        <Typography variant="pswrdInfo">
          Använd minst åtta tecken och en kombination av bokstäver, siffror och
          symboler
        </Typography>
      </Grid>
    </Grid>
  );
}
