import {
  Button,
  TextField,
  Container,
  Box,
  CircularProgress,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function UserInput({ setSearchText, isLoading }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchText((st) => (st = event.target[0].value));
  };

  return (
    <Container>
      <Box
        component="form"
        onSubmit={handleSubmit}
        action=""
        sx={{ display: "flex" }}
      >
        <TextField
          id="outlined-search-size-small"
          label="Search field"
          type="search"
          size="small"
          name="searchText"
          autoFocus={true}
        />
        {isLoading ? (
          <Button
            type="submit"
            variant="text"
            size="small"
            pl="0"
            sx={{ textAlign: "left" }}
          >
            <SearchIcon fontSize="large" />
          </Button>
        ) : (
          <Container>
            <CircularProgress size="2.3rem" ml={10} />
          </Container>
        )}
      </Box>
    </Container>
  );
}
