import React, { useEffect, useState } from "react";
import axios from "axios";
import { Tabs, Tab } from "@mui/material";
import Carousel from "./Carousel";
import AlbumCard from "./AlbumCard"; // Reusing AlbumCard with "Likes" instead of "Follows"

const SongSection = () => {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("All");

  useEffect(() => {
    // Fetch Songs
    axios.get("https://qtify-backend-labs.crio.do/songs")
      .then((response) => setSongs(response.data))
      .catch((error) => console.error("Error fetching songs:", error));

    // Fetch Genres
    axios.get("https://qtify-backend-labs.crio.do/genres")
      .then((response) => {
        setGenres([{ key: "All", label: "All" }, ...response.data]);
      })
      .catch((error) => console.error("Error fetching genres:", error));
  }, []);

  // Filter songs based on selected genre
  const filteredSongs = selectedGenre === "All"
    ? songs
    : songs.filter((song) => song.genre.key === selectedGenre);

  return (
    <div>
      {/* Section Header */}
      <h2>Songs</h2>

      {/* Material UI Tabs */}
      <Tabs
        value={selectedGenre}
        onChange={(event, newValue) => setSelectedGenre(newValue)}
        variant="scrollable"
        scrollButtons="auto"
        sx={{
          "& .MuiTabs-indicator": { backgroundColor: "red" }, // Custom styling
          "& .MuiTab-root": { fontWeight: "bold" },
        }}
      >
        {genres.map((genre) => (
          <Tab key={genre.key} label={genre.label} value={genre.key} />
        ))}
      </Tabs>

      {/* Carousel with Filtered Songs */}
      <Carousel albums={filteredSongs} type="songs" />
    </div>
  );
};

export default SongSection;