import React from 'react';
import MemberCenterLayout from '@/components/layout/memberCenterLayout';
import styles from '@/styles/member.module.css';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useFormik } from 'formik';
import * as yup from 'yup';
const validationSchema = yup.object({});
export default function Index() {
  const filed = [
    {
      label: '姓名',
      placeholder: '',
      name: 'name',
      type: 'text',
      value: '',
      disable: true,
    },
    {
      label: '電子信箱',
      placeholder: '',
      name: 'email',
      type: 'text',
      value: '',
      disable: true,
    },
    {
      label: '性別',
      placeholder: '',
      name: 'gender',
      type: '',
      value: '',
      disable: true,
    },
  ];
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="center-container">
      <div className={`${styles['photo']}`}>
        <CameraAltIcon className={`${styles['camera']}`} fontSize="large" />
      </div>
      <div className={`${styles['info']}`}>
        {filed.map((el) => {
          const { label, name, placeholder, type } = el;
          return (
            <CUITextField
              key={name}
              label={label}
              placeholder={placeholder}
              name={name}
              type={type}
              value={formik.values[name]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched[name] && Boolean(formik.errors[name])}
              helperText={formik.touched[name] && formik.errors[name]}
              autoComplete="off"
              sx={{ marginBottom: '-15px' }}
            />
          );
        })}
      </div>
    </div>
  );
}

Index.getLayout = (page) => <MemberCenterLayout>{page}</MemberCenterLayout>;
