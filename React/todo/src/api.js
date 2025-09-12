const API_URL = "http://localhost:5000";

// Orders
export const fetchOrders = async () => {
  const res = await fetch(`${API_URL}/orders`);
  return res.json();
};

export const addOrder = async (order) => {
  const res = await fetch(`${API_URL}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order),
  });
  return res.json();
};

export const updateOrderStatus = async (id, status) => {
  const res = await fetch(`${API_URL}/orders/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  });
  return res.json();
};

export const assignOrder = async (id, agentId) => {
  const res = await fetch(`${API_URL}/orders/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ assignedAgentId: agentId }),
  });
  return res.json();
};

// ✅ Notifications
export const fetchNotifications = async (userId) => {
  const res = await fetch(`${API_URL}/notifications?userId=${userId}`);
  return res.json();
};

export const addNotification = async (notification) => {
  const res = await fetch(`${API_URL}/notifications`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(notification),
  });
  return res.json();
};
