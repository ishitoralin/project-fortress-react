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
import Link from 'next/link';

export default function CoursesTable({ data }) {
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
          {data.rows.map((row) => (
            <TableRow
              className={`${tableStyles['table-body-row']}`}
              key={row.sid}
              //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell data-title="課程名稱 : ">
                <Link href="/lesson/1">{row.name}</Link>
              </TableCell>
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
