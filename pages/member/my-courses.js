import React, { useEffect, useState } from 'react';
import MemberCenterLayout from '@/components/layout/memberCenterLayout';
import MyCoursesComponent from '@/components/member/my-courses';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
export default function MyCourses() {
  const router = useRouter();
  const [data, setData] = useState({
    redirect: '',
    totalRows: 0,
    perPage: 6,
    totalPages: 0,
    page: 1,
    rows: [],
  });
  const getMyfavoriteProducts = async (page = 1) => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_PORT}/api/member/member-favorite-courses2?page=${page}`
    );
    if (res.data.output.rows > 0);
    {
      setData(() => {
        return { ...res.data.output };
      });
    }
  };
  useEffect(() => {
    getMyfavoriteProducts();
  }, []);
  useEffect(() => {
    if (router.query?.page) {
      console.log(router.query.page);
      getMyfavoriteProducts(router.query.page);
    }
  }, [router]);

  return (
    <>
      <MyCoursesComponent data={data} setData={setData} />
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: '',
          duration: 5000,
          style: {
            fontSize: '1.25rem',
            color: '#000',
          },

          // Default options for specific types
          success: {
            duration: 2000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />
    </>
  );
}
MyCourses.getLayout = (page) => <MemberCenterLayout>{page}</MemberCenterLayout>;
