import {
  InputBase,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { mockItems } from "../../../../mock-data/items";

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
    align: "center",
  },
];

export const ItemsTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((item) => (
              <TableCell
                key={item.key}
                align={item.align as any}
                width={item.width}
              >
                <b>{item.title}</b>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {mockItems.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell align="right">
                <TextField id="qty" variant="outlined" defaultValue={row.qty} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
