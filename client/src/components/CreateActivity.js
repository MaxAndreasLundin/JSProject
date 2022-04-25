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

export default function CreateActivity() {
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
              activity="activityName"
              required
              fullWidth
              id="activityName"
              autoFocus
              size="small"
            />{" "}
            <LocationOnIcon></LocationOnIcon>
            <Typography variant="header">Plats</Typography>
            <Typography variant="body2">
              Skriv in hela addressen inkl postnummer
            </Typography>
            <TextField
              address="address"
              required
              fullWidth
              id="address"
              autoFocus
              size="small"
            />
            <Grid container spacing={2}>
              <Grid item xs={3} sm={3} md={3}>
                <AccessTimeIcon fontSize="small"></AccessTimeIcon> Datum
              </Grid>
              <Grid item xs={3} sm={3} md={3}>
                <TextField date="date" required id="date" autoFocus />
              </Grid>
              <Grid item xs={3} sm={3} md={3}>
                <AccessTimeIcon fontSize="small"></AccessTimeIcon> Tid
              </Grid>
              <Grid item xs={3} sm={3} md={3}>
                <TextField time="time" required id="time" autoFocus />
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
                <TextField name="minAge" required id="minAge" autoFocus />
              </Grid>
              <Grid item xs={3} sm={3} md={3}>
                <TextField name="maxAge" required id="maxAge" autoFocus />
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
                  required
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
            required
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
                id="outlined-multiline-static"
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
                <TextField cost="Cost" required id="cost" autoFocus />
              </Grid>
              <Grid item xs={3} sm={2} md={3}>
                <Checkbox
                  sx={{
                    marginTop: -1,
                  }}
                ></Checkbox>
              </Grid>
              <Button
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
}
