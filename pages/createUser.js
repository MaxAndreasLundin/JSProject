import * as React from "react";
import TextField from "@mui/material/TextField";
import {
  Grid,
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Button,
  Box,
  IconButton,
} from "@mui/material";

export default function CreateUser() {
  const [formValues, setFormValues] = {
    showPassword: false,
    password: "",
    passwordConf: "",
    passwordError: false,
  };
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  return (
    <Grid container width="90%" margin="auto" direction="column" spacing={2}>
      <Grid container justifyContent="center">
        <Typography variant="signupHeader" textAlign="center">
          Skapa konto
        </Typography>
      </Grid>

      <Grid item>
        <TextField
          fullWidth
          label="För- och efternamn"
          variant="outlined"
          color="info"
        />

        <TextField
          fullWidth
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
          helperText="Incorrect entry."
        />
        <TextField
          fullWidth
          id="outlined-basic"
          label="Upprepa lösenord*"
          variant="outlined"
          color="info"
          type="passowrd"
        />
        <Typography variant="pswrdInfo">
          Använd minst åtta tecken och en kombination av bokstäver, siffror och
          symboler
        </Typography>
      </Grid>

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

      <Grid item>
        <Button variant="contained" sx={{ width: "100%", fontSize: "0.9rem" }}>
          <Typography variant="signupHeader">SKAPA KONTO</Typography>
        </Button>
      </Grid>

      <Grid item>
        <Grid
          container
          sx={{
            flexDirection: "column",

            alignContent: "center",
          }}
        >
          <Box>
            <Typography variant="pswrdInfo">Har du redan ett konto?</Typography>
          </Box>
          <Box>
            <Button
              variant="contained"
              sx={{ width: "100%", fontSize: "0.9rem" }}
              color="info"
            >
              <Typography variant="subtitle1">Logga in</Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
