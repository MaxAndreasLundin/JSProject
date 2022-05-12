import * as React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { mutate } from "swr";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DatePicker from "./DatePicker";
import TimePicker from "./TimePicker";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

const Form = ({ formId, cardForm, forNewcard = true }) => {
  const router = useRouter();
  const contentType = "application/json";
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    title: cardForm.title,
    description: cardForm.description,
  });

  /* The PUT method edits an existing entry in the mongodb database. */
  const putData = async (form) => {
    const { id } = router.query;

    try {
      const res = await fetch(`/api/cards/${id}`, {
        method: "PUT",
        headers: {
          Accept: contentType,
          "Content-Type": contentType,
        },
        body: JSON.stringify(form),
      });

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status);
      }

      const { data } = await res.json();

      mutate(`/api/cards/${id}`, data, false); // Update the local data without a revalidation
      router.push("/");
    } catch (error) {
      setMessage("Failed to update card");
    }
  };

  /* The POST method adds a new entry in the mongodb database. */
  const postData = async (form) => {
    try {
      const res = await fetch("/api/cards", {
        method: "POST",
        headers: {
          Accept: contentType,
          "Content-Type": contentType,
        },
        body: JSON.stringify(form),
      });

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status);
      }

      router.push("/");
    } catch (error) {
      setMessage("Failed to add card");
    }
  };

  const handleChange = (e) => {
    const target = e.target;
    const value =
      target.name === "poddy_trained" ? target.checked : target.value;
    const name = target.name;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = formValidate();
    if (Object.keys(errs).length === 0) {
      forNewcard ? postData(form) : putData(form);
    } else {
      setErrors({ errs });
    }
  };

  /* Makes sure pet info is filled for pet name, owner name, species, and image url*/
  const formValidate = () => {
    let err = {};
    if (!form.title) err.title = "Title is required";
    if (!form.description) err.description = "Description is required";
    return err;
  };

  return (
    <Container variant="flex">
      <FormControl id={formId} onSubmit={handleSubmit}>
        <Box component="form" noValidate autoComplete="off">
          <Typography variant="h1" sx={{ mb: 4, mt: 4, textAlign: "center" }}>
            Skapa en egen aktivitet
          </Typography>
          <Typography variant="subtitle1" sx={{ fontSize: 20 }}>
            Namn på aktivitet
          </Typography>
          <FormControl>
            <OutlinedInput
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              placeholder="Detta blir din aktivitets rubrik, beskriv den med 1-4 ord"
            />
          </FormControl>
          <Typography variant="subtitle1" sx={{ fontSize: 20 }}>
            Plats
          </Typography>
          <FormControl>
            <OutlinedInput
              name="place"
              value={form.place}
              onChange={handleChange}
              placeholder="Skriv ut hela adressen inkl. postnummer"
            />
          </FormControl>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: 20, display: "flex", alignItems: "center" }}
          >
            <AccessTimeIcon />
            Datum och tid
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <Box sx={{ mr: 1 }}>
              <DatePicker />
            </Box>
            <Box sx={{ ml: 1 }}>
              <TimePicker />
            </Box>
          </Box>
          <Typography variant="subtitle1" sx={{ fontSize: 20, mt: 3 }}>
            Passar ålder:
          </Typography>
          <FormControl>
            <OutlinedInput placeholder="Vilken ålder passar din aktivitet för?" />
          </FormControl>
          <Typography variant="subtitle1" sx={{ fontSize: 20, mt: 3 }}>
            Passar dig som gillar:
          </Typography>
          <Typography variant="subtitle1" sx={{ fontSize: 12 }}>
            Lägg gärna till 1-3 stycken taggar för att hjälpa andra att hitta
            rätt
          </Typography>
          <FormControl>
            <OutlinedInput placeholder="Till exempel: Tv-spel, Inomhus, Grillning ..." />
          </FormControl>
          <Typography variant="subtitle1" sx={{ fontSize: 20, mt: 3 }}>
            Om aktiviteten
          </Typography>
          <TextField
            name="description"
            value={form.description}
            onChange={handleChange}
            required
            id="outlined-multiline-static"
            multiline
            rows={5}
            placeholder="Kort beskrivning om aktiviteten"
            sx={{
              "& fieldset": {
                borderRadius: "10px",
              },
            }}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{ width: "100%", fontSize: 22, mt: 2, mb: 2 }}
          >
            SPARA
          </Button>
        </Box>
      </FormControl>
    </Container>
  );
};

export default Form;
