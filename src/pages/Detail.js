import React from "react";
import { Box, Divider, CircularProgress } from "@mui/material";
import moment from "moment/moment";
import { useLocation } from "react-router-dom";

const Detail = () => {
  let { state } = useLocation();
  // const { id } = useParams();

  if (state) {
    return (
      <Box
        sx={{
          m: 1,
          display: "flex",
          maxWidth: 700,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={state.image}
          alt={state.title}
          style={{ borderRadius: 15, width: "100%" }}
        />
        <Box sx={{ pr: 2, pl: 2, pb: 5 }}>
          <h1 style={{ fontFamily: "serif" }}>{state.title}</h1>
          <span style={{ fontFamily: "serif", fontSize: 10 }}>
            {moment(state.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
          </span>
          <br />
          <br />
          <span style={{ fontFamily: "serif" }}>{state.description}</span>
          <br />
          <br />
        </Box>

        <Divider />
      </Box>
    );
  } else {
    return (
      <Box
        sx={{
          m: 1,
          display: "flex",
          maxWidth: 700,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
};

export default Detail;
