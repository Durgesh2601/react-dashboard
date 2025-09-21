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
