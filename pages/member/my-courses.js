import MemberCenterLayout from '@/components/layout/memberCenterLayout';
import MyCoursesComponent from '@/components/member/my-courses';
import { Toaster } from 'react-hot-toast';
export default function MyCourses() {
  return (
    <>
      <MyCoursesComponent />
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
