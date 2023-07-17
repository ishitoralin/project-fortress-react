import { useState, useEffect } from 'react';
import styles from '../member.module.css';
import CoursesTable from './courses-table';
import MemberPagenation from '../member-pagenation';

function createData(name, coach, start, duration, price, sid) {
  return { name, coach, start, duration, price, sid };
}
const rows = [
  createData(
    '一二三四五六七八九十一二三四五六七八',
    '一二n4',
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
export default function MyCourses() {
  const [data, setData] = useState({
    redirect: '',
    totalRows: 0,
    perPage: 4,
    totalPages: 0,
    page: 1,
    rows: [],
  });
  useEffect(() => {
    setData((prev) => {
      return { ...prev, rows };
    });
    return () => {};
  }, []);

  return (
    <div className={`${styles['my-container']}`}>
      {data?.rows.length > 0 ? (
        <>
          <CoursesTable data={data} />
          <MemberPagenation data={data} />
        </>
      ) : (
        '目前沒有收藏課程喔'
      )}
    </div>
  );
}
