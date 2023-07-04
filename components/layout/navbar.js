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
  zIndex: 10,
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

const ExpandItem = (props) => {
  return (
    <Box
      sx={{
        ...linkItemStyle,
        ...ml2,
        position: 'relative',
        cursor: 'pointer',
      }}
      onClick={props.onClick}
    >
      {props.children}
      <Collapse
        in={props.in}
        sx={{
          position: 'absolute',
          width: '100%',
          top: '0%',
          left: 0,
          color: 'white',
          borderRadius: 'inherit',
        }}
      >
        <Box
          sx={{
            ...linkItemStyle,
            bgcolor: 'white',
            color: 'var(--main-black)',
          }}
        >
          {props.children}
        </Box>
        {props.links.map((link) => (
          <Link
            style={{
              marginLeft: 0,
              textAlign: 'center',
              backgroundColor: 'var(--main-black)',
            }}
            key={link.key}
            href={link.href}
          >
            <Box
              sx={{
                ...linkItemStyle,
                bgcolor: 'var(--main-black)',
                marginTop: '.2rem',
              }}
            >
              {link.linkName}
            </Box>
          </Link>
        ))}
      </Collapse>
    </Box>
  );
};

const Item = (props) => (
  <Link style={{ ...ml2, display: 'block', ...props.style }} {...props}>
    <Box sx={linkItemStyle}>{props.children}</Box>
  </Link>
);

const expandData = {
  coachLesson: [
    {
      key: 'coach',
      linkName: '教練簡介',
      href: '/coach',
    },
    {
      key: 'lesson',
      linkName: '課程資訊',
      href: '/lesson',
    },
  ],
  member: [
    {
      key: 'member',
      linkName: '會員中心',
      href: '/member',
    },
    {
      key: 'signInUp',
      linkName: '登入註冊',
      href: '/member',
    },
  ],
  record: [
    {
      key: 'train',
      linkName: '訓練紀錄',
      href: '/record',
    },
    {
      key: 'diet',
      linkName: '飲食紀錄',
      href: '/record',
    },
  ],
};

const linksData = [
  {
    key: 'coach',
    linkName: '教練簡介',
    href: '/coach',
  },
  {
    key: 'product',
    linkName: '進入商城',
    href: '/product',
  },
  {
    key: 'lesson',
    linkName: '課程資訊',
    href: '/lesson',
  },
  {
    key: 'record',
    linkName: '個人紀錄',
    href: '/record',
  },
  {
    key: 'space-find',
    linkName: '場地找找',
    href: '/space-find',
  },
  {
    key: 'member',
    linkName: '會員中心',
    href: '/member',
  },
];

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const [linksState, setLinksState] = useState(() => {
    return new Map([...Object.keys(expandData)].map((key) => [key, false]));
  });

  return (
    <Stack sx={navbarStyle} direction={'row'}>
      <Box sx={logoBoxStyle}>
        <Link href="/">
          <LogoIcon width={150} height={50} />
        </Link>
      </Box>
      <Box sx={linksStyle}>
        <Item href="/product">進入商城</Item>
        <Item href="/space-find">場地找找</Item>
        <Link href="/" style={{ ...ml2, display: 'block' }}>
          <ShoppingCartIcon
            sx={{
              ':hover': {
                color: 'var(--fortress)',
              },
            }}
          />
        </Link>
        <ExpandItem
          in={expanded}
          onClick={() => setExpanded((pre) => !pre)}
          links={[
            {
              key: 'coach',
              linkName: '教練簡介',
              href: '/coach',
            },
            {
              key: 'lesson',
              linkName: '課程資訊',
              href: '/lesson',
            },
          ]}
        >
          課程與教練
        </ExpandItem>
        {/* <Item
          href="/"
          style={{
            position: 'relative',
            padding: '.8rem',
            borderRadius: '3px',
            transition: '.5s',
            ':hover': {
              backgroundColor: 'white',
              color: 'black',
            },
          }}
          onClick={() => setExpanded((pre) => !pre)}
        >
          登入/註冊
          <Collapse
            in={expanded}
            sx={{
              position: 'absolute',
              width: '100%',
              top: '100%',
              bgcolor: 'black',
            }}
          >
            ex
          </Collapse>
        </Item> */}
      </Box>
    </Stack>
  );
}
