import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import Row from './row';

export default function OrdersTable({ data }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>訂單編號</TableCell>
            <TableCell align="right">購買日期</TableCell>
            <TableCell align="right">付款時間</TableCell>
            <TableCell align="right">付款方式</TableCell>
            <TableCell align="right">總金額</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
