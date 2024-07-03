import {
  BasketIconStyled,
  HeaderWrap,
  OrdersIconStyled,
  SearchWrap,
} from "./ui";
import { mockCategories } from "../../../../mock-data/categories";
import { Avatar, Badge, Dropdown, Menu, MenuButton, MenuItem } from "@mui/joy";
import MenuIcon from "@mui/icons-material/Menu";
import { Search } from "./search";

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
        <Search />
      </SearchWrap>
      <OrdersIconStyled />
      <Badge badgeContent="4">
        <BasketIconStyled />
      </Badge>
      <Avatar size="lg" />
    </HeaderWrap>
  );
};
