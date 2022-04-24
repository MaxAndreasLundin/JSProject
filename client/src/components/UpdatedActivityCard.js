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
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Container from '@mui/material/Container';


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

function ActivityCard1(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 356 }}>
      <CardContent
        sx={{
          pb: 0,
        }}
      >
         <Avatar src="https://mamadisrupt.com/wp-content/uploads/2019/11/jessica-rockowitz-jbiInQGY8og-unsplash-WEB.jpg"
          fontSize="large"/>
          <IconButton>
            <InfoOutlinedIcon fontSize="small"/>
          </IconButton>
         
          <IconButton aria-label="add to favorites" color="secondary">
            <FavoriteIcon />
          </IconButton>

        <Typography>
        Passar Bäst:
        </Typography>
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
                flexDirection: "row",
                bgcolor: "background.paper",
                borderRadius: 1,
                mt: 1,
              }}
            >
              <Button
                variant="contained"
                color="info"
                style={{
                  maxWidth: "63px",
                  maxHeight: "17px",
                  minWidth: "63px",
                  minHeight: "17px",
                  fontSize: 11,
                }}
              >
                <Typography variant="body2">Utomhus</Typography>
              </Button>
            </Box>
            <Box
              sx={{
                flexDirection: "row",
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
                  maxWidth: "40px",
                  maxHeight: "17px",
                  minWidth: "40px",
                  minHeight: "17px",
                  fontSize: 11,
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
              <Typography>Läs mer & joina!</Typography>
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
          <br />
          <Button variant="contained">Joina</Button>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default memo(ActivityCard1);
