import * as React from "react";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import { Box, FormControlLabel, RadioGroup, Button } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function CreateUser() {
  const [values, setValues] = React.useState({
    password: "",
    passwordConf: "",
    name: "",
    email: "",
  });

  const [props, setProps] = React.useState({
    passwordError: false,
    showPassword: false,
  });
  const handleSubmit = (event) => {
    event.preventDefault();

    setProps({
      ...props,
      passwordError: true,
    });

    if (values.password == values.passwordConf) {
      setProps({
        ...props,
        passwordError: false,
      });
    }
    console.log(values);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setProps({
      ...props,
      showPassword: !props.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container variant="flex">
        <Box item>
          <Typography variant="signupHeader">Skapa Konto</Typography>
        </Box>

        <Box item sx={{ width: 1 }}>
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
            <InputLabel color="info">Mailadress*</InputLabel>
            <OutlinedInput
              required
              color="info"
              label="Mailadress"
              value={values.email}
              onChange={handleChange("email")}
            />
          </FormControl>
        </Box>

        <Box item sx={{ width: 1 }}>
          <FormControl fullWidth>
            <InputLabel color={props.passwordError ? "success" : "info"}>
              Lösenord*
            </InputLabel>
            <OutlinedInput
              required
              color={props.passwordError ? "success" : "info"}
              label="Lösenord"
              type={props.showPassword ? "text" : "password"}
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
                    {props.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel color={props.passwordError ? "success" : "info"}>
              Upprepa lösenord*
            </InputLabel>
            <OutlinedInput
              required
              color={props.passwordError ? "success" : "info"}
              label="Upprepa lösenord"
              type={props.showPassword ? "text" : "password"}
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
                    {props.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Typography variant="pswrdInfo">
            Använd minst åtta tecken och en kombination av bokstäver, siffror
            och symboler
          </Typography>
        </Box>
        <Box>
          <RadioGroup>
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
          </RadioGroup>

          <Button fullWidth variant="contained">
            <Typography variant="signupHeader">SKAPA KONTO</Typography>
          </Button>
          <input type="submit" />
        </Box>

        <Box>
          <Box>
            <Typography variant="pswrdInfo">Har du redan ett konto?</Typography>
          </Box>

          <Button variant="contained" color="info">
            LOGGA IN
          </Button>
        </Box>
      </Container>
    </form>
  );
}
