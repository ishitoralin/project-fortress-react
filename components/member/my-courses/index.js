import { useState, useEffect } from 'react';
import styles from './my-courses.module.css';
import CoursesTable from './courses-table';
import MemberPagenation from '../member-pagenation';

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
    return () => {};
  }, []);

  return (
    <div className={`${styles['my-courses-container']}`}>
      <CoursesTable data={data} />
      <MemberPagenation data={data} />
    </div>
  );
}
