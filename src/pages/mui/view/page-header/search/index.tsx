import { Button, InputAdornment } from "@mui/material";
import { TextFieldStyled } from "./ui";
import SearchIcon from "@mui/icons-material/Search";

export const Search = () => {
  return (
    <TextFieldStyled
      variant="outlined"
      placeholder="Найти товар"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Button variant="contained" startIcon={<SearchIcon />}>
              Найти
            </Button>
          </InputAdornment>
        ),
      }}
    />
  );
};
