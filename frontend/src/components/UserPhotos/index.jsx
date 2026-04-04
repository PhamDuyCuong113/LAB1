import React from "react";
import { Typography, Card, CardContent } from "@mui/material";
import { useParams, Link } from "react-router-dom";

import "./styles.css";
import { useEffect, useState } from "react";
import fetchModel from "../../lib/fetchModelData";

function UserPhotos() {
  const { userId } = useParams();

  const [photos, setPhotos] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchModel(`/photosOfUser/${userId}`).then((response) => {
      setPhotos(response.data); 
    });

    fetchModel(`/user/${userId}`).then((response) => {
      setUser(response.data); 
    });
  }, [userId]);

  if (!user) {
    return <Typography>Loading...</Typography>;
  }

  if (!user || photos === null) {
    return <Typography>Loading...</Typography>;
  }

  if (photos.length === 0) {
    return <Typography>No photos found</Typography>;
  }

  return (
    <div className="photos-container">
      <Typography className="photos-title" variant="h2">
        {user.first_name} {user.last_name}
      </Typography>

      {photos.map((photo) => (
        <Card key={photo._id} className="photo-card">
          <CardContent>
            {/* 📸 Image */}
            <img
              src={`http://localhost:3001/images/${photo.file_name}`}
              alt={photo.file_name}
              className="photo-image"
            />

            {/* ⏰ Time */}
            <Typography className="photo-time" variant="body2">
              {new Date(photo.date_time).toLocaleString()}
            </Typography>

            {/* 💬 Comments */}
            <div className="photo-comments">
              {photo.comments && photo.comments.length > 0 ? (
                photo.comments.map((c) => (
                  <div key={c._id} className="comment-item">
                    <Typography variant="body2">
                      <b>
                        <Link
                          to={`/users/${c.user._id}`}
                          className="comment-user"
                        >
                          {c.user.first_name} {c.user.last_name}
                        </Link>
                      </b>{" "}
                      • {new Date(c.date_time).toLocaleString()}
                    </Typography>

                    <Typography variant="body1">
                      {c.comment}
                    </Typography>
                  </div>
                ))
              ) : (
                <Typography variant="body2">
                  No comments yet
                </Typography>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default UserPhotos;