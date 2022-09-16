import React, { useRef } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import service from "../service";

const Dashboard = () => {
  const form = useRef({ title: "", description: "", image: "" });

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Create a post
        </Typography>
        <Box sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="title"
            label="Title"
            name="title"
            autoComplete="title"
            autoFocus
            onChange={(e) => (form.current.title = e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="description"
            label="Description"
            name="description"
            autoComplete="description"
            multiline={true}
            minRows={4}
            onChange={(e) => (form.current.description = e.target.value)}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            id="image"
            label="Image URL"
            name="image"
            autoComplete="image"
            onChange={(e) => (form.current.image = e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => {
              service
                .savePost(form.current)
                .then((response) => {
                  form.current = { title: "", description: "", image: "" };
                  alert("Success");
                })
                .catch((error) => {
                  alert("Error while saving post");
                });
            }}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Dashboard;
