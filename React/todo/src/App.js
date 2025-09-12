import React, { useState } from "react";
import { Container, Tabs, Tab, Box } from "@mui/material";
import Customer from "./Components/Customer";
import Agent from "./Components/Agent";
import Admin from "./Components/Admin";
import Navbar from "./layout/Navbar";

export default function App() {
  const [tab, setTab] = useState(0);

  return (
    <Container>
      <Navbar />
      <Box sx={{ borderBottom: 1, borderColor: "divider", mt: 2 }}>
        <Tabs value={tab} onChange={(e, newVal) => setTab(newVal)}>
          <Tab label="Customer" />
          <Tab label="Delivery Agent" />
          <Tab label="Admin" />
        </Tabs>
      </Box>
      <Box sx={{ mt: 2 }}>
        {tab === 0 && <Customer />}
        {tab === 1 && <Agent />}
        {tab === 2 && <Admin />}
      </Box>
    </Container>
  );
}
