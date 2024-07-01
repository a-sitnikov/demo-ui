import { Input, Table, TableProps } from "antd";
import { mockItems } from "../../../../mock-data/items";
import { IItem } from "../../../../mock-data/types";

const columns: TableProps<IItem>["columns"] = [
  {
    title: "Наименование",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Цена",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Кол-во",
    dataIndex: "Qty",
    key: "Qty",
    render: (_, { qty }) => <Input defaultValue={qty} />,
    width: 150,
  },
];

export const ItemsTable = () => {
  return <Table dataSource={mockItems} columns={columns} />;
};
