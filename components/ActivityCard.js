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

function ActivityCard(props) {
  const [tags, setTags] = React.useState([]);

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
    setTags(props.tags);
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
        maxWidth: 355,
        minWidth: 355,
        m: 1,
      }}
    >
      <CardContent sx={{ maxHeight: 105 }}>
        <Box display="flex" justifycontent="space-between">
          <Box sx={{ ml: 1 }}>
            <Avatar
              src={props.avatar}
              sx={{
                width: 55,
                height: 55,
                flexGrow: 1,
                flexBasis: 0,
              }}
            />

            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "center",
              }}
            >
              {props.name}
            </Typography>
          </Box>

          <Box
            sx={{
              ml: 3,
              display: "flex",
              justifycontent: "flex-start",
              flexDirection: "column",
              flexGrow: 2,
              flexBasis: 0,
            }}
          >
            <Typography variant="h5" sx={{ fontSize: 20 }}>
              {props.title}
            </Typography>
            <Typography variant="subtitle1">Var: {props.place}</Typography>
            <Typography variant="subtitle1">När: {props.date} </Typography>
            <Typography variant="subtitle1">Tid: {props.time}</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifycontent: "space-between",
              flexDirection: "column",
              flexGrow: 1,
              flexBasis: 0,
            }}
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
              justifycontent="flexEnd"
              sx={{ maxHeight: 24, textTransform: "none", pl: 0, pr: 0 }}
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 2,
                flexBasis: 0,
              }}
            >
              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                Om aktiviteten
              </Typography>
              <Typography
                color="text.warning"
                variant="subtitle2"
                sx={{ mr: 4, mb: -3 }}
              >
                {props.content}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                flexGrow: 1,
                flexBasis: 0,
              }}
            >
              <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                Passar bäst:
              </Typography>
              {tags.map((tag) => {
                console.log(tag);
                <Chip
                  variant="activityCard"
                  color="info"
                  label={tag}
                  size="small"
                  sx={{ mr: 0.5, mt: 0.5 }}
                />;
              })}

              {/* <Chip
                variant="activityCard"
                color="info"
                label={props.tag2}
                size="small"
                sx={{ mr: 0.5, mt: 0.5 }}
              />
              <Chip
                variant="activityCard"
                color="error"
                label={props.age}
                size="small"
                sx={{ mr: 0.5, mt: 0.5 }}
              /> */}
            </Box>
          </Box>
        </CardContent>
      </Collapse>

      <Box display="flex" justifycontent="center">
        <ExpandMore
          sx={{ marginLeft: 20 }}
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

export default ActivityCard;
