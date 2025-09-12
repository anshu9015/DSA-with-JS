import React, { useEffect, useState } from "react";
import { fetchOrders, updateOrderStatus } from "../api";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

export default function Agent() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders().then((data) => {
      setOrders(data.filter((o) => o.assignedAgentId === 201));
    });
  }, []);

  const handleUpdate = async (id, status) => {
    await updateOrderStatus(id, status);
    setOrders(orders.map((o) => (o.id === id ? { ...o, status } : o)));
  };

  return (
    <div>
      <Typography variant="h6">Delivery Agent Dashboard</Typography>
      <List>
        {orders.map((o) => (
          <ListItem key={o.id}>
            <ListItemText
              primary={`${o.pickupAddress} → ${o.deliveryAddress}`}
              secondary={`Status: ${o.status}`}
            />
            {o.status !== "Delivered" && (
              <>
                <Button onClick={() => handleUpdate(o.id, "Picked Up")}>
                  Picked Up
                </Button>
                <Button onClick={() => handleUpdate(o.id, "In Transit")}>
                  In Transit
                </Button>
                <Button onClick={() => handleUpdate(o.id, "Delivered")}>
                  Delivered
                </Button>
              </>
            )}
          </ListItem>
        ))}
      </List>
    </div>
  );
}
