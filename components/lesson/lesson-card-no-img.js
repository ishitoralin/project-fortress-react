import { Button, Box, Typography } from '@mui/material';

import ForwardSymbol from '@/assets/forward-symbol';
import Image from 'next/image';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import GroupsIcon from '@mui/icons-material/Groups';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import CUICard from '@/components/customUI/cui-card';

import {
  cardStyle,
  cardImgStyle,
  cardBodyStyle,
  imgBox,
  imgButtonStyle,
  imgStyle,
  cardTitleStyle,
  favoriteIconStyle,
  cardInfoBoxStyle,
  cardInfoTitleStyle,
  cardInfoStyle,
  tagStyle,
  iconStyle,
  priceIconStyle,
  priceTextStyle,
  forwardSymbolBoxStyle,
} from '@/styles/lesson-style/lesson-card-style';

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
          <Typography variant="subtitle1" sx={cardInfoTitleStyle}>
            <EmojiPeopleIcon sx={iconStyle} />
            指導教練:
          </Typography>
          <Typography variant="subtitle1" sx={cardInfoStyle}>
            {lesson.coachName}
          </Typography>
        </Box>
        <Box sx={cardInfoBoxStyle}>
          <Typography variant="subtitle1" sx={cardInfoTitleStyle}>
            <AccessTimeIcon sx={iconStyle} />
            課程時間:
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ ...cardInfoStyle, fontWeight: 'normal' }}
          >
            {lesson.time}
          </Typography>
        </Box>
        <Box sx={cardInfoBoxStyle}>
          <Typography variant="subtitle1" sx={cardInfoTitleStyle}>
            <GroupsIcon sx={iconStyle} />
            報名人數:
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ ...cardInfoStyle, fontStyle: 'oblique' }}
          >
            {lesson.enrolled} / {lesson.limit}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', paddingBlock: '.2rem', overflow: 'clip' }}>
          <Typography variant="caption" sx={tagStyle}>
            triuf
          </Typography>
          <Typography variant="caption" sx={tagStyle}>
            triuf
          </Typography>
          <Typography variant="caption" sx={tagStyle}>
            triuf
          </Typography>
          <Typography variant="caption" sx={tagStyle}>
            triuf
          </Typography>
          <Typography variant="caption" sx={tagStyle}>
            triuf
          </Typography>
          <Typography variant="caption" sx={tagStyle}>
            triuf
          </Typography>
          <Typography variant="caption" sx={tagStyle}>
            triuf
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
        <Typography variant="h5" sx={{ ...priceTextStyle, fontSize: '1.6rem' }}>
          <MonetizationOnRoundedIcon sx={priceIconStyle} />
          價格: {lesson.price}
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
          <Box sx={forwardSymbolBoxStyle}>
            <ForwardSymbol width={'35px'} color={'goldenrod'} />
          </Box>
        </Box>
      </Box>
    </Box>
  </CUICard>
);

export default LessonCard;
