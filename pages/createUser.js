import * as React from "react";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
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
    if (values.name.length === 0) {
      return true;
    }

    if (values.email.length === 0) {
      return true;
    }

    if (values.password.length === 0) {
      return true;
    }

    if (values.passwordConf.length === 0) {
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
        marginTop="auto"
        marginLeft="4%"
        spacing={2}
      >
        <Grid item>
          <Typography variant="signupHeader">Skapa Konto</Typography>
        </Grid>

        <Grid item sx={{ width: 1 }}>
          <FormControl fullWidth>
            <InputLabel color="info" sx={{ pl: 2, pt: 0.5 }}>
              För- och efternamn*
            </InputLabel>
            <OutlinedInput
              color="info"
              label="För- och efternamn"
              value={values.name}
              onChange={handleChange("name")}
              sx={{ borderRadius: "29px" }}
            />
          </FormControl>

          <FormControl fullWidth>
            <InputLabel color="info" sx={{ pl: 2, pt: 0.5 }}>
              Mailadress*
            </InputLabel>
            <OutlinedInput
              color="info"
              label="Mailadress"
              value={values.email}
              onChange={handleChange("email")}
              sx={{ borderRadius: "29px" }}
            />
          </FormControl>
        </Grid>

        <Grid item sx={{ width: 1 }}>
          <FormControl fullWidth>
            <InputLabel
              sx={{ pl: 2, pt: 0.5 }}
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
              sx={{ borderRadius: "29px" }}
              label="Lösenord"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    sx={{ pr: 2 }}
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
              sx={{ pl: 2, pt: 0.5 }}
              color={
                errors.passwordMatchError || errors.passwordReqError
                  ? "success"
                  : "info"
              }
            >
              Upprepa lösenord*
            </InputLabel>
            <OutlinedInput
              sx={{ borderRadius: "29px" }}
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
                    sx={{ pr: 2 }}
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
          <RadioGroup sx={{ marginTop: 2.5, ml: 2 }}>
            <FormControlLabel
              control={
                <Checkbox
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<CheckCircleOutlineIcon />}
                  color="warning"
                />
              }
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
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<CheckCircleOutlineIcon />}
                  color="warning"
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
            disabled={!errors.filledInputsError}
            sx={{ mt: 1 }}
          >
            <Typography variant="signupHeader">SKAPA KONTO</Typography>
          </Button>
        </Grid>

        <Grid item>
          <Box sx={{ marginTop: 1 }}>
            <Typography variant="pswrdInfo" sx={{ marginLeft: -1.5 }}>
              Har du redan ett konto?
            </Typography>
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
