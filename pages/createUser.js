import * as React from "react";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import { Typography } from "@mui/material";
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
    <Grid
      container
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      width="90%"
      margin="auto"
    >
      <Grid item>
        <Typography variant="signupHeader">Skapa Konto</Typography>
      </Grid>

      <FormControl fullWidth>
        <OutlinedInput fullWidth></OutlinedInput>
      </FormControl>
    </Grid>
  );
}
