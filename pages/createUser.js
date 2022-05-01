import * as React from "react";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import { Typography, Box, Container, FormGroup } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
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
      <Container variant="flex" maxWidth="90%">
        <Box>
          <Typography variant="signupHeader">Skapa Konto</Typography>
        </Box>

        <FormControl fullWidth>
          <InputLabel color="info">Lösenord*</InputLabel>
          <OutlinedInput
            fullWidth
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
          <FormControl fullWidth>
            <InputLabel color="info">Upprepa lösenord*</InputLabel>
            <OutlinedInput
              fullWidth
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
        </FormControl>
      </Container>
    </form>
  );
}
