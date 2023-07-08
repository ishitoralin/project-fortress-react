import { Box, Typography } from '@mui/material';

import ForwardSymbol from '@/assets/forward-symbol';
import Image from 'next/image';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import GroupsIcon from '@mui/icons-material/Groups';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import CUICard from '@/components/customUI/cui-card';

const cardStyle = {
  margin: 'auto',
  width: '95%',
  height: '220px',
  marginBottom: '1.5rem',
  bgcolor: '#eee',
  display: 'flex',
  overflow: 'hidden',
};

const cardLeftStyle = {
  position: 'relative',
  width: '30%',
  height: '100%',
  left: '-5%',
  overflow: 'hidden',
  boxShadow: '1px 0 7px #555',
  transform: 'scale(1.75) rotateZ(15deg)',
  transition: '.5s',
};

const cardBox = {
  position: 'relative',
  width: '125%',
  height: '90%',
  transform: 'rotateZ(-15deg)',
  transition: '.5s',
};

const imgStyle = {
  width: '100%',
  height: '100%',
  filter: 'brightness(90%)',
  objectFit: 'cover',
};

const cardInfoBoxStyle = { display: 'flex', borderBottom: '2px solid #dfdfdf' };

const cardInfoTitleStyle = {
  width: 'fit-content',
  fontWeight: 'bold',
  fontStyle: 'oblique',
};

const cardInfoStyle = {
  flexGrow: 1,
  textAlign: 'center',
  fontWeight: 'bold',
  fontStyle: 'oblique',
};

const iconStyle = {
  verticalAlign: 'text-bottom',
  color: 'grey',
  marginRight: '.3rem',
};

const priceIconStyle = {
  verticalAlign: 'text-top',
  color: '#555',
  transform: 'skew(-10deg)',
  marginRight: '.2rem',
};

const priceTextStyle = {
  position: 'relative',
  fontWeight: 'bold',
  fontStyle: 'oblique',
  ':before': {
    content: '""',
    position: 'absolute',
    left: '-20%',
    bottom: 0,
    width: '130%',
    borderBottom: '3px solid var(--main-red)',
  },
};

const LessonCard = ({ lesson }) => (
  <CUICard sx={cardStyle}>
    <Box sx={cardLeftStyle}>
      <Box sx={cardBox}>
        <Image alt="lessonImg" src={lesson.img} fill style={imgStyle} />
      </Box>
    </Box>
    <Box
      sx={{
        width: '60%',
        padding: '1rem',
        marginLeft: 'auto',
      }}
    >
      <Typography
        variant="h5"
        sx={{
          display: 'inline-block',
          width: '90%',
          textAlign: 'center',
          fontWeight: 'bold',
          fontStyle: 'oblique',
        }}
      >
        {lesson.lessonName}
        {
          //     time: '2024/05/06 14:00',
          //     description:
          //       '這個課程將提供學員們一個初步的認識和實踐水阻划船的機會。學員們將學習基本的划船動作和安全知識。',
          //     coachName: '蔡岱峯',
          //     price: '600',
          //     enrolled: 10,
          //     limit: 20,
          //     tags: ['有氧', '核心鍛鍊', '腿部肌力'],
          //     location: '台北館',
        }
      </Typography>
      <FavoriteBorderOutlinedIcon
        sx={{
          width: '10%',
          verticalAlign: 'text-bottom',
          color: 'var(--main-red)',
          cursor: 'pointer',
        }}
      />
      <Box sx={{ padding: '.25rem 5% 0rem 1rem' }}>
        <Box sx={cardInfoBoxStyle}>
          <Typography variant="h6" sx={cardInfoTitleStyle}>
            <EmojiPeopleIcon sx={iconStyle} />
            指導教練:
          </Typography>
          <Typography variant="h6" sx={cardInfoStyle}>
            {lesson.coachName}
          </Typography>
        </Box>
        <Box sx={cardInfoBoxStyle}>
          <Typography variant="h6" sx={cardInfoTitleStyle}>
            <AccessTimeIcon sx={iconStyle} />
            課程時間:
          </Typography>
          <Typography
            variant="h6"
            sx={{ ...cardInfoStyle, fontWeight: 'normal' }}
          >
            {lesson.time}
          </Typography>
        </Box>
        <Box sx={cardInfoBoxStyle}>
          <Typography variant="h6" sx={cardInfoTitleStyle}>
            <GroupsIcon sx={iconStyle} />
            報名人數:
          </Typography>
          <Typography
            variant="h6"
            sx={{ ...cardInfoStyle, fontStyle: 'oblique' }}
          >
            {lesson.enrolled} / {lesson.limit}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: '.25rem 5% 0rem 1rem' /*marginTop: '.5rem'*/,
        }}
      >
        <Typography variant="h5" sx={priceTextStyle}>
          <MonetizationOnRoundedIcon sx={priceIconStyle} />
          價格: {lesson.price}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            marginLeft: 'auto',
            fontWeight: 'bold',
            fontStyle: 'oblique',
          }}
        >
          立即報名
        </Typography>
        <Box
          sx={{
            // border: '1px solid red',
            width: '50px',
            height: '50px',
            position: 'relative',
            // marginLeft: '1rem',
            transform: 'rotate(-90deg)',
          }}
        >
          <ForwardSymbol width={'45px'} />
        </Box>
        {/* <Typography
          variant="h5"
          sx={{ marginLeft: 'auto',fontWeight: 'bold', fontStyle: 'oblique' }}
        >
          價格: {lesson.price}
        </Typography> */}
      </Box>
    </Box>
  </CUICard>
);

export default LessonCard;
