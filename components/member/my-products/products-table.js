import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './my-products.module.css';

function createData(name, picture, price, sid) {
  return { name, picture, price, sid };
}

const rows = [
  createData(
    'Triban Essential 吸濕排汗短袖公路自行車騎行服男式',
    '一二三',
    6000,
    2
  ),
  createData(
    'Triban Essential 吸濕排汗短袖公路自行車騎行服男式',
    '一二三',
    6000,
    3
  ),
  createData(
    'Triban Essential 吸濕排汗短袖公路自行車騎行服男式',
    '一二三',
    6000,
    4
  ),
  createData(
    'Triban Essential 吸濕排汗短袖公路自行車騎行服男式',
    '一二三',
    6000,
    5
  ),
  createData(
    'Triban Essential 吸濕排汗短袖公路自行車騎行服男式',
    '一二三',
    6000,
    6
  ),
];

export default function ProductsTable() {
  return (
    <TableContainer
      className={`${styles['paper-container']}`}
      component={Paper}
    >
      <Table
        className={`${styles['table']}`}
        //   sx={{ minWidth: 650 }}
      >
        <TableHead className={`${styles['table-head']}`}>
          <TableRow>
            <TableCell>商品名稱</TableCell>
            <TableCell>商品圖片</TableCell>
            <TableCell>商品價格</TableCell>
            <TableCell>取消收藏</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              className={`${styles['table-body-row']}`}
              key={row.sid}
              //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell data-title="商品名稱 : ">{row.name}</TableCell>
              <TableCell>{row.picture}</TableCell>
              <TableCell data-title="商品價格 : ">{row.price}$</TableCell>
              <TableCell
                onClick={() => {
                  console.log(row.sid);
                }}
              >
                <DeleteIcon className={`${styles['delete-icon']}`} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
