import * as React from "react";
import IndexCard from "./IndexCard";
import { CssBaseline } from "@mui/material";
import { Grid } from "@mui/material";

function IndexCardHomePage() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container>
        <Grid item xs={12} sm={4}>
          <IndexCard title="Hitta aktivitet"></IndexCard>
        </Grid>
        <Grid item xs={12} sm={4}>
          <IndexCard title="Öppet forum"></IndexCard>
        </Grid>
        <Grid item xs={12} sm={4}>
          <IndexCard title="Professionel hjälp"></IndexCard>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default IndexCardHomePage;
