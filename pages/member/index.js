import React, { useEffect, useState } from 'react';
import MemberCenterLayout from '@/components/layout/memberCenterLayout';
import styles from '@/styles/member.module.css';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useFormik } from 'formik';
import * as yup from 'yup';
import CUITextField from '@/components/customUI/cui-textfield';
import CUIDatePicker from '@/components/customUI/cui-date-picker';
import CUISelect from '@/components/customUI/cui-select';
import CUIButton from '@/components/customUI/cui-button';

const validationSchema = yup.object({});
export default function Index() {
  const initialData = {
    name: '',
    email: '',
    sex: '',
    address: '',
    birth: '',
    mobile: '',
  };
  const formikInitialData = {
    sex: '',
    address: '',
    birth: '',
    mobile: '',
  };
  const [data, setData] = useState(initialData);
  const [displayData, setDisplayData] = useState(initialData);
  const formik = useFormik({
    initialValues: formikInitialData,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const valuesCopied = { ...values };
      delete valuesCopied['name'];
      delete valuesCopied['email'];
      //抹掉不必要欄位 valuesCopied為要 UPDATE的資料
      console.log(JSON.stringify(valuesCopied, null, 2));
    },
  });
  useEffect(() => {
    console.log('fetch');
    setData({
      sex: '不透露',
      address: '台北市北投區復興二路29號',
      birth: '2023-05-10',
      mobile: '0918183537',
    });
    formik.setValues({
      sex: '不透露',
      address: '台北市北投區復興二路29號',
      birth: '2023-05-10',
      mobile: '0918183537',
    });
    setData({
      name: '王曉明',
      email: 'asdf@gmail.com',
      sex: '不透露',
      address: '台北市北投區復興二路29號',
      birth: '2023-05-10',
      mobile: '0918183537',
    });
    setDisplayData({
      name: '王曉明',
      email: 'asdf@gmail.com',
      sex: '不透露',
      address: '台北市北投區復興二路29號',
      birth: '2023-05-10',
      mobile: '0918183537',
    });
  }, []);
  useEffect(() => {
    setDisplayData({ ...data, ...formik.values });
  }, [formik.values]);
  const filed = [
    {
      label: '姓名',
      placeholder: '',
      name: 'name',
      type: 'text',
      disabled: true,
    },
    {
      label: '電子信箱',
      placeholder: '',
      name: 'email',
      type: 'text',
      disabled: true,
    },
    {
      label: '性別',
      placeholder: '',
      name: 'sex',
      type: 'select',
      disabled: false,
    },
    { label: '地址', placeholder: '請輸入地址', name: 'address', type: 'text' },
    { label: '生日', placeholder: '請輸入生日', name: 'birth', type: 'date' },
    {
      label: '手機',
      placeholder: 'ex:0912345678',
      name: 'mobile',
      type: 'text',
    },
  ];
  return (
    <div className={`${styles['center-container']}`}>
      <div className={`${styles['photo']}`}>
        <CameraAltIcon className={`${styles['camera']}`} fontSize="large" />
      </div>
      <form onSubmit={formik.handleSubmit} className={`${styles['info']}`}>
        {filed.map((el) => {
          const { label, name, placeholder, type, disabled = false } = el;
          if (disabled) {
            return (
              <CUITextField
                key={name}
                value={displayData[name]}
                label={label}
                disabled
              />
            );
          }
          if (type === 'date') {
            return (
              <CUIDatePicker
                key={name}
                value={displayData[name]}
                label={label}
                format="YYYY-MM-D"
                onChange={(e) => {
                  formik.setValues((v) => {
                    return { ...v, [name]: e };
                  });
                }}
              />
            );
          }
          if (type === 'select') {
            return (
              <CUISelect
                label={label}
                options={['男', '女', '不透露']}
                key={name}
                value={displayData[name]}
                onChange={(e) => {
                  formik.setValues((v) => {
                    return { ...v, [name]: e.target.value };
                  });
                }}
              />
            );
          }
          return (
            <CUITextField
              key={name}
              label={label}
              placeholder={placeholder}
              name={name}
              type={type}
              value={displayData[name]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched[name] && Boolean(formik.errors[name])}
              helperText={formik.touched[name] && formik.errors[name]}
              autoComplete="off"
              disabled={disabled}
              sx={{ marginBottom: '-15px' }}
            />
          );
        })}
        <CUIButton
          onClick={() => {
            formik.setValues(data);
          }}
        >
          重置
        </CUIButton>
        <CUIButton type="submit">儲存並變更</CUIButton>
      </form>
    </div>
  );
}

Index.getLayout = (page) => <MemberCenterLayout>{page}</MemberCenterLayout>;
