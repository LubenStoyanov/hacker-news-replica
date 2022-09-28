import { useState } from "react";

export default function UserInput({ setStories }) {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = "http://hn.algolia.com/api/v1/search?query=";
    const endpoint = url + searchText;

    const promise = await fetch(endpoint);
    const data = await promise.json();
    setStories(data.hits);
  };

  const handleOnChange = (event) => {
    setSearchText((s) => (s = event.target.value));
  };

  return (
    <form onSubmit={handleSubmit} action="">
      <input
        onChange={handleOnChange}
        type="text"
        name="user-input"
        id="user-input"
      />
      <button type="submit">Search</button>
    </form>
  );
}
