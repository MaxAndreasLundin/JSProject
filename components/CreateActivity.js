import * as React from "react";
import { Box } from "@mui/system";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useRef, useState } from "react";
import { db, auth } from "../utils/db";
import FormControl from "@mui/material/FormControl";
import { Container, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DatePicker from "../components/datePicker";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import OutlinedInput from "@mui/material/OutlinedInput";

export default function UseFormControl() {
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  const valueRef = useRef("");

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
  const [values, setValues] = React.useState({
    title: "",
    name: "",
    date: "",
    time: "",
    place: "",
    description: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });

    console.log(values);
  };
  const onSubmit = async (e) => {
    try {
      db.collection("activities")
        .add({
          values,
        })
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
        });
    } catch (error) {
      console.error("Error adding document: ", error);
      console.log(title, date, time, place, description);
    }
    e.preventDefault();
  };

  return (
    <Container variant="flex">
      <Box component="form" noValidate autoComplete="off">
        <Typography variant="h1" sx={{ mb: 4, mt: 4, textAlign: "center" }}>
          Skapa en egen aktivitet
        </Typography>
        <Typography variant="subtitle1" sx={{ fontSize: 20 }}>
          Namn på aktivitet
        </Typography>
        <FormControl>
          <OutlinedInput
            placeholder="Detta blir din aktivitets rubrik, beskriv den med 1-4 ord"
            sx={{
              "& input::placeholder": {
                fontSize: "11px",
              },
            }}
            value={values.title}
            onChange={handleChange("title")}
          />
        </FormControl>
        <Typography variant="subtitle1" sx={{ fontSize: 20 }}>
          Plats
        </Typography>
        <FormControl>
          <OutlinedInput
            placeholder="Skriv ut hela adressen inkl. postnummer"
            sx={{
              "& input::placeholder": {
                fontSize: "11px",
              },
            }}
            value={values.place}
            onChange={handleChange("place")}
          />
        </FormControl>
        <Typography
          variant="subtitle1"
          sx={{ fontSize: 20, display: "flex", alignItems: "center" }}
        >
          <AccessTimeIcon value={values.date} onChange={handleChange("date")} />
          Datum och tid
        </Typography>
        <DatePicker />
        <Typography variant="subtitle1" sx={{ fontSize: 20, mt: 3 }}>
          Passar ålder:
        </Typography>
        <FormControl>
          <OutlinedInput
            placeholder="Vilken ålder passar din aktivitet för?"
            sx={{
              "& input::placeholder": {
                fontSize: "11px",
              },
            }}
            value={values.time}
            onChange={handleChange("time")}
          />
        </FormControl>
        <Chip
          variant="createActivity"
          color="error"
          label="Alla åldrar"
          size="medium"
          onDelete={handleDelete}
          deleteIcon={<CloseIcon />}
        />
        <Typography variant="subtitle1" sx={{ fontSize: 20, mt: 3 }}>
          Passar dig som gillar:
        </Typography>
        <Typography variant="subtitle1" sx={{ fontSize: 12 }}>
          Lägg gärna till 1-3 stycken taggar för att hjälpa andra att hitta rätt
        </Typography>
        <FormControl
          sx={{
            width: "100%",
            "& fieldset": {
              borderRadius: "29px",
              borderColor: "#7D7D7D",
            },
          }}
        >
          <OutlinedInput
            placeholder="Till exempel: Tv-spel, Inomhus, Grillning ..."
            sx={{
              "& input::placeholder": {
                fontSize: "11px",
              },
            }}
          />
        </FormControl>
        <Chip
          variant="createActivity"
          color="info"
          label="Utomhus"
          size="medium"
          onDelete={handleDelete}
          deleteIcon={<CloseIcon />}
          sx={{ mr: 2 }}
        />
        <Chip
          variant="createActivity"
          color="info"
          label="Grillning"
          size="medium"
          onDelete={handleDelete}
          deleteIcon={<CloseIcon />}
          sx={{ mr: 2 }}
        />
        <Typography variant="subtitle1" sx={{ fontSize: 20, mt: 3 }}>
          Om aktiviteten
        </Typography>
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={5}
          placeholder="Kort beskrivning om aktiviteten"
          sx={{
            width: "100%",
            "& fieldset": {
              borderRadius: "10px",
              borderColor: "#7D7D7D",
            },
          }}
        />
        <Button
          variant="contained"
          sx={{ width: "100%", fontSize: 22, mt: 2, mb: 2 }}
          onClick={onSubmit}
        >
          SPARA
        </Button>
      </Box>
    </Container>
  );
}

//   return (
//     <Paper
//       sx={{
//         p: 2,
//         margin: "auto",
//         marginTop: 2,
//         maxWidth: "80%",
//         flexGrow: 1,
//         backgroundColor: "#F3F3F3",
//       }}
//     >
//       <Grid container spacing={5}>
//         <Grid item xs={12} md={6}>
//           <Box>
//             <Typography variant="h6">Namn på aktivitet</Typography>
//             <Typography variant="body2">
//               Beskriv din aktivitet med circa 1-4 ord
//             </Typography>
//             <TextField
//               id="title"
//               name="title"
//               value={values.title}
//               onChange={handleChange("title")}
//               required
//               fullWidth
//               autoFocus
//               size="small"
//               inputRef={valueRef}
//             />{" "}
//             <LocationOnIcon></LocationOnIcon>
//             <Typography variant="header">Plats</Typography>
//             <Typography variant="body2">
//               Skriv in hela addressen inkl postnummer
//             </Typography>
//             <TextField
//               id="place"
//               name="place"
//               value={values.place}
//               onChange={handleChange("place")}
//               required
//               fullWidth
//               autoFocus
//               size="small"
//             />
//             <Grid container spacing={2}>
//               <Grid item xs={3} sm={3} md={3}>
//                 <AccessTimeIcon fontSize="small"></AccessTimeIcon> Datum
//               </Grid>
//               <Grid item xs={3} sm={3} md={3}>
//                 <TextField
//                   name="date"
//                   required
//                   id="date"
//                   value={values.date}
//                   onChange={handleChange("date")}
//                   autoFocus
//                 />
//               </Grid>
//               <Grid item xs={3} sm={3} md={3}>
//                 <AccessTimeIcon fontSize="small"></AccessTimeIcon> Tid
//               </Grid>
//               <Grid item xs={3} sm={3} md={3}>
//                 <TextField
//                   name="time"
//                   id="time"
//                   required
//                   value={values.time}
//                   onChange={handleChange("time")}
//                   autoFocus
//                 />
//               </Grid>
//             </Grid>
//             <Grid container spacing={2}>
//               <Grid item xs={3} sm={3} md={3}>
//                 <Typography variant="body2">Ålder(min)</Typography>
//               </Grid>
//               <Grid item xs={3} sm={3} md={3}>
//                 <Typography variant="body2">Ålder(max)</Typography>
//               </Grid>
//               <Grid item xs={3} sm={3} md={3}>
//                 <Typography variant="body2">Alla åldrar</Typography>
//               </Grid>
//               <Grid item xs={3} sm={3} md={3}>
//                 <Typography variant="body2">Antal platser</Typography>
//               </Grid>
//             </Grid>
//             <Grid container spacing={2}>
//               <Grid item xs={3} sm={3} md={3}>
//                 <TextField
//                   name="minAge"
//                   // required
//                   id="minAge"
//                   autoFocus
//                 />
//               </Grid>
//               <Grid item xs={3} sm={3} md={3}>
//                 <TextField
//                   name="maxAge"
//                   // required
//                   id="maxAge"
//                   autoFocus
//                 />
//               </Grid>
//               <Grid item xs={3} sm={3} md={3}>
//                 <Checkbox
//                   sx={{
//                     marginTop: -1,
//                   }}
//                 ></Checkbox>
//               </Grid>
//               <Grid item xs={3} sm={3} md={3}>
//                 <TextField
//                   name="nrOfPeople"
//                   // required
//                   id="nrOfPeople"
//                   autoFocus
//                   width="50%"
//                 />
//               </Grid>
//             </Grid>
//           </Box>
//           <Typography variant="h6">Passar dig som gillar</Typography>
//           <Typography variant="body2">
//             Lägg gärna till 1-3 stycken taggar för att hjälpa andra att hitta
//             rätt.
//           </Typography>
//           <TextField
//             name="tags"
//             // required
//             fullWidth
//             id="tags"
//             autoFocus
//             size="small"
//           />{" "}
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "row",
//               justifyContent: "flex-end",
//             }}
//           ></Box>
//         </Grid>
//         <Grid item xs={12} sm={12} md={6}>
//           <Box>
//             <Typography variant="h6" gutterBottom>
//               Beskrivning av aktivitet
//             </Typography>
//             <Typography variant="body2" gutterBottom>
//               Försök beskriva din aktivitet så utförligt (och inspirerande) som
//               möjligt så andra förstår vad som gäller och blir sugna på att
//               joina!
//             </Typography>
//             <Box
//               component="form"
//               sx={{
//                 "& .MuiTextField-root": { width: "90%" },
//               }}
//               noValidate
//               autoComplete="off"
//             >
//               <TextField
//                 id="description"
//                 name="description"
//                 value={values.description}
//                 onChange={handleChange("description")}
//                 multiline
//                 rows={7}
//                 defaultValue="Alla vill som prova på att hoppa trampolin är välkomna hem till oss. Vi bjuder på fika!"
//               />
//             </Box>
//             <Grid container spacing={1}>
//               <Grid item xs={3} sm={2} md={3}>
//                 <Typography variant="body2" sx={{ marginTop: 1 }}>
//                   Pris
//                 </Typography>
//               </Grid>
//               <Grid item xs={3} sm={2} md={3}>
//                 <Typography variant="body2" sx={{ marginTop: 1 }}>
//                   Gratis
//                 </Typography>
//               </Grid>
//             </Grid>
//             <Grid container spacing={1}>
//               <Grid item xs={3} sm={2} md={3}>
//                 <TextField
//                   cost="Cost"
//                   //required
//                   id="cost"
//                   autoFocus
//                 />
//               </Grid>
//               <Grid item xs={3} sm={2} md={3}>
//                 <Checkbox
//                   color="info"
//                   sx={{
//                     marginTop: -1,
//                   }}
//                 ></Checkbox>
//               </Grid>
//               <Button
//                 onClick={onSubmit}
//                 variant="contained"
//                 color="secondary"
//                 sx={{ textTransform: "none", marginTop: -1 }}
//               >
//                 Dela aktivitet
//               </Button>
//             </Grid>
//           </Box>
//         </Grid>
//       </Grid>
//     </Paper>
//   );
// };
// export default CreateActivity;
