import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/system";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button from "@mui/material/Button";
import { useRef, useState } from "react";
import dashify from "dashify";
import axios from "axios";
import db from "../utils/db";
import fs from "fs";

const CreateActivity = () => {
  // const getInitialState = () => {
  //   return {
  //     textFieldValue: "",
  //   };
  // };

  // const handleTextFieldChange = (e) => {
  //   this.setState({
  //     textFieldValue: e.target.value,
  //   });
  // };
  const valueRef = useRef(""); //creating a refernce for TextField Component

  const sendValue = () => {
    return console.log(valueRef.current.value); //on clicking button accesing current value of TextField and outputing it to console
  };

  const [content, setContent] = useState({
    title: undefined,
    name: undefined,
    date: undefined,
    time: undefined,
    place: undefined,
    description: undefined,
  });

  const onChange = (e) => {
    const { value, name } = e.target;
    setContent((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = (event) => {
    try {
      db.collection("activities")
        .add({
          title,
          name: "Malin",
          date,
          time,
          place,
          description,
        })
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
        });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
    event.preventDefault();
  };

  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        marginTop: 2,
        maxWidth: "80%",
        flexGrow: 1,
        backgroundColor: "#F3F3F3",
      }}
    >
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h6">Namn på aktivitet</Typography>
            <Typography variant="body2">
              Beskriv din aktivitet med circa 1-4 ord
            </Typography>
            <TextField
              id="title"
              name="title"
              value={content.title}
              onChange={onChange}
              required
              fullWidth
              autoFocus
              size="small"
              inputRef={valueRef}
            />{" "}
            <LocationOnIcon></LocationOnIcon>
            <Typography variant="header">Plats</Typography>
            <Typography variant="body2">
              Skriv in hela addressen inkl postnummer
            </Typography>
            <TextField
              id="place"
              name="place"
              value={content.place}
              onChange={onChange}
              required
              fullWidth
              autoFocus
              size="small"
            />
            <Grid container spacing={2}>
              <Grid item xs={3} sm={3} md={3}>
                <AccessTimeIcon fontSize="small"></AccessTimeIcon> Datum
              </Grid>
              <Grid item xs={3} sm={3} md={3}>
                <TextField
                  name="date"
                  required
                  id="date"
                  onChange={onChange}
                  value={content.date}
                  autoFocus
                />
              </Grid>
              <Grid item xs={3} sm={3} md={3}>
                <AccessTimeIcon fontSize="small"></AccessTimeIcon> Tid
              </Grid>
              <Grid item xs={3} sm={3} md={3}>
                <TextField
                  name="time"
                  required
                  id="time"
                  value={content.time}
                  onChange={onChange}
                  autoFocus
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={3} sm={3} md={3}>
                <Typography variant="body2">Ålder(min)</Typography>
              </Grid>
              <Grid item xs={3} sm={3} md={3}>
                <Typography variant="body2">Ålder(max)</Typography>
              </Grid>
              <Grid item xs={3} sm={3} md={3}>
                <Typography variant="body2">Alla åldrar</Typography>
              </Grid>
              <Grid item xs={3} sm={3} md={3}>
                <Typography variant="body2">Antal platser</Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={3} sm={3} md={3}>
                <TextField
                  name="minAge"
                  // required
                  id="minAge"
                  autoFocus
                />
              </Grid>
              <Grid item xs={3} sm={3} md={3}>
                <TextField
                  name="maxAge"
                  // required
                  id="maxAge"
                  autoFocus
                />
              </Grid>
              <Grid item xs={3} sm={3} md={3}>
                <Checkbox
                  sx={{
                    marginTop: -1,
                  }}
                ></Checkbox>
              </Grid>
              <Grid item xs={3} sm={3} md={3}>
                <TextField
                  name="nrOfPeople"
                  // required
                  id="nrOfPeople"
                  autoFocus
                  width="50%"
                />
              </Grid>
            </Grid>
          </Box>
          <Typography variant="h6">Passar dig som gillar</Typography>
          <Typography variant="body2">
            Lägg gärna till 1-3 stycken taggar för att hjälpa andra att hitta
            rätt.
          </Typography>
          <TextField
            name="tags"
            // required
            fullWidth
            id="tags"
            autoFocus
            size="small"
          />{" "}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          ></Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Box>
            <Typography variant="h6" gutterBottom>
              Beskrivning av aktivitet
            </Typography>
            <Typography variant="body2" gutterBottom>
              Försök beskriva din aktivitet så utförligt (och inspirerande) som
              möjligt så andra förstår vad som gäller och blir sugna på att
              joina!
            </Typography>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { width: "90%" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="description"
                name="description"
                value={content.description}
                onChange={onChange}
                multiline
                rows={7}
                defaultValue="Alla vill som prova på att hoppa trampolin är välkomna hem till oss. Vi bjuder på fika!"
              />
            </Box>
            <Grid container spacing={1}>
              <Grid item xs={3} sm={2} md={3}>
                <Typography variant="body2" sx={{ marginTop: 1 }}>
                  Pris
                </Typography>
              </Grid>
              <Grid item xs={3} sm={2} md={3}>
                <Typography variant="body2" sx={{ marginTop: 1 }}>
                  Gratis
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={3} sm={2} md={3}>
                <TextField
                  cost="Cost"
                  //required
                  id="cost"
                  autoFocus
                />
              </Grid>
              <Grid item xs={3} sm={2} md={3}>
                <Checkbox
                  color="info"
                  sx={{
                    marginTop: -1,
                  }}
                ></Checkbox>
              </Grid>
              <Button
                onClick={onSubmit}
                variant="contained"
                color="secondary"
                sx={{ textTransform: "none", marginTop: -1 }}
              >
                Dela aktivitet
              </Button>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default CreateActivity;
