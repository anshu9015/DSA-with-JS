import React, { useEffect, useState } from "react";
import { fetchNotifications } from "../api";
import { List, ListItem, ListItemText, Typography, Paper } from "@mui/material";

export default function Notifications({ userId }) {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch notifications every 5 seconds (polling)
    const fetchData = () => {
      fetchNotifications(userId).then(setNotifications);
    };
    fetchData();

    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, [userId]);

  return (
    <Paper sx={{ p: 2, mt: 3 }}>
      <Typography variant="h6">Notifications</Typography>
      {notifications.length === 0 ? (
        <Typography variant="body2" color="text.secondary">
          No notifications yet.
        </Typography>
      ) : (
        <List>
          {notifications.map((n) => (
            <ListItem key={n.id}>
              <ListItemText
                primary={n.message}
                secondary={new Date(n.timestamp).toLocaleString()}
              />
            </ListItem>
          ))}
        </List>
      )}
    </Paper>
  );
}
