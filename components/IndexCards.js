import * as React from "react";
import { memo } from "react";
import { Container, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "../src/Link";

function RecipeReviewCard(props) {
  return (
    <Card
      sx={{
        maxWidth: 350,
        minHeight: 193,
        mb: 1,
        mt: 1,
        borderRadius: 3,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardHeader
        variant="flex"
        sx={{
          mt: 1,
          pt: 0,
          pb: 0,
        }}
        title={props.title}
      />
      <CardContent
        sx={{
          pt: 1,
          textAlign: "center",
          "&:last-child": { pb: 1 },
        }}
      >
        <Typography children={props.children}></Typography>
      </CardContent>
      <Container
        variant="flex"
        sx={{
          justifyContent: "flex-end",
          alignItems: "flex-end",
          flexGrow: 1,
          pr: 2,
          pb: 2,
        }}
      >
        <Button
          variant="contained"
          color="info"
          component={Link}
          href="/activityPage"
          sx={{
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
      </Container>
    </Card>
  );
}

export default memo(RecipeReviewCard);
