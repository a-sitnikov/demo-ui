import {
  BasketIconStyled,
  HeaderWrap,
  OrdersIconStyled,
  SearchWrap,
} from "./ui";

import { mockCategories } from "../../../../mock-data/categories";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import { Search } from "./search";
import { Avatar, Badge, Button } from "@mui/material";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export const PageHeader = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <HeaderWrap>
      <SearchWrap>
        <Button
          variant="contained"
          startIcon={<MenuIcon />}
          size="large"
          onClick={handleClick}
        >
          Каталог
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {mockCategories.map((item) => (
            <MenuItem key={item.id} onClick={handleClose}>
              {item.name}
            </MenuItem>
          ))}
        </Menu>
        <Search />
      </SearchWrap>
      <OrdersIconStyled />
      <Badge badgeContent={4} color="primary">
        <BasketIconStyled />
      </Badge>
      <Avatar sx={{ width: 45, height: 45 }}>
        <PersonIcon />
      </Avatar>
    </HeaderWrap>
  );
};
