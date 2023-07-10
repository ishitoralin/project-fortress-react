import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import MemberLayout from '@/components/layout/memberLayout';
import styles from '@/styles/member.module.css';
import Logo from '@/assets/logo';
import { DEEPGREY, MAIN_BLACK } from '@/assets/color-code';
import { Typography } from '@mui/material';
import AuthLink from '@/components/member/auth/auth-link';
import Link from 'next/link';
import CUITextField from '@/components/customUI/cui-textfield';
import CUIButton from '@/components/customUI/cui-button';
const validationSchema = yup.object({
  email: yup
    .string('請輸入信箱')
    .email('錯誤的信箱格式')
    .required('信箱為必填欄位'),
  name: yup.string('請輸入姓名').required('姓名為必填欄位'),
  password: yup
    .string('請輸入密碼')
    .matches(/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/, '密碼需有1個英文字和1個數字')
    .min(6, '密碼長度需介於6-8個字')
    .max(8, '密碼長度需介於6-8個字')
    .required('密碼為必填欄位'),
  confirmpassword: yup
    .string('請再次輸入密碼')
    .test('passwords-match', '密碼需相符', function (value) {
      return this.parent.password === value;
    }),
});
export default function Login() {
  const filed = [
    {
      label: '姓名',
      placeholder: '',
      name: 'name',
      type: 'text',
      value: '',
    },
    {
      label: '電子信箱',
      placeholder: '',
      name: 'email',
      type: 'text',
      value: '',
    },
    {
      label: '密碼',
      placeholder: '',
      name: 'password',
      type: 'password',
      value: '',
    },
    {
      label: '確認密碼',
      placeholder: '',
      name: 'confirmpassword',
      type: 'password',
    },
  ];
  const formik = useFormik({
    initialValues: { name: '', email: '', password: '', confirmpassword: '' },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <div className={`${styles.bg}`}></div>
      <div className={`${styles['panel-section']}`}>
        <div className={`${styles['logo-container']}`}>
          <div className={`${styles['logo-container-bg']}`}></div>
          <Link href="/">
            <Logo fill={MAIN_BLACK} className={styles.logo} />
          </Link>
        </div>

        <form onSubmit={formik.handleSubmit} className={styles['right-panel']}>
          <div className={`${styles['right-panel-bg']}`}></div>
          <Typography variant="h4">登入帳號</Typography>
          {['sign-up', 'forgot-password'].map((el) => (
            <AuthLink key={el} path={el} />
          ))}
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
                // autoComplete="off"
              />
            );
          })}
          <CUIButton fullWidth type="submit">
            登入
          </CUIButton>
          <Typography variant="span" sx={{ color: DEEPGREY }}>
            第三方登入
          </Typography>
          <div className={styles['back-cover']}></div>
          <div className={styles['front-cover']}></div>
        </form>
      </div>
    </>
  );
}
Login.getLayout = (page) => <MemberLayout>{page}</MemberLayout>;
