import {
  Pagination,
  CircularProgress,
  Container,
  Typography,
  Box,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useEffect, useState } from "react";
import UserInput from "./components/UserInput";
import List from "./components/List";
import "./App.css";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

export default function App() {
  const [searchText, setSearchText] = useState("");
  const [stories, setStories] = useState([]);
  const [countPage, setCountPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const filterNews = (data) => data.hits.filter((item) => item.title !== null);

  useEffect(() => {
    let activeFetch = true;

    const handleFetch = async () => {
      // setIsLoading((l) => (l = false));

      const url = "http://hn.algolia.com/api/v1/search?query=";
      const endpoint = `${url}${searchText}&page=${countPage}`;

      try {
        const promise = await fetch(endpoint);
        const news = await promise.json();
        const hits = filterNews(news);

        if (activeFetch) {
          setStories((h) => (h = h = hits));
          setIsLoading((l) => (l = true));
        }
      } catch (error) {
        setIsLoading(false);
        console.log("Failed to load data.");
      }
    };

    handleFetch();

    return () => {
      activeFetch = false;
    };
  }, [searchText, countPage]);

  const handleChange = (_, page) => setCountPage((p) => (p = page));

  return (
    <Grid container spacing={2} direction="column">
      <Grid xs={12}>
        {/* <Box display="flex" alignItems="center" justifyContent="center">
          <Typography variant="h2" component="h1">
            Hacker News
          </Typography>
        </Box> */}
        <ResponsiveAppBar />
      </Grid>
      <Grid>
        <UserInput setSearchText={setSearchText} isLoading={isLoading} />
      </Grid>
      <Grid>
        {isLoading ? (
          <Pagination
            size="small"
            count={10}
            color="primary"
            onChange={handleChange}
            sx={{ display: "flex", justifyContent: "center" }}
          />
        ) : (
          <></>
        )}
      </Grid>
      <Grid>
        {isLoading ? (
          <List stories={stories} handleChange={handleChange} />
        ) : (
          <></> // <CircularProgress size="2.3rem" />
        )}
        {isLoading ? (
          <Pagination
            size="small"
            count={10}
            color="primary"
            onChange={handleChange}
            sx={{ display: "flex", justifyContent: "center" }}
          />
        ) : (
          <></>
        )}
      </Grid>
    </Grid>
  );
}
