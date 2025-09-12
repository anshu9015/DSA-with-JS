// src/components/Customer.js
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Snackbar,
  TextField,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Checkbox,
  FormControlLabel,
  Grid,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";

const API = "http://localhost:5000";
const WAREHOUSE_ADDRESS = "Main Warehouse, City Center";

const Customer = ({ customerId = 1 }) => {
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [snackbar, setSnackbar] = useState({ open: false, message: "" });

  // Fetch customer's orders
  useEffect(() => {
    fetch(`${API}/orders?customerId=${customerId}`)
      .then((res) => res.json())
      .then(setOrders);
  }, [customerId]);

  // Fetch available products
  useEffect(() => {
    fetch(`${API}/products`)
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  const handleToggleProduct = (product) => {
    if (selectedProducts.includes(product)) {
      setSelectedProducts(selectedProducts.filter((p) => p !== product));
    } else {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  const handlePlaceOrder = async () => {
    if (selectedProducts.length === 0) {
      setSnackbar({
        open: true,
        message: "Please select at least one product",
      });
      return;
    }

    const newOrder = {
      customerId,
      pickupAddress: WAREHOUSE_ADDRESS,
      deliveryAddress,
      products: selectedProducts,
      status: "Pending",
      assignedAgentId: null,
      timestamp: new Date().toISOString(),
    };

    // Save order
    const res = await fetch(`${API}/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newOrder),
    });
    const orderData = await res.json();

    // Create a notification for agents
    await fetch(`${API}/notifications`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: "agent", // placeholder for filtering by role
        message: `New order #${
          orderData.id
        } placed with ${selectedProducts.join(", ")}`,
        timestamp: new Date().toISOString(),
      }),
    });

    setOrders([...orders, orderData]);
    setDeliveryAddress("");
    setSelectedProducts([]);
    setSnackbar({ open: true, message: "Order placed successfully!" });
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Customer Dashboard
      </Typography>

      {/* Place Order */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Place New Order
          </Typography>

          {/* Delivery Address */}
          <TextField
            fullWidth
            label="Delivery Address"
            value={deliveryAddress}
            onChange={(e) => setDeliveryAddress(e.target.value)}
            sx={{ mb: 2 }}
          />

          {/* Product List */}
          <Typography variant="subtitle1" gutterBottom>
            Select Products
          </Typography>
          <Grid container>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedProducts.includes(product.name)}
                      onChange={() => handleToggleProduct(product.name)}
                    />
                  }
                  label={product.name}
                />
              </Grid>
            ))}
          </Grid>

          <Button
            variant="contained"
            sx={{ mt: 2 }}
            onClick={handlePlaceOrder}
            disabled={!deliveryAddress}
          >
            Submit Order
          </Button>
        </CardContent>
      </Card>

      {/* Order History */}
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            My Orders
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Order ID</TableCell>
                <TableCell>Products</TableCell>
                <TableCell>Pickup</TableCell>
                <TableCell>Delivery</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.products?.join(", ")}</TableCell>
                  <TableCell>{order.pickupAddress}</TableCell>
                  <TableCell>{order.deliveryAddress}</TableCell>
                  <TableCell>{order.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Snackbar Notification */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ open: false, message: "" })}
      >
        <MuiAlert severity="success">{snackbar.message}</MuiAlert>
      </Snackbar>
    </Box>
  );
};

export default Customer;
