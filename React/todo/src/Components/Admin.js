import React, { useEffect, useState } from "react";
import { fetchOrders, assignOrder } from "../api";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

export default function Admin() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders().then(setOrders);
  }, []);

  const handleAssign = async (id, agentId) => {
    await assignOrder(id, agentId);
    setOrders(
      orders.map((o) => (o.id === id ? { ...o, assignedAgentId: agentId } : o))
    );
  };

  return (
    <div>
      <Typography variant="h6">Admin Dashboard</Typography>
      <List>
        {orders.map((o) => (
          <ListItem key={o.id}>
            <ListItemText
              primary={`${o.pickupAddress} → ${o.deliveryAddress}`}
              secondary={`Status: ${o.status}, Agent: ${
                o.assignedAgentId || "Not Assigned"
              }`}
            />
            {!o.assignedAgentId && (
              <Button onClick={() => handleAssign(o.id, 201)}>
                Assign Agent Ravi
              </Button>
            )}
          </ListItem>
        ))}
      </List>
    </div>
  );
}
