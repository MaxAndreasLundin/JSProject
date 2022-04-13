import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { memo } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function RecipeReviewCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardHeader
        avatar={
          <Avatar src="https://wl-brightside.cf.tsp.li/resize/728x/jpg/881/409/62d49f51afa2c42e7b0d0e37e6.jpg" />
        }
        action={
          <IconButton aria-label="add to favorites" color="secondary">
            <FavoriteIcon />
          </IconButton>
        }
        title={props.title}
        subheader="Hökarängen, 29 Mars 2022"
      />

      <CardContent
        sx={{
          pb: 0,
        }}
      >
        <Typography>Passar dig som gillar:</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            bgcolor: "background.paper",
            borderRadius: 1,
          }}
        >
          <Box>
            <Box
              sx={{
                flexDirection: "column",
                bgcolor: "background.paper",
                borderRadius: 1,
                mt: 1,
              }}
            >
              <Button
                variant="contained"
                color="info"
                style={{
                  maxWidth: "105px",
                  maxHeight: "30px",
                  minWidth: "105px",
                  minHeight: "30px",
                  fontSize: 13,
                }}
              >
                <Typography variant="body2">Utomhus</Typography>
              </Button>
            </Box>
            <Box
              sx={{
                flexDirection: "column",
                bgcolor: "background.paper",
                borderRadius: 1,
                mt: 1,
                mb: 1,
              }}
            >
              <Button
                variant="contained"
                color="info"
                style={{
                  maxWidth: "105px",
                  maxHeight: "30px",
                  minWidth: "105px",
                  minHeight: "30px",
                  fontSize: 13,
                }}
              >
                <Typography variant="body2">Korv</Typography>
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              bgcolor: "background.paper",
              borderRadius: 1,
              mt: 1,
              alignItems: "flex-end",
              justifyContent: "flex-end",
              maxWidth: 220,
              minWidth: 220,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Typography>Läs mer</Typography>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </Box>
          </Box>
        </Box>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{
          pb: 0,
          mb: 0,
        }}
      ></CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Om aktiviteten:</Typography>
          <Typography variant="body2" color="text.secondary">
            Kort beskrivning av vad aktiveteten handlar om och vad syftet är med
            aktiviteten.
          </Typography>
          <Typography paragraph>
            <br />
            Om organisatören:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Kort beskrivning av vem jag är och vad mina mål är med att vara på
            Join.
          </Typography>
          <br />
          <Button variant="contained">Join</Button>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default memo(RecipeReviewCard);
