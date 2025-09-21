import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Divider,
} from "@mui/material";
import { BugReport, PersonAdd, WifiTethering } from "@mui/icons-material";
import first from "../assets/1.svg";
import second from "../assets/2.svg";
import third from "../assets/3.svg";
import fourth from "../assets/4.svg";
import fifth from "../assets/5.svg";

// Example mock data
const notifications = [
  {
    icon: <BugReport fontSize="small" />,
    text: "You have a bug that needs...",
    time: "Just now",
  },
  {
    icon: <PersonAdd fontSize="small" />,
    text: "New user registered",
    time: "59 minutes ago",
  },
  {
    icon: <BugReport fontSize="small" />,
    text: "You have a bug that needs...",
    time: "12 hours ago",
  },
  {
    icon: <WifiTethering fontSize="small" />,
    text: "Andi Lane subscribed to you",
    time: "Today, 11:59 AM",
  },
];

const activities = [
  {
    avatar: first,
    text: "You have a bug that needs...",
    time: "Just now",
  },
  {
    avatar: second,
    text: "Released a new version",
    time: "59 minutes ago",
  },
  {
    avatar: third,
    text: "Submitted a bug",
    time: "12 hours ago",
  },
  {
    avatar: fourth,
    text: "Modified A data in Page X",
    time: "Today, 11:59 AM",
  },
  {
    avatar: fifth,
    text: "Deleted a page in Project X",
    time: "Feb 2, 2023",
  },
];

const contacts = [
  { avatar: first, name: "Natali Craig" },
  { avatar: second, name: "Drew Cano" },
  { avatar: third, name: "Orlando Diggs" },
  { avatar: fifth, name: "Andi Lane" },
  { avatar: fourth, name: "Kate Morrison" },
  { avatar: first, name: "Koray Okumus" },
];

export default function NotificationsPanel() {
  return (
    <Box
      sx={{
        minWidth: 320,
        bgcolor: "background.paper",
        p: 2,
        borderLeft: "1px solid #1C1C1C1A",
        maxHeight: "100vh",
        overflowY: "auto",
      }}
    >
      {/* Notifications */}
      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
        Notifications
      </Typography>
      <List disablePadding>
        {notifications.map((n, i) => (
          <ListItem key={i} sx={{ px: 0, alignItems: "center" }}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: "#A8C5DA", width: 28, height: 28 }}>
                {n.icon}
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={n.text} secondary={n.time} />
          </ListItem>
        ))}
      </List>

      {/* Divider */}
      <Divider sx={{ my: 2 }} />

      {/* Activities */}
      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
        Activities
      </Typography>
      <List disablePadding>
        {activities.map((a, i) => (
          <ListItem key={i} sx={{ px: 0, alignItems: "flex-start" }}>
            <ListItemAvatar>
              <Avatar src={a.avatar} sx={{ width: 28, height: 28 }} />
            </ListItemAvatar>
            <ListItemText primary={a.text} secondary={a.time} />
          </ListItem>
        ))}
      </List>

      {/* Divider */}
      <Divider sx={{ my: 2 }} />

      {/* Contacts */}
      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
        Contacts
      </Typography>
      <List disablePadding>
        {contacts.map((c, i) => (
          <ListItem key={i} sx={{ px: 0 }}>
            <ListItemAvatar>
              <Avatar src={c.avatar} sx={{ width: 28, height: 28 }} />
            </ListItemAvatar>
            <ListItemText primary={c.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
