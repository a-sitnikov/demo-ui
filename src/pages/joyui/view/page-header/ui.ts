import { styled } from "@mui/joy/styles";
import { BasketIcon } from "../../../../svg/basket";
import { OrdersIcon } from "../../../../svg/orders";
import { Input } from "@mui/joy";

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

export const InputStyled = styled(Input)({
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
