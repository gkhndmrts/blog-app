import React from "react";
import Post from "../components/Post";
import service from "../service";

import { Box, CircularProgress, Pagination } from "@mui/material";

const Home = () => {
  const [posts, setPosts] = React.useState();

  React.useEffect(() => {
    getResults();
  }, []);

  function getResults(page = 1) {
    service.listWithPage(page).then((res) => {
      setPosts(res.data);
    });
  }

  if (!posts) {
    return <CircularProgress />;
  }

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        pb: 15,
      }}
    >
      <Box sx={{ maxWidth: 700 }}>
        {posts.docs.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </Box>

      <Pagination
        count={posts.totalPages}
        onChange={(e, value) => getResults(value)}
      />
    </Box>
  );
};

export default Home;
