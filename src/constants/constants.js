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

export const RevenueChart = {
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
