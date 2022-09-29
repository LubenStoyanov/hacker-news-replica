import { Container } from "@mui/system";
import Story from "./Story";

export default function List({ stories, handleChange }) {
  const listStories = stories.map((story) => (
    <li key={story.objectID}>
      <Story storyItem={story} />
    </li>
  ));
  return (
    <Container>
      <ol>{listStories}</ol>
    </Container>
  );
}
