import {
  AppBar,
  Autocomplete,
  IconButton,
  Input,
  TextField,
  Toolbar,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Search } from "./search";

export const PageHeader = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Search />
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
