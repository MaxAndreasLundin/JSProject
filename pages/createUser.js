import * as React from "react";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";
import { Typography, Box, FormControlLabel } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function CreateUser() {
  const [values, setValues] = React.useState({
    showPassword: false,
    password: "",
    passwordConf: "",
    passwordError: false,
    name: "",
    email: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <form>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        maxWidth="90%"
        margin="auto"
        spacing={2}
      >
        <Grid>
          <Typography variant="signupHeader">Skapa Konto</Typography>
        </Grid>

        <Grid item sx={{ width: 1 }}>
          <FormControl fullWidth>
            <InputLabel color="info">För- och efternamn</InputLabel>
            <OutlinedInput
              color="info"
              label="För- och efternamn"
              value={values.name}
              onChange={handleChange("name")}
            />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel color="info">För- och efternamn</InputLabel>
            <OutlinedInput
              color="info"
              label="För- och efternamn"
              value={values.name}
              onChange={handleChange("name")}
            />
          </FormControl>
        </Grid>

        <Grid item sx={{ width: 1 }}>
          <FormControl fullWidth>
            <InputLabel color="info">Lösenord*</InputLabel>
            <OutlinedInput
              required
              color="info"
              label="Lösenord"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel color="info">Upprepa lösenord*</InputLabel>
            <OutlinedInput
              color="info"
              label="Upprepa lösenord"
              type={values.showPassword ? "text" : "password"}
              value={values.passwordConf}
              onChange={handleChange("passwordConf")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Typography variant="pswrdInfo">
            Använd minst åtta tecken och en kombination av bokstäver, siffror
            och symboler
          </Typography>
        </Grid>
        <Grid item alignItems="flex-start">
          <FormControlLabel
            control={<Checkbox color="info" />}
            label={
              <Typography variant="pswrdInfo">
                Jag tillåter att Join skickar påminnelser om aktiviteter och
                liknande till min mail
              </Typography>
            }
          />
          <FormControlLabel
            control={<Checkbox color="info" />}
            label={
              <Typography variant="pswrdInfo">
                Jag godkänner Joins användarvillkor
              </Typography>
            }
          />
        </Grid>
      </Grid>
    </form>
  );
}
