import first from "../assets/1.svg";
import second from "../assets/2.svg";
import third from "../assets/3.svg";
import fourth from "../assets/4.svg";
import fifth from "../assets/5.svg";

export const cardColors = {
  light: [
    { bg: "#E3F5FF", text: "rgba(0, 0, 0, 0.87)" }, // Customers - light blue
    { bg: "#F7F9FB", text: "rgba(0, 0, 0, 0.87)" }, // Orders - very light gray
    { bg: "#F7F9FB", text: "rgba(0, 0, 0, 0.87)" }, // Revenue - very light gray
    { bg: "#E5ECF6", text: "rgba(0, 0, 0, 0.87)" }, // Growth - light blue-gray
  ],
  dark: [
    { bg: "#E3F5FF", text: "#1C1C1C" }, // Customers - dark blue tint
    { bg: "rgba(66, 66, 66, 0.15)", text: "#fff" }, // Orders - dark gray
    { bg: "rgba(66, 66, 66, 0.15)", text: "#fff" }, // Revenue - dark gray
    { bg: "#E5ECF6", text: "#1C1C1C" }, // Growth - dark blue-gray
  ],
};

export const COMMON_GRID_STYLE = {
  light: {
    bg: "#F7F9FB",
    text: "rgba(0, 0, 0, 0.87)",
  },
  dark: {
    bg: "rgba(66, 66, 66, 0.15)",
    text: "#fff",
  },
};

export const gridStyle = {
  borderRadius: "16px",
  padding: "24px",
};

export const TOP_SELLING_MOCK = {
  cols: [
    { id: "name", label: "Product Name" },
    { id: "price", label: "Price", align: "right" },
    { id: "quantity", label: "Quantity", align: "right" },
    { id: "amount", label: "Amount", align: "right" },
  ],
  rows: [
    {
      name: "ASOS Ridley High Waist",
      price: 79.49,
      quantity: 82,
      amount: 6518.18,
    },
    {
      name: "Marco Lightweight Shirt",
      price: 128.5,
      quantity: 37,
      amount: 4754.5,
    },
    {
      name: "Half Sleeve Shirt",
      price: 39.99,
      quantity: 64,
      amount: 2559.36,
    },
    {
      name: "Lightweight Jacket",
      price: 20.0,
      quantity: 184,
      amount: 3680.0,
    },
    {
      name: "Marco Shoes",
      price: 79.49,
      quantity: 64,
      amount: 1965.81,
    },
  ],
};

export const TOP_SALES_DATA = [
  { name: "Direct", value: 300.56, color: "#000000" },
  { name: "Affiliate", value: 135.18, color: "#A8E6A3" },
  { name: "Sponsored", value: 154.02, color: "#8C9EFF" },
  { name: "E-mail", value: 48.96, color: "#81D4FA" },
];

export const REVENUE_BY_LOCATION_MOCK = [
  { name: "New York", value: 72, label: "72K" },
  { name: "San Francisco", value: 39, label: "39K" },
  { name: "Sydney", value: 25, label: "25K" },
  { name: "Singapore", value: 61, label: "61K" },
];

export const METRICS = [
  {
    title: "Customers",
    value: "3,781",
    change: "+11.01%",
    up: true,
    colorIndex: 0,
  },
  {
    title: "Orders",
    value: "1,219",
    change: "-0.03%",
    up: false,
    colorIndex: 1,
  },
  {
    title: "Revenue",
    value: "$695",
    change: "+15.03%",
    up: true,
    colorIndex: 2,
  },
  {
    title: "Growth",
    value: "30.1%",
    change: "+6.08%",
    up: true,
    colorIndex: 3,
  },
];

export const REVENUE_CHART_MOCK = [
  { month: "Jan", current: 12, previous: 7 },
  { month: "Feb", current: 8, previous: 15 },
  { month: "Mar", current: 9, previous: 13 },
  { month: "Apr", current: 14, previous: 10 },
  { month: "May", current: 20, previous: 12 },
  { month: "Jun", current: 22, previous: 18 },
];

export const CHART_STROKE_COLOR_1 = {
  light: "black",
  dark: "#C6C7F8", // light blue
};

export const CHART_STROKE_COLOR_2 = {
  light: "#90caf9", // light blue
  dark: "#A8C5DA", // muted blue
};

export const ORDER_LIST_ACTIONS_STYLES = {
  light: {
    bg: "#F7F9FB",
    color: "rgba(0, 0, 0, 0.87)",
  },
  dark: {
    bg: "#292929",
    color: "#1C1C1C",
  },
};

export const ORDERS_MOCK = {
  cols: [
    { id: "order_id", label: "Order ID" },
    { id: "user", label: "User" },
    { id: "project", label: "Project" },
    { id: "address", label: "Address" },
    { id: "date", label: "Date" },
    { id: "status", label: "Status" },
  ],
  rows: [
    {
      id: "#CM9806",
      user: { name: "Sophie Turner", avatar: "/avatars/sophie.jpg" },
      project: "E-Commerce Platform",
      address: "Broadway New York",
      date: "2 hours ago",
      status: "In Progress",
      avatar: first,
    },
    {
      id: "#CM9807",
      user: { name: "Michael Chen", avatar: "/avatars/michael.jpg" },
      project: "Marketing Dashboard",
      address: "Mission District SF",
      date: "Today",
      status: "Complete",
      avatar: second,
    },
    {
      id: "#CM9808",
      user: { name: "Emma Wilson", avatar: "/avatars/emma.jpg" },
      project: "Portfolio Website",
      address: "Lincoln Park Chicago",
      date: "3 days ago",
      status: "Pending",
      avatar: third,
    },
    {
      id: "#CM9809",
      user: { name: "Lucas Martin", avatar: "/avatars/lucas.jpg" },
      project: "Mobile Banking App",
      address: "Sunset Blvd LA",
      date: "Jan 28, 2023",
      status: "Approved",
      avatar: fourth,
    },
    {
      id: "#CM9810",
      user: { name: "Isabella Green", avatar: "/avatars/isabella.jpg" },
      project: "HR Management System",
      address: "Capitol Hill Seattle",
      date: "Jan 15, 2023",
      status: "Rejected",
      avatar: fifth,
    },
    {
      id: "#CM9811",
      user: { name: "Daniel Lee", avatar: "/avatars/daniel.jpg" },
      project: "Social Media App",
      address: "King Street Toronto",
      date: "5 minutes ago",
      status: "In Progress",
      avatar: first,
    },
    {
      id: "#CM9812",
      user: { name: "Olivia Brown", avatar: "/avatars/olivia.jpg" },
      project: "Restaurant POS System",
      address: "Market Street Denver",
      date: "Yesterday",
      status: "Complete",
      avatar: second,
    },
    {
      id: "#CM9813",
      user: { name: "Ethan Walker", avatar: "/avatars/ethan.jpg" },
      project: "Fitness Tracker",
      address: "Queens New York",
      date: "2 weeks ago",
      status: "Pending",
      avatar: third,
    },
    {
      id: "#CM9814",
      user: { name: "Sophia Davis", avatar: "/avatars/sophia.jpg" },
      project: "Inventory App",
      address: "Union Square Boston",
      date: "Feb 5, 2023",
      status: "Approved",
      avatar: fourth,
    },
    {
      id: "#CM9815",
      user: { name: "James Miller", avatar: "/avatars/james.jpg" },
      project: "Learning Platform",
      address: "Bay Area San Jose",
      date: "Feb 1, 2023",
      status: "Rejected",
      avatar: fifth,
    },
  ],
};
