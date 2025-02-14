import { Input, InputBase, styled } from "@mui/material";
import { BasketIcon } from "../../../../svg/basket";
import { OrdersIcon } from "../../../../svg/orders";

export const HeaderWrap = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  gap: "35px",
  height: "64px",
});

export const SearchWrap = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  gap: "15px",
});

export const InputStyled = styled(InputBase)({
  width: 800,
});

export const BasketIconStyled = styled(BasketIcon)({
  width: "30px",
  height: "30px",

  cursor: "pointer",
});

export const OrdersIconStyled = styled(OrdersIcon)({
  width: "30px",
  height: "30px",

  cursor: "pointer",
});
