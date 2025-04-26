import React, { useEffect, useState } from "react";
import axios from "axios";
import AlbumCard from "./AlbumCard";
import Carousel from "./Carousel";
import styles from "./Section.module.css";

const Section = ({ title, apiUrl }) => {
  const [albums, setAlbums] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => setAlbums(response.data))
      .catch((error) => console.error("Error fetching albums:", error));
  }, [apiUrl]);

  return (
    <div className={styles.section}>
      {/* Section Header */}
      <div className={styles.header}>
        <h2>{title}</h2>
        {albums.length > 0 && (
          <button
            className={styles.showAllButton}
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Collapse" : "Show All"}
          </button>
        )}
      </div>

      {/* Conditional Rendering */}
      {showAll ? (
        // Show All → Use Carousel for all albums
        <Carousel albums={albums} />
      ) : (
        // Collapse Mode → Show All Albums in Grid Layout
        <div className={styles.albumGrid}>
          {albums.map((album) => (
            <AlbumCard
              key={album.id}
              image={album.image}
              name={album.title}
              follows={album.follows}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Section;
