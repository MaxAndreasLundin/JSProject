import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { memo } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
       sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.paper",
        borderRadius: 1,
        mt: 1,

      }}
        title={props.title}


      />

      <CardContent
        sx={{
          pb: 0,
        }}
      >
        <Typography>Här nedan kan du se vilka aktiviteter som våra fina medlemmar och föreningar har satt ihop.</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            bgcolor: "background.paper",
            borderRadius: 1,
          }}
        >


        </Box>
    
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
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
                <Typography variant="body2">Läs mer</Typography>
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
