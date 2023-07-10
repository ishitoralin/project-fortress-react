import { useState } from 'react';
import Link from 'next/link';
import { Box, Collapse, Stack } from '@mui/material';
import ClickAwayListener from '@mui/base/ClickAwayListener';
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
  userSelect: 'none',
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
  <Link
    passHref
    style={{ ...ml2, display: 'block', ...props.style }}
    {...props}
  >
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
      href: '/record/exercise',
    },
    {
      key: 'diet',
      linkName: '飲食紀錄',
      href: '/record/diet',
    },
  ],
};

const initState = new Map(
  [...Object.keys(expandData)].map((key) => [key, false])
);

const getInitState = () => {
  return new Map(initState);
};

export default function Navbar() {
  const [linksState, setLinksState] = useState(() => getInitState());

  const toggleLink = (name) => {
    setLinksState((pre) => {
      const newState = new Map(pre);
      newState.forEach((state, key) => {
        newState.set(key, key === name ? !newState.get(name) : false);
      });
      return newState;
    });
  };

  const closeLinks = () => setLinksState(getInitState());

  return (
    <Stack sx={navbarStyle} direction={'row'}>
      <Box sx={logoBoxStyle} onClick={closeLinks}>
        <Link href="/">
          <LogoIcon width={150} height={50} />
        </Link>
      </Box>
      <Box sx={linksStyle}>
        {linksData.map((link) => (
          <MyLink key={link.linkName} href={link.href}>
            <Box sx={linkItemStyle}>{link.linkName}</Box>
          </MyLink>
        ))}
        <MyLink href="/">
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
            會員中心
          </ExpandItem>
        </Box>
      </ClickAwayListener>
    </Stack>
  );
}
