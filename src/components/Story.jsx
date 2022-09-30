import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// import Moment from "react-moment";
import { Link, Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2

export default function Story({ storyItem }) {
  return (
    <Container>
      <Link href={storyItem.url} target="_blank">
        <Typography variant="subtitle1">{storyItem.title}</Typography>
      </Link>
      <Grid2 container spacing={2}>
        <Grid2 xs={3}>
          <Typography variant="body2">points {storyItem.points} </Typography>
        </Grid2>
        <Grid2 xs={3}>
          <Typography variant="body2">by {storyItem.author} </Typography>
        </Grid2>
        <Grid2 xs={3}>
          <Typography variant="body2">
            created {new Date(storyItem.created_at).toDateString()}
          </Typography>
        </Grid2>
        <Grid2 xs={3}>
          <Typography variant="body2">
            comments {storyItem.num_comments}
          </Typography>
        </Grid2>
      </Grid2>
    </Container>
  );
}
