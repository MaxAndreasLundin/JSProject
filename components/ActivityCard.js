import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { memo } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CheckIcon from "@mui/icons-material/Check";
import Chip from "@mui/material/Chip";

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

const BootstrapButton = styled(Button)({
  boxShadow: 1,
  textTransform: "none",
  fontSize: 16,
  padding: 2,
  lineHeight: 1.5,
  backgroundColor: "#FFE99D",
  fontFamily: ["Buenos Aires"].join(","),
  "&:hover": {
    backgroundColor: "#FFE99D",
    boxShadow: 1,
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#FFE99D",
    transform: "translateY(4px)",
  },
  "&:focus": {
    boxShadow: 1,
  },
});

function ActivityCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [isActive, setIsActive] = React.useState(false);

  const handleToggle = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setIsActive(!isActive);
  };

  const [buttonText, setButtonText] = React.useState(true);

  const handleClick = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setButtonText(!buttonText);
  };

  return (
    <Card
      onClick={handleExpandClick}
      className="card"
      sx={{
        maxWidth: 500,
        minWidth: 0,
        m: 1,
      }}
    >
      <CardContent sx={{ maxHeight: 105 }}>
        <Box display="flex" justifyContent="space-between">
          <Box sx={{ ml: 1 }}>
            <Avatar
              src="https://mamadisrupt.com/wp-content/uploads/2019/11/jessica-rockowitz-jbiInQGY8og-unsplash-WEB-542x427.jpg"
              sx={{
                width: 55,
                height: 55,
              }}
            />

            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "center",
              }}
            >
              Malin
            </Typography>
          </Box>

          <Box display="flex" flexDirection="column" sx={{ ml: 6 }}>
            <Typography variant="h5">Korvgrillning</Typography>
            <Typography variant="subtitle1">Var: Hökarängen</Typography>
            <Typography variant="subtitle1">När: 29 Mars 2022 </Typography>
            <Typography variant="subtitle1">Tid: 12:00</Typography>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            flexWrap="wrap"
          >
            <IconButton
              aria-label="add to favorites"
              onClick={handleToggle}
              sx={{ marginLeft: 6, mt: -1 }}
            >
              {!isActive && <FavoriteBorderIcon fontSize="large" />}
              {isActive && <FavoriteIcon fontSize="large" color="secondary" />}
            </IconButton>

            <Button
              variant="contained"
              disableRipple
              onClick={handleClick}
              justifyContent="flexEnd"
            >
              {buttonText && (
                <Typography sx={{ fontSize: 14 }}>Joina!</Typography>
              )}
              {!buttonText && (
                <Typography sx={{ fontSize: 14 }}>
                  Du joinar!{" "}
                  <CheckIcon fontSize="small" sx={{ verticalAlign: "top" }} />
                </Typography>
              )}
            </Button>
          </Box>
        </Box>
      </CardContent>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Box display="flex" sx={{ mt: 2 }}>
            <Box sx={{ maxWidth: "60%" }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                Om aktiviteten
              </Typography>
              <Typography
                color="text.warning"
                variant="subtitle2"
                sx={{ mr: 4, mb: -3 }}
              >
                Kort beskrivning av vad aktiveteten handlar om och vad syftet är
                med aktiviteten. Kort beskrivning av vad aktiveteten handlar om
                och vad syftet är med aktiviteten.
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                Passar bäst:
              </Typography>
              <Box
                display="flex"
                flexDirection="row"
                flexWrap="wrap"
                justifyContent="flex-start"
                sx={{ mr: 1, mt: 0 }}
              >
                <Chip
                  color="info"
                  label="Korv"
                  size="small"
                  variant="subtitle1"
                  sx={{ m: 0.5, fontWeight: 400, fontFamily: "Buenos Aires" }}
                />
                <Chip
                  color="info"
                  label="Utomhus"
                  size="small"
                  sx={{ m: 0.5, fontWeight: 400, fontFamily: "Buenos Aires" }}
                />
                <Chip
                  color="error"
                  label="Alla åldrar"
                  size="small"
                  sx={{ m: 0.5, fontWeight: 400, fontFamily: "Buenos Aires" }}
                />
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Collapse>

      <Box display="flex" justifyContent="center">
        <ExpandMore
          sx={{ marginLeft: 0 }}
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </Box>
    </Card>
  );
}

export default memo(ActivityCard);
