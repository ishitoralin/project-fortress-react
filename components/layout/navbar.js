import Link from 'next/link'
import { Box, Stack } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { MAIN_BLACK } from "@/assets/color-code"
import LogoIcon from "@/assets/logo"

const ml2 = {
  ml: 2
}

const centerAll = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const navbarStyle = {
  position: 'fixed',
  top: 0,
  bgcolor: MAIN_BLACK, 
  height: '80px',
  width: '100%',
  paddingInline: '1.5rem',
  ...centerAll
}

const logoBoxStyle ={
  ...centerAll,
  marginRight: 'auto'
}

const linksStyle = {
  ...centerAll,
  color: 'white',
}

const linkItemStyle = {
  p:  '.8rem',
  borderRadius: '3px',
  transition: '.5s',
  ":hover": {
    bgcolor: 'white',
    color: 'black'
  },
  ...ml2
}

const linksData = [
  {
    keyName: 'coach',
    linkName: '教練簡介',
    href: '/coach'
  }, 
  {
    keyName: 'product',
    linkName: '進入商城',
    href: '/product'
  }, 
  {
    keyName: 'lesson',
    linkName: '課程資訊',
    href: '/lesson'
  }, 
  {
    keyName: 'record',
    linkName: '個人紀錄',
    href: '/record'
  }, 
  {
    keyName: 'space-find',
    linkName: '場地找找',
    href: '/space-find'
  }, 
  {
    keyName: 'member',
    linkName: '會員中心',
    href: '/member'
  }
]

export default function Navbar() {
  return (
    <Stack sx={navbarStyle} direction={'row'}>
      <Box sx={logoBoxStyle}>
        <Link href="/">
          <LogoIcon width={150} height={50}/>
        </Link>
      </Box>
      <Box sx={linksStyle}>
        {linksData.map(link => 
          <Box key={link.keyName} sx={linkItemStyle} >
            <Link href={link.href}>{link.linkName}</Link>
          </Box>
        )}
        <Box sx={...ml2}>
        <ShoppingCartIcon />
        </Box>
        <Box sx={linkItemStyle} >
          <Link href="/">登入/註冊</Link>
        </Box>
      </Box>
    </Stack>
  )
}
