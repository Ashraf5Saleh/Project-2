import { AppBar, Toolbar, Box, Button, IconButton } from "@mui/material";
import { Facebook, Twitter, LinkedIn, Google } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "black", color: "black" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box component="img"
          src="https://foodbooz.com/html/organic_food/multipage/assets/images/logo.png"
          alt="Logo"
          sx={{ height: 40 }}
        />

        <Box sx={{ display: "flex", gap: 3 }}>
          <Button
            component={Link}
            to= '/'
            sx={{
              color: "white",
              fontWeight: "bold",
              "&:hover": { color: "grey.800" },
            }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to='/About'
            sx={{
              color: "white",
              fontWeight: "bold",
              "&:hover": { color: "grey.800" },
            }}
          >
            About
          </Button>
          <Button
          component={Link}
          to='/Menu'
            sx={{
              color: "white",
              fontWeight: "bold",
              "&:hover": { color: "grey.800" },
            }}
          >
            Menu
          </Button>
          <Button
          component={Link}
          to='/Contact'
            sx={{
              color: "white",
              fontWeight: "bold",
              "&:hover": { color: "grey.800" },
            }}
          >
            Contact
          </Button>
        </Box>


        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton sx={{ color: "white", "&:hover": { color: "grey.800" } }}>
            <Facebook />
          </IconButton>
          <IconButton sx={{ color: "white", "&:hover": { color: "grey.800" } }}>
            <Twitter />
          </IconButton>
          <IconButton sx={{ color: "white", "&:hover": { color: "grey.800" } }}>
            <LinkedIn />
          </IconButton>
          <IconButton sx={{ color: "white", "&:hover": { color: "grey.800" } }}>
            <Google />
          </IconButton>
        </Box>

      </Toolbar>
    </AppBar>
  );
}
