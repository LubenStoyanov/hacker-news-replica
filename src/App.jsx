import {
  Pagination,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";
import { useState } from "react";
import UserInput from "./components/UserInput";
import List from "./components/List";
import "./App.css";

function App() {
  const [stories, setStories] = useState([]);
  const [countPage, setCountPage] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleFetch = async (searchText = "") => {
    const url = "http://hn.algolia.com/api/v1/search?query=";
    const endpoint = url + searchText + "&page=" + countPage;

    const promise = await fetch(endpoint);
    const data = await promise.json();
    setIsLoaded(true);
    setStories(data.hits);
  };

  const handleChange = (_, page) => {
    setCountPage(page);
    handleFetch();
  };

  return (
    <Container>
      <Typography variant="h2" component="h1">
        Hacker News
      </Typography>
      <UserInput setCountPage={setCountPage} handleFetch={handleFetch} />
      {isLoaded ? (
        <Pagination
          size="small"
          count={10}
          color="primary"
          onChange={handleChange}
          page={countPage}
        />
      ) : (
        <></>
      )}
      {isLoaded ? (
        <List stories={stories} handleChange={handleChange} />
      ) : (
        <CircularProgress />
      )}
      {isLoaded ? (
        <Pagination
          size="small"
          count={10}
          color="primary"
          onChange={handleChange}
          page={countPage}
        />
      ) : (
        <></>
      )}
    </Container>
  );
}

export default App;
