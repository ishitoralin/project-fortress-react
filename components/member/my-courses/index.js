import { useState, useEffect } from 'react';
import styles from '../member.module.css';
import CoursesTable from './courses-table';
import MemberPagenation from '../member-pagenation';

export default function MyCourses({ data, setData }) {
  return (
    <div className={`${styles['my-container']}`}>
      {data?.rows.length > 0 ? (
        <>
          <CoursesTable data={data} setData={setData} />
          <MemberPagenation data={data} />
        </>
      ) : (
        '目前沒有收藏課程喔'
      )}
    </div>
  );
}
