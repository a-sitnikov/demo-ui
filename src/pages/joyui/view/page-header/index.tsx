import {
  BasketIconStyled,
  HeaderWrap,
  InputStyled,
  OrdersIconStyled,
  SearchWrap,
} from "./ui";

import { mockCategories } from "../../../../mock-data/categories";
import {
  Avatar,
  Button,
  Dropdown,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@mui/joy";
import MenuIcon from "@mui/icons-material/Menu";

export const PageHeader = () => {
  return (
    <HeaderWrap>
      <SearchWrap>
        <Dropdown>
          <MenuButton
            size="lg"
            variant="solid"
            color="primary"
            startDecorator={<MenuIcon />}
          >
            Каталог
          </MenuButton>
          <Menu>
            {mockCategories.map((item) => (
              <MenuItem key={item.id}>{item.name}</MenuItem>
            ))}
          </Menu>
        </Dropdown>
        <InputStyled
          size="lg"
          placeholder="Найти товар"
          endDecorator={
            <Button variant="solid" color="primary" size="lg">
              Найти
            </Button>
          }
        />
      </SearchWrap>
      <OrdersIconStyled />
      <BasketIconStyled />
      <Avatar size="lg" />
    </HeaderWrap>
  );
};
