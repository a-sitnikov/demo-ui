import { Button, InputAdornment } from "@mui/material";
import { ButtonStyled, TextFieldStyled } from "./ui";
import SearchIcon from "@mui/icons-material/Search";

export const Search = () => {
  return (
    <TextFieldStyled
      variant="outlined"
      placeholder="Найти товар"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <ButtonStyled
              variant="contained"
              size="large"
              startIcon={<SearchIcon />}
            >
              Найти
            </ButtonStyled>
          </InputAdornment>
        ),
      }}
    />
  );
};
