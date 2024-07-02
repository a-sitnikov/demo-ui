import { SearchIconWrapper, SearchStyled, StyledInputBase } from "./ui";
import SearchIcon from "@mui/icons-material/Search";

export const Search = () => {
  return (
    <SearchStyled>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Найти товар"
        inputProps={{ "aria-label": "search" }}
      />
    </SearchStyled>
  );
};
