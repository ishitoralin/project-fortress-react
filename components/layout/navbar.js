import Link from 'next/link'
import { Button, Box, Stack } from "@mui/material"
import { MAIN_BLACK } from "@/assets/ColorCode"
import LogoIcon from "@/assets/logo"

const navbarStyle = {
  bgcolor: MAIN_BLACK, 
  height: '80px',
  width: '100vw',
  paddingInline: '1rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const logoBoxStyle ={
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: 'auto'
}

const linksStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const linksData = [
  {
    linkName: '教練簡介',
    href: '/coach'
  }, 
  {
    linkName: '進入商城',
    href: '/shop'
  }, 
  {
    linkName: '課程資訊',
    href: '/lession'
  }, 
  {
    linkName: '個人紀錄',
    href: '/record'
  }, 
  {
    linkName: '場地找找',
    href: '/location'
  }, 
  {
    linkName: '會員中心',
    href: '/member'
  }
]

export default function Navbar() {
  return (
    <Stack sx={navbarStyle} direction={'row'}>
      <Box sx={logoBoxStyle}>
        <LogoIcon width={150} height={50}/>
      </Box>
      <Box sx={linksStyle}>
        {linksData.map((link, index) => 
          <Box key={index} sx={{mr: 5, color: 'white'}} variant='contained' >
            <Link href={link.href}>{link.linkName}</Link>
          </Box>
        )}
      </Box>
    </Stack>
  )
}
