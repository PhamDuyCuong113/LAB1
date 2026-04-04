import React from "react";
import { Typography, Card, CardContent, Button } from "@mui/material";
import { useParams, Link } from "react-router-dom";
import "./styles.css";
import { useEffect, useState } from "react";
import fetchModel from "../../lib/fetchModelData";

function UserDetail() {

  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchModel(`/user/${userId}`)
      .then((response) => {
        setUser(response.data); 
      })
      .catch(() => setError(true));
  }, [userId]);

  if (error) {
    return <Typography>User not found</Typography>;
  }

  if (!user) {
    return (
      <Typography style={{ padding: "20px" }}>
        Loading user...
      </Typography>
    );
  }

  return (
    <Card className="user-card">
      <CardContent>
        {/* 👤 Name */}
        <Typography className="user-name" variant="h5">
          {user.first_name} {user.last_name}
        </Typography>

        {/* 📍 Location */}
        <Typography className="user-info">
          📍 <b>Location:</b> {user.location}
        </Typography>

        {/* 💼 Job */}
        <Typography className="user-info">
          💼 <b>Occupation:</b> {user.occupation}
        </Typography>

        {/* 📝 Description */}
        <Typography className="user-description">
          {user.description}
        </Typography>

        {/* 🔗 Button */}
        <Button
          className="user-button"
          variant="contained"
          component={Link}
          to={`/photos/${user._id}`}
        >
          View Photos
        </Button>
      </CardContent>
    </Card>
  );
}

export default UserDetail;