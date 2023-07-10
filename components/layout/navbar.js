import { useState } from 'react';
import Link from 'next/link';
import { Box, Collapse, Stack } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoIcon from '@/assets/logo';

const ml2 = {
  marginLeft: '20px',
};

const centerAll = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const navbarStyle = {
  position: 'fixed',
  overflow: 'visible',
  top: 0,
  bgcolor: 'var(--main-black)',
  height: 'var(--nav-height)',
  width: '100%',
  paddingInline: '1.5rem',
  ...centerAll,
};

const logoBoxStyle = {
  ...centerAll,
  marginRight: 'auto',
};

const linksStyle = {
  ...centerAll,
  color: 'white',
};

const linkItemStyle = {
  p: '.8rem',
  borderRadius: '3px',
  transition: '.5s',
  ':hover': {
    bgcolor: 'white',
    color: 'black',
  },
};

const MyLink = (props) => (
  <Link style={{ ...ml2, display: 'block' }} {...props}>
    {props.children}
  </Link>
);

const linksData = [
  {
    keyName: 'coach',
    linkName: '教練簡介',
    href: '/coach',
  },
  {
    keyName: 'product',
    linkName: '進入商城',
    href: '/product',
  },
  {
    keyName: 'lesson',
    linkName: '課程資訊',
    href: '/lesson',
  },
  {
    keyName: 'record',
    linkName: '個人紀錄',
    href: '/record',
  },
  {
    keyName: 'space-find',
    linkName: '場地找找',
    href: '/space-find',
  },
  {
    keyName: 'member',
    linkName: '會員中心',
    href: '/member',
  },
];

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Stack sx={navbarStyle} direction={'row'}>
      <Box sx={logoBoxStyle}>
        <MyLink href="/">
          <LogoIcon width={150} height={50} />
        </MyLink>
      </Box>
      <Box sx={linksStyle}>
        {linksData.map((link) => (
          <MyLink key={link.linkName} href={link.href}>
            <Box sx={linkItemStyle}>{link.linkName}</Box>
          </MyLink>
        ))}
        <MyLink href="/shoppingcart">
          <Box>
            <ShoppingCartIcon />
          </Box>
        </MyLink>
        <MyLink
          href=""
          style={{ position: 'relative' }}
          onClick={() => setExpanded((pre) => !pre)}
        >
          <Box sx={linkItemStyle}>登入/註冊</Box>
          <Collapse
            in={expanded}
            sx={{ position: 'absolute', top: '100%', bgcolor: 'black' }}
          >
            expand content
          </Collapse>
        </MyLink>
      </Box>
    </Stack>
  );
}
