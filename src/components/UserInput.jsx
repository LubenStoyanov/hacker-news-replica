import { Button, TextField, Container, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function UserInput({ setSearchText }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchText((st) => (st = event.target[0].value));
  };

  return (
    <Container>
      <Box component="form" onSubmit={handleSubmit} action="">
        <TextField
          id="outlined-search-size-small"
          label="Search field"
          type="search"
          size="small"
          name="searchText"
        />
        <Button type="submit" variant="text" size="small">
          <SearchIcon fontSize="large" />
        </Button>
      </Box>
    </Container>
  );
}
