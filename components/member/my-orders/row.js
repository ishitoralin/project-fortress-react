import { useState } from 'react';
import {
  Box,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import Collapse from '@mui/material/Collapse';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import styles from '../member-table.module.css';

export default function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);
  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.main_sid}
        </TableCell>
        {/*  sid,
    buytime,
    buy_time,
    pay_time,
    method_sid,
    , */}
        <TableCell align="right">{row.buy_time}</TableCell>
        <TableCell align="right">{row.pay_time}</TableCell>
        <TableCell align="right">{row.method_sid}</TableCell>
        <TableCell align="right">{console.log(row.rows)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                詳細細節
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">商品編號</TableCell>
                    <TableCell>商品名稱</TableCell>
                    <TableCell>商品圖片</TableCell>
                    <TableCell align="right">單價</TableCell>
                    <TableCell align="right">數量</TableCell>
                    <TableCell align="right">小計</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.rows.map((row) => (
                    <TableRow key={row.detail_sid}>
                      <TableCell component="th" scope="row" align="center">
                        {row.pid}
                      </TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>
                        <img
                          className={styles['td-img']}
                          src={`${
                            process.env.NEXT_PUBLIC_BACKEND_PORT
                          }/imgs/product/${row.picture.split(',')[0]}`}
                          alt="商品圖片"
                        />
                      </TableCell>
                      <TableCell align="right">{row.price}</TableCell>
                      <TableCell align="right">{row.quantity}</TableCell>
                      <TableCell align="right">
                        {row.price * row.quantity}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
