import { AutoComplete, Avatar, Button, Dropdown, Input } from "antd";
import {
  BasketIconStyled,
  HeaderStyled,
  OrdersIconStyled,
  SearchWrap,
} from "./ui";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";

export const PageHeader = () => {
  const menu = {
    items: [
      {
        key: "1",
        label: "Категория 1",
        children: [
          {
            key: "1.1",
            label: "Подкатегория 1.1",
          },
          {
            key: "1.2",
            label: "Подкатегория 1.2",
          },
        ],
      },
      {
        key: "2",
        label: "Категория 2",
        children: [
          {
            key: "2.1",
            label: "Подкатегория 2.1",
          },
          {
            key: "2.2",
            label: "Подкатегория 2.2",
          },
        ],
      },
    ],
  };

  return (
    <HeaderStyled>
      <SearchWrap>
        <Dropdown trigger={["click"]} menu={menu}>
          <Button type="primary" size="large" icon={<MenuOutlined />}>
            Каталог
          </Button>
        </Dropdown>
        <AutoComplete style={{ width: "300px" }} size="large">
          <Input.Search
            size="large"
            placeholder="Поиск товара"
            enterButton
            allowClear
          />
        </AutoComplete>
      </SearchWrap>
      <OrdersIconStyled />
      <BasketIconStyled />
      <Avatar size="large" icon={<UserOutlined />} />
    </HeaderStyled>
  );
};
