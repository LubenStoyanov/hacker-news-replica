import {
  Pagination,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import UserInput from "./components/UserInput";
import List from "./components/List";
import "./App.css";

function App() {
  const [searchText, setSearchText] = useState("");
  const [stories, setStories] = useState([]);
  const [countPage, setCountPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let active = true;
    const handleFetch = async () => {
      setIsLoading((l) => (l = false));

      const url = "http://hn.algolia.com/api/v1/search?query=";
      const endpoint = `${url}${searchText}&page=${countPage}`;

      const promise = await fetch(endpoint);
      const data = await promise.json();
      if (active) {
        setStories((h) => (h = data.hits));
        setIsLoading((l) => (l = true));
      }
    };

    handleFetch();

    return () => {
      active = false;
    };
  }, [searchText, countPage]);

  const handleChange = (_, page) => setCountPage((p) => (p = page));

  return (
    <Container>
      <Typography variant="h2" component="h1">
        Hacker News
      </Typography>
      <UserInput setSearchText={setSearchText} />
      <Pagination
        size="small"
        count={10}
        color="primary"
        onChange={handleChange}
      />
      {isLoading ? (
        <List stories={stories} handleChange={handleChange} />
      ) : (
        <CircularProgress />
      )}
      <Pagination
        size="small"
        count={10}
        color="primary"
        onChange={handleChange}
      />
    </Container>
  );
}

export default App;
