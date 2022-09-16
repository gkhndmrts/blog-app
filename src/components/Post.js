import React from "react";
import { Box, Button, Divider } from "@mui/material";
import moment from "moment/moment";
import { useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  let navigate = useNavigate();

  return (
    <Box sx={{ m: 1 }}>
      <img
        src={post.image}
        alt={post.title}
        style={{ borderRadius: 15, width: "100%" }}
      />
      <Box sx={{ pr: 2, pl: 2, pb: 5 }}>
        <h1 style={{ fontFamily: "serif" }}>{post.title}</h1>
        <span style={{ fontFamily: "serif", fontSize: 10 }}>
          {moment(post.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
        </span>
        <br />
        <br />
        <span style={{ fontFamily: "serif" }}>
          {post.description && post.description.slice(0, 450)}
          {post.description && post.description.length > 450 && "..."}
        </span>
        <br />
        <br />
        <Button
          onClick={() => navigate(`/detail/${post._id}`, { state: post })}
          variant="outlined"
          sx={{
            color: "orange",
            borderColor: "orange",
            borderRadius: 25,
            "&:hover": {
              borderColor: "orange",
              backgroundColor: "orange",
              color: "white",
            },
          }}
        >
          Continue Reading
        </Button>
      </Box>

      <Divider />
    </Box>
  );
};

export default Post;
