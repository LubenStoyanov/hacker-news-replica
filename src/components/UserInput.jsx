import { Button, TextField, Container, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export default function UserInput({ handleFetch, setCountPage }) {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setCountPage(0);
    handleFetch(searchText);
  };

  const handleOnChange = (event) => {
    setSearchText((s) => (s = event.target.value));
  };

  return (
    <Container>
      <Box component="form" onSubmit={handleSubmit} action="#">
        <TextField
          id="outlined-search-size-small"
          label="Search field"
          type="search"
          size="small"
          onChange={handleOnChange}
        />
        <Button type="submit" variant="text" size="small">
          <SearchIcon fontSize="large" />
        </Button>
      </Box>
    </Container>
  );
}
