import { Button, Box, Typography, Chip } from '@mui/material';

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
  cardInfoRowStyle,
  cardInfoTitleStyle,
  cardInfoStyle,
  tagBoxStyle,
  tagStyle,
  priceRegiBoxStyle,
  iconStyle,
  priceIconStyle,
  priceTextStyle,
  regisBoxStyle,
  forwardSymbolBoxStyle,
} from '@/styles/lesson-style/lesson-card-style';

const LessonCard = ({ lessons, coachcard }) => (
  <CUICard
    sx={
      coachcard
        ? { ...cardStyle, height: '200px' }
        : {
            ...cardStyle,
            width: '90%',
            '@media (max-width: 600px)': {
              width: '100%',
            },
          }
    }
  >
    <Box sx={coachcard ? { ...cardImgStyle, width: '28%' } : cardImgStyle}>
      <Box sx={imgBox}>
        <Button
          variant="outlined"
          size="small"
          color="main_white"
          sx={imgButtonStyle}
        >
          {coachcard ? '教練資料' : '查看詳情'}
        </Button>
        <Image
          className="lesson_card_img"
          alt="lessonImg"
          src={`/lesson-img/${lessons.img}`}
          placeholder="blur"
          blurDataURL={lessons.img_base64}
          fill
          style={imgStyle}
        />
      </Box>
    </Box>
    <Box
      sx={
        coachcard
          ? { ...cardBodyStyle, width: { xs: '100%', sm: '65%' } }
          : cardBodyStyle
      }
    >
      <Typography variant="h5" sx={cardTitleStyle}>
        {lessons.name}
      </Typography>
      <FavoriteBorderOutlinedIcon sx={favoriteIconStyle} />
      <Box sx={cardInfoBoxStyle}>
        <Box sx={cardInfoRowStyle}>
          <Typography variant="subtitle1" sx={cardInfoTitleStyle}>
            <EmojiPeopleIcon sx={iconStyle} />
            指導教練:
          </Typography>
          <Typography variant="subtitle1" sx={cardInfoStyle}>
            {lessons.nickname}
          </Typography>
        </Box>
        <Box sx={cardInfoRowStyle}>
          <Typography variant="subtitle1" sx={cardInfoTitleStyle}>
            <AccessTimeIcon sx={iconStyle} />
            課程時間:
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ ...cardInfoStyle, fontWeight: 'normal' }}
          >
            {lessons.time}
          </Typography>
        </Box>
        <Box sx={cardInfoRowStyle}>
          <Typography variant="subtitle1" sx={cardInfoTitleStyle}>
            <GroupsIcon sx={iconStyle} />
            報名人數:
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ ...cardInfoStyle, fontStyle: 'oblique' }}
          >
            {lessons.enrolled} / {lessons.capacity}
          </Typography>
        </Box>
        {!coachcard && (
          <Box sx={tagBoxStyle}>
            {lessons.tags.map((tag, index) => (
              <Chip key={index} label={tag} sx={tagStyle} />
            ))}
          </Box>
        )}
      </Box>
      <Box sx={priceRegiBoxStyle}>
        <Typography variant="h5" sx={{ ...priceTextStyle, fontSize: '1.6rem' }}>
          <MonetizationOnRoundedIcon sx={priceIconStyle} />
          價格: {lessons.price}
        </Typography>
        <Box sx={regisBoxStyle}>
          <Typography variant="h6" className="regisText">
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
