import { Button, Box, Typography } from '@mui/material';

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
  transition: '.2s',
  ':hover': {
    button: {
      opacity: 1,
    },
    '.lesson_card_img': {
      // filter: 'brightness(0.45) !important',
    },
  },
};

const cardImgStyle = {
  position: 'relative',
  width: '30%',
  height: '100%',
  overflow: 'hidden',
  boxShadow: '1px 0 7px #555',
  transform: 'scale(1.5) translateY(-5%) rotateZ(15deg)',
};

const cardBodyStyle = {
  width: '60%',
  padding: '1rem',
  marginLeft: 'auto',
};

const imgBox = {
  position: 'relative',
  width: '100%',
  height: '90%',
  transform: 'rotateZ(-15deg) translate(15%, 10%)',
};

const imgButtonStyle = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  zIndex: 2,
  transform: 'translate(-70%, -50%)',
  fontWeight: 'bold',
  border: '2px solid white',
  opacity: 0,
  transition: '.5s',
  ':before': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '100%',
    bgcolor: 'white',
    transform: 'scale(0, 1)',
    transition: '.5s',
    zIndex: -1,
  },
  ':hover': {
    color: 'black',
    ':before': {
      transform: 'scale(1, 1)',
    },
    border: '2px solid white',
  },
};

const imgStyle = {
  width: '100%',
  height: '100%',
  filter: 'brightness(90%)',
  objectFit: 'cover',
  transition: '.5s',
};

const cardTitleStyle = {
  display: 'inline-block',
  width: '90%',
  textAlign: 'center',
  fontWeight: 'bold',
  fontStyle: 'oblique',
};

const favoriteIconStyle = {
  width: '10%',
  verticalAlign: 'text-bottom',
  color: 'var(--main-red)',
  cursor: 'pointer',
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
    left: '-17.5%',
    bottom: 0,
    width: '130%',
    borderBottom: '3px solid var(--main-red)',
  },
};

const LessonCard = ({ lesson }) => (
  <CUICard sx={cardStyle}>
    <Box sx={cardImgStyle}>
      <Box sx={imgBox}>
        <Button
          variant="outlined"
          size="small"
          color="main_white"
          sx={imgButtonStyle}
        >
          查看詳情
        </Button>
        <Image
          className="lesson_card_img"
          alt="lessonImg"
          src={lesson.img}
          fill
          style={imgStyle}
        />
      </Box>
    </Box>
    <Box sx={cardBodyStyle}>
      <Typography variant="h5" sx={cardTitleStyle}>
        {lesson.lessonName}
      </Typography>
      <FavoriteBorderOutlinedIcon sx={favoriteIconStyle} />
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
            width: '50px',
            height: '50px',
            position: 'relative',
            transform: 'rotate(-90deg)',
          }}
        >
          <ForwardSymbol width={'45px'} />
        </Box>
      </Box>
    </Box>
  </CUICard>
);

export default LessonCard;
