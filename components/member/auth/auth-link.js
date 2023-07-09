import React from 'react';
import Link from 'next/link';
import { Typography } from '@mui/material';
import { LIGHT_GRAY2 } from '@/assets/color-code';

export default function AuthLink({ path }) {
  const content = { first: '', last: '' };

  switch (path) {
    case 'sign-up':
      content.first = '沒有帳號嗎? ';
      content.last = '註冊帳號';
      break;
    case 'login':
      content.first = '已經有帳號了? ';
      content.last = '登入帳號';
      break;
    case 'forgot-password':
      content.first = '忘記密碼了嗎? ';
      content.last = '忘記密碼';
      break;
    default:
      throw new Error('invalid path');
  }
  return (
    <Typography variant="h6" sx={{ color: LIGHT_GRAY2 }}>
      {content.first}
      <Link href={`/member/${path}`}>
        <Typography variant="span" sx={{ textDecoration: 'underline' }}>
          {content.last}
        </Typography>
      </Link>
    </Typography>
  );
}
