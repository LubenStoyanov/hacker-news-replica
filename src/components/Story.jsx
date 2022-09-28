export default function Story({ storyItem }) {
  console.log(storyItem);
  return (
    <div>
      <a href={storyItem.url}>
        <h6>{storyItem.title}</h6>
      </a>
      <span>by {storyItem.author} </span>
      <span>points {storyItem.points} </span>
      <span>created {storyItem.created_at}</span>
      <span>comments {storyItem.num_comments}</span>
    </div>
  );
}
