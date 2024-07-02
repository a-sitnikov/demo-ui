import { AutoComplete, Avatar, Button, Dropdown, Input } from "antd";
import {
  BasketIconStyled,
  HeaderStyled,
  OrdersIconStyled,
  SearchWrap,
} from "./ui";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import { useMemo } from "react";
import { mockCategories } from "../../../../mock-data/categories";
import { ICategory } from "../../../../mock-data/types";
import { ItemType } from "antd/es/menu/interface";

const mapItem = (item: ICategory): ItemType => {
  return {
    key: item.id,
    label: item.name,
    children: item.children?.map(mapItem),
  };
};

export const PageHeader = () => {
  const menu = useMemo(
    () => ({
      items: mockCategories.map(mapItem),
    }),
    []
  );

  return (
    <HeaderStyled>
      <SearchWrap>
        <Dropdown trigger={["click"]} menu={menu}>
          <Button type="primary" size="large" icon={<MenuOutlined />}>
            Каталог
          </Button>
        </Dropdown>
        <AutoComplete style={{ width: "600px" }} size="large">
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
