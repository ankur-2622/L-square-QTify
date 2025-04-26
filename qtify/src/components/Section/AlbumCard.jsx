import React from "react";
import { Card, CardMedia, CardContent, Typography, Chip } from "@mui/material";

const AlbumCard = ({ image, name, follows, likes, type }) => {
  return (
    <Card sx={{ width: 200 }}>
      <CardMedia component="img" height="140" image={image} alt={name} />
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        {/* Show Likes if it's a song, otherwise Follows */}
        <Chip label={type === "songs" ? `${likes} Likes` : `${follows} Follows`} />
      </CardContent>
    </Card>
  );
};

export default AlbumCard;
