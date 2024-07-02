import { mockItems } from "../../../../mock-data/items";
import { IItem } from "../../../../mock-data/types";
import { Input, Table } from "@mui/joy";

const columns = [
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
    width: 150,
  },
];

export const ItemsTable = () => {
  return (
    <Table>
      <thead>
        <tr>
          {columns.map((item) => (
            <th key={item.key} style={{ width: item.width }}>
              {item.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {mockItems.map((row) => (
          <tr key={row.id}>
            <td>{row.name}</td>
            <td>{row.price}</td>
            <td>
              <Input defaultValue={row.price} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
