export const getStatusColor = (status) => {
  switch (status) {
    case "Complete":
      return { color: "success" };
    case "In Progress":
      return { color: "info" };
    case "Pending":
      return { color: "warning" };
    case "Approved":
      return { color: "warning" };
    case "Rejected":
      return { color: "error" };
    default:
      return { color: "default" };
  }
};

export const getFilteredOrders = (orders, query) =>
  orders.filter((o) => {
    const combined =
      `${o.id} ${o.user.name} ${o.project} ${o.address}`.toLowerCase();
    return combined.includes(String(query).toLowerCase());
  });

export const getSortedOrders = (orders, sortAsc) =>
  [...orders].sort((a, b) => {
    const numA = parseInt(a.id.replace("#CM", ""), 10);
    const numB = parseInt(b.id.replace("#CM", ""), 10);
    return sortAsc ? numA - numB : numB - numA;
  });
