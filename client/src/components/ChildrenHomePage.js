import * as React from "react";
import { Box } from "@mui/system";
import Kids1 from "../assets/kids1.png";
import Kids2 from "../assets/kids2.png";
import { CssBaseline } from "@mui/material";
import { Grid } from "@mui/material";

function ChildrenHomePage() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container>
        <Grid item xs={12} sm={4} md={5}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              margin: 1,
            }}
          >
            <img
              src={Kids1}
              alt="Kids1"
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} md={5}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              mt: 1,
              mb: 1,
              mr: 1,
              ml: 1,
            }}
          >
            <img
              src={Kids2}
              alt="Kids2"
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          mt: 1,
          mb: 1,
          p: 1.5,
          textAlign: "center",
        }}
      ></Box>
    </React.Fragment>
  );
}
export default ChildrenHomePage;
