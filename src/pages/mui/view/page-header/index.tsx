import {
  AppBar,
  Autocomplete,
  IconButton,
  Input,
  TextField,
  Toolbar,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

export const PageHeader = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Autocomplete
          freeSolo
          options={[]}
          renderInput={(params) => (
            <Input {...params} placeholder="Найти товар" />
          )}
        />
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
