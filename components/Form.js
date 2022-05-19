import * as React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DatePicker from "./DatePicker";
import TimePicker from "./TimePicker";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { memo } from "react";

const Form = ({ formId, cardForm, forNewcard = true }) => {
  const router = useRouter();
  const contentType = "application/json";
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const [tags, setTags] = useState([]);
  const [form, setForm] = useState({
    title: cardForm.title,
    description: cardForm.description,
    place: cardForm.place,
    date: cardForm.date,
    time: cardForm.time,
    name: cardForm.name,
    avatar: cardForm.avatar,
    tags: [],
    tag1: cardForm.tag1,
    tag2: cardForm.tag2,
    tag3: cardForm.tag3,
    age: cardForm.age,
  });

  const postData = async (form) => {
    try {
      const res = await fetch("/api/activities", {
        method: "POST",
        headers: {
          Accept: contentType,
          "Content-Type": contentType,
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error(res.status);
      }

      router.push("/");
    } catch (error) {
      setMessage("Failed to add card");
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleChangeTags = (e) => {
    const { value, name } = e.target;
    setTags(form.tags, [value]);
    console.log(tags);
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form.tag1, form.tag2, form.tag3);
    setTags([form.tag1, form.tag2, form.tag3]);
    console.log(tags);

    const errs = formValidate();
    if (Object.keys(errs).length === 0) {
      forNewcard ? postData(form) : putData(form);
    } else {
      setErrors({ errs });
    }
  };

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
          <Typography variant="subtitle1" sx={{ fontSize: 20, ml: 1 }}>
            Namn på aktivitet
          </Typography>
          <FormControl>
            <OutlinedInput
              sx={{ borderRadius: "29px" }}
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              placeholder="Detta blir din aktivitets rubrik, beskriv den med 1-4 ord"
            />
          </FormControl>
          <Typography variant="subtitle1" sx={{ fontSize: 20, ml: 1 }}>
            Plats
          </Typography>
          <FormControl>
            <OutlinedInput
              sx={{ borderRadius: "29px" }}
              name="place"
              value={form.place}
              onChange={handleChange}
              placeholder="Skriv ut hela adressen inkl. postnummer"
            />

            <Typography variant="subtitle1" sx={{ fontSize: 20, ml: 1 }}>
              Profilnamn
            </Typography>
            <FormControl>
              <OutlinedInput
                sx={{ borderRadius: "29px" }}
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Profilnamn"
              />
            </FormControl>
          </FormControl>
          <Typography variant="subtitle1" sx={{ fontSize: 20, ml: 1 }}>
            Profilbild
          </Typography>
          <FormControl>
            <OutlinedInput
              sx={{ borderRadius: "29px" }}
              name="avatar"
              value={form.avatar}
              onChange={handleChange}
              placeholder="URL from unsplash"
            />
          </FormControl>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: 20, display: "flex", alignItems: "center" }}
          >
            <AccessTimeIcon sx={{ mx: 1 }} />
            Datum och tid
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <Box
              sx={{
                mr: 1,
                width: "100%",
                "& fieldset": {
                  borderRadius: "29px",
                },
              }}
            >
              <DatePicker value={form.date} onChange={handleChange} />
            </Box>
            <Box
              sx={{
                ml: 1,
                width: "100%",
                "& fieldset": {
                  borderRadius: "29px",
                },
              }}
            >
              <TimePicker value={form.time} onChange={handleChange} />
            </Box>
          </Box>
          <Typography variant="subtitle1" sx={{ fontSize: 20, mt: 2, ml: 1 }}>
            Passar ålder:
          </Typography>
          <FormControl>
            <OutlinedInput
              sx={{ borderRadius: "29px" }}
              name="age"
              value={form.age}
              onChange={handleChange}
              placeholder="Vilken ålder passar din aktivitet för?"
            />
          </FormControl>
          <Typography variant="subtitle1" sx={{ fontSize: 20, mt: 2, ml: 1 }}>
            Passar dig som gillar:
          </Typography>
          <Typography variant="subtitle1" sx={{ fontSize: 12, ml: 1 }}>
            Lägg gärna till 1-3 stycken taggar för att hjälpa andra att hitta
            rätt
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            {" "}
            <Box sx={{ mr: 1, width: "100%" }}>
              <FormControl>
                <OutlinedInput
                  sx={{ borderRadius: "29px" }}
                  name="tag1"
                  value={form.tag1}
                  onChange={handleChangeTags}
                />
              </FormControl>
            </Box>
            <Box sx={{ mr: 1, ml: 1, width: "100%" }}>
              <FormControl>
                <OutlinedInput
                  sx={{ borderRadius: "29px" }}
                  name="tag2"
                  value={form.tag2}
                  onChange={handleChangeTags}
                />
              </FormControl>
            </Box>
            <Box sx={{ ml: 1, width: "100%" }}>
              <FormControl>
                <OutlinedInput
                  sx={{ borderRadius: "29px" }}
                  name="tag3"
                  value={form.tag3}
                  onChange={handleChangeTags}
                />
              </FormControl>
            </Box>
          </Box>
          <Typography variant="subtitle1" sx={{ fontSize: 20, mt: 3, ml: 1 }}>
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
