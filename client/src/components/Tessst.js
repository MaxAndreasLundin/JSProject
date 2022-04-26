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
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Chip from '@mui/material/Chip';


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

  const clickAble = () => {

  };

  return (
    <Card className="card" sx={{
        maxWidth: 500
      }} >
      <CardContent
      >
        <Box display="flex" justifyContent="space-between">
              <Box>
                <Avatar src="https://mamadisrupt.com/wp-content/uploads/2019/11/jessica-rockowitz-jbiInQGY8og-unsplash-WEB-542x427.jpg"
                  sx={{
                    width: 100,
                    height: 100,
                  }}
                />
                <Typography sx={{
                  textAlign: "center",
                  padding: 1,
                }}>Malin</Typography>
              </Box>
  
              <Box>
                <Typography variant="h5">Korvgrillning</Typography>
                <Typography>Var: Hökarängen</Typography>
                <Typography>När: 29 Mars 2022 </Typography>
                <Typography>Tid: 12:00</Typography>
              </Box>
              <Box>
                <IconButton aria-label="add to favorites">
                    <FavoriteBorderIcon fontSize="large"/>
                  </IconButton>
                  <br />
                  <Button variant="contained">Joina!</Button>
              </Box>
        </Box>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent >
          <Box display="flex">
            <Box sx={{marginRight:"20", width:"200px"}}>
              <Typography>Om aktiviteten:</Typography>
              <Typography color="text.secondary">
                Kort beskrivning av vad aktiveteten handlar om och vad syftet är med
                aktiviteten. Kort beskrivning av vad aktiveteten handlar om och vad syftet är med
                aktiviteten.
              </Typography>
            </Box>
  
            <Box display="flex" flexDirection="column">
              <Typography>Passar bäst:</Typography>
              <Box display="flex" justifyContent="space-around" flexDirection="row" flexWrap="wrap">
                <Chip color="info"  label="Korv" />
                <Chip color="info"  label="Utomhus" />
                <Chip color="error"  label="Alla åldrar" />
                <Chip color="error"  label="Alla åldrar" />
                <Chip color="error"  label="Alla åldrar" />
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Collapse>
        <Box>
            <ExpandMore className="expand-btn"
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        
                      >
                        
                        <ExpandMoreIcon />
                      </ExpandMore>
        </Box>   
    
  </CardContent>
    
      
    </Card>
  );
}

export default memo(ActivityCard1);
