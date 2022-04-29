import * as React from "react";
import TextField from "@mui/material/TextField";
import {
  Grid,
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";

export default function CreateUser() {
  return (
    <Grid container width="90%" margin="auto" spacing={2}>
      <Grid container justifyContent="center">
        <Typography variant="signupHeader" textAlign="center">
          Skapa konto
        </Typography>
      </Grid>

      <Grid container>
        <Grid item sx={{ p: 0 }}>
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
      </Grid>

      <Grid container>
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
            Använd minst åtta tecken och en kombination av bokstäver, siffror
            och symboler
          </Typography>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item>
          <FormGroup>
            <FormControlLabel
              value="true"
              control={<Checkbox color="info" />}
              label={
                <Typography variant="pswrdInfo">
                  Jag tillåter att Join skickar påminnelser om aktiviteter och
                  liknande till min mail
                </Typography>
              }
              labelPlacement="end"
            />
            <FormControlLabel
              value="true"
              control={<Checkbox color="info" />}
              label={
                <Typography variant="pswrdInfo">
                  Jag godkänner Joins användarvillkor
                </Typography>
              }
              labelPlacement="end"
            />
          </FormGroup>
        </Grid>
      </Grid>
    </Grid>
  );
}
