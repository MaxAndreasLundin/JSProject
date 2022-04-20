import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { memo } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function RecipeReviewCard(props) {
  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardHeader
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          bgcolor: "background.paper",
          borderRadius: 1,
          mt: 1,
        }}
        title={props.title}
      />

      <CardContent
        sx={{
          pb: 0,
          textAlign: "center",
        }}
      >
        Här nedan kan du se vilka aktiviteter som våra fina medlemmar och
        föreningar har satt ihop.
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            bgcolor: "background.paper",
            borderRadius: 1,
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            bgcolor: "background.paper",
            borderRadius: 1,
            mt: 1,
          }}
        >
          <Button
            variant="contained"
            color="info"
            style={{
              maxWidth: "115px",
              maxHeight: "30px",
              minWidth: "105px",
              minHeight: "30px",
              fontSize: 13,
            }}
          >
            Läs mer
            <ArrowForwardIcon fontSize="small" />
          </Button>
        </Box>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{
          pb: 0,
          mb: 0,
        }}
      ></CardActions>
    </Card>
  );
}

export default memo(RecipeReviewCard);
