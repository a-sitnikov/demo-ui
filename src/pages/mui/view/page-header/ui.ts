import { Header } from "antd/es/layout/layout";
import styled from "styled-components";
import { BasketIcon } from "../../../../svg/basket";
import { OrdersIcon } from "../../../../svg/orders";

export const HeaderStyled = styled(Header)`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 35px;

  background-color: white;
`;

export const SearchWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 15px;
`;

export const BasketIconStyled = styled(BasketIcon)`
  width: 30px;
  height: 30px;

  cursor: pointer;
`;

export const OrdersIconStyled = styled(OrdersIcon)`
  width: 30px;
  height: 30px;

  cursor: pointer;
`;
