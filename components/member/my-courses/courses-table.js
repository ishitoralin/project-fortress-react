import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import tableStyles from '../member-table.module.css';

function createData(name, coach, start, duration, price, sid) {
  return { name, coach, start, duration, price, sid };
}

const rows = [
  createData(
    '一二三四五六七八九十一二三四五六七八',
    '一二三',
    '2023-03-05 11:00:00',
    60,
    1000,
    2
  ),
  createData('一二三四五六七八', '一二三', '2023-03-05 11:00:00', 60, 10000, 6),
  createData(
    '一二三四五六七八九十一二三四五六七八',
    '一二三',
    '2023-03-05 11:00:00',
    60,
    10000,
    3
  ),
  createData('一二三四五六七八', '一二三', '2023-03-05 11:00:00', 60, 10000, 5),
  createData(
    '一二三四五六七八九十一二三四五六七八',
    '一二三',
    '2023-03-05 11:00:00',
    60,
    10000,
    4
  ),
];

export default function CoursesTable() {
  return (
    <TableContainer
      className={`${tableStyles['paper-container']}`}
      component={Paper}
    >
      <Table
        className={`${tableStyles['table']}`}
        //   sx={{ minWidth: 650 }}
      >
        <TableHead className={`${tableStyles['table-head']}`}>
          <TableRow>
            <TableCell>課程名稱</TableCell>
            <TableCell>擔當教練</TableCell>
            <TableCell>開始時間</TableCell>
            <TableCell>課程時長</TableCell>
            <TableCell>課程價格</TableCell>
            <TableCell>取消收藏</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              className={`${tableStyles['table-body-row']}`}
              key={row.sid}
              //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell data-title="課程名稱 : ">{row.name}</TableCell>
              <TableCell data-title="擔當教練 : ">{row.coach}</TableCell>
              <TableCell data-title="開始時間 : ">{row.start}</TableCell>
              <TableCell data-title="課程時長 : ">{row.duration}小時</TableCell>
              <TableCell data-title="課程價格 : ">{row.price}$</TableCell>
              <TableCell
                onClick={() => {
                  console.log(row.sid);
                }}
              >
                <DeleteIcon className={`${tableStyles['delete-icon']}`} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
