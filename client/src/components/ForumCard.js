import * as React from "react";
import { memo } from "react";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function RecipeReviewCard(props) {
  return (
    <Card sx={{ maxWidth: 350, mb: 1, mt: 1, borderRadius: 3 }}>
      <CardHeader
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          bgcolor: "background.paper",
          mt: 1,
          pt: 0,
          pb: 0,
        }}
        title={props.title}
      />
      <CardContent
        sx={{
          pb: 0,
          pt: 1,
          textAlign: "center",
        }}
      >
        <Typography>
          Dela med dig av tidigare erfarenheter och läs andras historier.
          Tillsammans är vi starka. PS. Du kan vara helt anonym i forumet.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            bgcolor: "background.paper",
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
            mb: 1,
            mr: 1,
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
