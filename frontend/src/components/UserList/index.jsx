import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import "./styles.css";
import fetchModel from "../../lib/fetchModelData";

function UserList() {
  const [users, setUsers] = useState([]);
  const location = useLocation();

  const currentUserId = location.pathname.split("/")[2];

  useEffect(() => {
    fetchModel("/user/list").then((response) => {
      setUsers(response.data); 
    });
  }, []);

  return (
    <div className="userlist-container">
      <Typography className="userlist-title" variant="h6">
        User List
      </Typography>

      <List component="nav">
        {users.map((item) => (
          <React.Fragment key={item._id}>
            <ListItem
              component={Link}
              to={`/users/${item._id}`}
              className={`userlist-item ${
                String(item._id) === currentUserId ? "active" : ""
              }`}
            >
              <ListItemText
                primary={`${item.first_name} ${item.last_name}`}
              />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </div>
  );
}

export default UserList;