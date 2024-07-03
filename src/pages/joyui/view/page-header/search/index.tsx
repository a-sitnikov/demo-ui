import { Button } from "@mui/joy";
import { InputStyled } from "../ui";
import SearchIcon from "@mui/icons-material/Search";

export const Search = () => {
  return (
    <InputStyled
      size="lg"
      placeholder="Найти товар"
      endDecorator={
        <Button
          variant="solid"
          color="primary"
          size="lg"
          startDecorator={<SearchIcon />}
        >
          Найти
        </Button>
      }
    />
  );
};
