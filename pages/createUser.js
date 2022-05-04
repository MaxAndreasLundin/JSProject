import * as React from "react";
import Grid from "@mui/material/Grid";
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
    showPassword: false,
  });

  const [acceptTnC, setAcceptTnC] = React.useState(false);

  const [errors, setErrors] = React.useState({
    passwordMatchError: false,
    passwordReqError: false,
    filledInputsError: false,
  });

  const handleCheckBox = (event) => {
    setAcceptTnC(event.target.checked);
    setErrors({
      ...errors,
      filledInputsError: inputMissingChecker(),
    });
  };

  const inputMissingChecker = () => {
    if (values.name.lenght === 0) {
      return true;
    }

    if (values.email.lenght === 0) {
      return true;
    }

    if (values.password.lenght === 0) {
      return true;
    }

    if (values.passwordConf.lenght === 0) {
      return true;
    }

    if (acceptTnC === false) {
      return true;
    }

    return false;
  };

  const passwordValidator = () => {
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    setErrors({
      ...errors,
      passwordMatchError: values.password !== values.passwordConf,
      passwordReqError: !regex.test(values.password),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    passwordValidator();

    console.log(errors.filledInputsError);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setErrors({
      ...errors,
      filledInputsError: inputMissingChecker(),
    });
    console.log(values);
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
    <form onSubmit={handleSubmit}>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="90%"
        margin="auto"
        spacing={2}
      >
        <Grid item>
          <Typography variant="signupHeader">Skapa Konto</Typography>
        </Grid>

        <Grid item sx={{ width: 1 }}>
          <FormControl fullWidth>
            <InputLabel color="info">För- och efternamn*</InputLabel>
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
              color="info"
              label="Mailadress"
              value={values.email}
              onChange={handleChange("email")}
            />
          </FormControl>
        </Grid>

        <Grid item sx={{ width: 1 }}>
          <FormControl fullWidth>
            <InputLabel
              color={
                errors.passwordMatchError || errors.passwordReqError
                  ? "success"
                  : "info"
              }
            >
              Lösenord*
            </InputLabel>
            <OutlinedInput
              color={
                errors.passwordMatchError || errors.passwordReqError
                  ? "success"
                  : "info"
              }
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
            <InputLabel
              color={
                errors.passwordMatchError || errors.passwordReqError
                  ? "success"
                  : "info"
              }
            >
              Upprepa lösenord*
            </InputLabel>
            <OutlinedInput
              color={
                errors.passwordMatchError || errors.passwordReqError
                  ? "success"
                  : "info"
              }
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
          <Box>
            <Typography variant="pswrdInfo">
              {errors.passwordMatchError ? "Lösenorden matchar inte" : ""}{" "}
            </Typography>
          </Box>
          <Typography variant="pswrdInfo">
            Använd minst åtta tecken och en kombination av bokstäver, siffror
            och symboler
          </Typography>
        </Grid>
        <Grid item sx={{ width: 1 }}>
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
              control={
                <Checkbox
                  color="info"
                  checked={acceptTnC}
                  onChange={handleCheckBox}
                />
              }
              label={
                <Typography variant="pswrdInfo">
                  Jag godkänner Joins användarvillkor
                </Typography>
              }
            />
          </RadioGroup>

          <Button
            fullWidth
            variant="contained"
            type="submit"
            disabled={errors.filledInputsError}
          >
            <Typography variant="signupHeader">SKAPA KONTO</Typography>
          </Button>
        </Grid>

        <Grid item>
          <Box>
            <Typography variant="pswrdInfo">Har du redan ett konto?</Typography>
          </Box>
          <Box>
            <Button variant="contained" color="info" size="">
              LOGGA IN
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
}
