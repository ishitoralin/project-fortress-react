import { Box, Typography } from '@mui/material';

import ForwardSymbol from '@/assets/forward-symbol';
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
      filter: 'brightness(0.45) !important',
    },
  },
};

const cardBodyStyle = {
  width: '100%',
  padding: '1rem',
  marginLeft: 'auto',
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

const forwardSymbolStyle = {
  width: '50px',
  height: '50px',
  transform: 'rotate(-90deg)',
};

const LessonCardNoImg = () => (
  <CUICard sx={cardStyle}>
    <Box sx={cardBodyStyle}>
      <Typography variant="h5" sx={cardTitleStyle}>
        {/* {lesson.lessonName} */}
      </Typography>
      <FavoriteBorderOutlinedIcon sx={favoriteIconStyle} />
      <Box sx={{ padding: '.25rem 5% 0rem 1rem' }}>
        <Box sx={cardInfoBoxStyle}>
          <Typography variant="h6" sx={cardInfoTitleStyle}>
            <EmojiPeopleIcon sx={iconStyle} />
            指導教練:
          </Typography>
          <Typography variant="h6" sx={cardInfoStyle}>
            {/* {lesson.coachName} */}
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
            {/* {lesson.time} */}
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
            {/* {lesson.enrolled} / {lesson.limit} */}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: '.25rem 5% 0rem 1rem',
        }}
      >
        <Typography variant="h5" sx={priceTextStyle}>
          <MonetizationOnRoundedIcon sx={priceIconStyle} />
          {/* 價格: {lesson.price} */}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginLeft: 'auto',
            cursor: 'pointer',
            ':hover': {
              '.regisText': {
                fontSize: '1.3rem',
                filter: 'drop-shadow(0 7px 7px grey)',
              },
            },
          }}
        >
          <Typography
            variant="h6"
            className="regisText"
            sx={{
              fontWeight: 'bold',
              fontStyle: 'oblique',
              transition: '.3s',
            }}
          >
            立即報名
          </Typography>
          <Box sx={forwardSymbolStyle}>
            <ForwardSymbol width={'45px'} />
          </Box>
        </Box>
      </Box>
    </Box>
  </CUICard>
);

export default LessonCardNoImg;
