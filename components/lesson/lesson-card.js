import { useState } from 'react';

import {
  Button,
  Box,
  Typography,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

import ForwardSymbol from '@/assets/forward-symbol';
import Image from 'next/image';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
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
import Link from 'next/link';
import CUIButton from '../customUI/cui-button';

const LessonCard = ({ lesson, coachcard }) => {
  const [open, setOpen] = useState(false);
  const openCard = () => setOpen(true);
  const closeCard = () => setOpen(false);

  const handleNoLoginSave = () => {};
  const handleCancelSave = () => {};
  const handleSave = () => {};
  return (
    <>
      <CUICard
        sx={
          coachcard
            ? { ...cardStyle, height: '12.5rem' }
            : {
                ...cardStyle,
                width: '90%',
                '@media (max-width: 600px)': {
                  width: '100%',
                },
              }
        }
      >
        <Box sx={cardImgStyle}>
          <Box sx={imgBox}>
            <Link
              href={
                coachcard
                  ? `/coach/${lesson.coach_sid}`
                  : `/lesson/${lesson.category_sid}`
              }
            >
              <Button
                variant="outlined"
                size="small"
                color="main_white"
                sx={imgButtonStyle}
              >
                {coachcard ? '教練資料' : '系列課程'}
              </Button>
            </Link>
            <Image
              className="lesson_card_img"
              alt="lessonImg"
              src={
                coachcard
                  ? `/coach-img/${lesson.coach_img}`
                  : `/lesson-img/${lesson.img}`
              }
              placeholder="blur"
              blurDataURL={
                coachcard ? lesson.coach_img_base64 : lesson.img_base64
              }
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
            {lesson.name}
          </Typography>
          {lesson.save === undefined ? (
            <FavoriteBorderOutlinedIcon
              sx={favoriteIconStyle}
              onClick={handleNoLoginSave}
            />
          ) : lesson.save ? (
            <FavoriteIcon sx={favoriteIconStyle} onClick={handleCancelSave} />
          ) : (
            <FavoriteBorderOutlinedIcon
              sx={favoriteIconStyle}
              onClick={handleSave}
            />
          )}
          <Box sx={cardInfoBoxStyle}>
            <Box sx={cardInfoRowStyle}>
              <Typography variant="subtitle1" sx={cardInfoTitleStyle}>
                <EmojiPeopleIcon sx={iconStyle} />
                指導教練
              </Typography>
              <Typography variant="subtitle1" sx={cardInfoStyle}>
                {lesson.nickname}
              </Typography>
            </Box>
            <Box sx={cardInfoRowStyle}>
              <Typography variant="subtitle1" sx={cardInfoTitleStyle}>
                <AccessTimeIcon sx={iconStyle} />
                課程時間
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ ...cardInfoStyle, fontWeight: 'normal' }}
              >
                {lesson.time}
              </Typography>
            </Box>
            <Box sx={cardInfoRowStyle}>
              <Typography variant="subtitle1" sx={cardInfoTitleStyle}>
                <GroupsIcon sx={iconStyle} />
                報名人數
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ ...cardInfoStyle, fontStyle: 'oblique' }}
              >
                {lesson.enrolled} / {lesson.capacity}
              </Typography>
            </Box>
            {!coachcard && (
              <Box sx={tagBoxStyle}>
                {lesson.tags.map((tag, index) => (
                  <Chip key={index} label={tag} sx={tagStyle} />
                ))}
              </Box>
            )}
          </Box>
          <Box sx={priceRegiBoxStyle}>
            <Typography
              variant="h5"
              sx={{ ...priceTextStyle, fontSize: '1.6rem' }}
            >
              <MonetizationOnRoundedIcon sx={priceIconStyle} />
              價格: {lesson.price}
            </Typography>
            <Box sx={regisBoxStyle}>
              <Typography variant="h6" className="regisText" onClick={openCard}>
                立即報名
              </Typography>
              <Box sx={forwardSymbolBoxStyle}>
                <ForwardSymbol width={'2rem'} color={'goldenrod'} />
              </Box>
            </Box>
          </Box>
        </Box>
      </CUICard>
      <Dialog open={open} onClose={closeCard}>
        <DialogContent sx={{ p: 2, bgcolor: '#eee' }}>
          <Box
            sx={{
              position: 'relative',
              bgcolor: 'black',
              height: '200px',
              width: '45vw',
              borderRadius: '10px',
              overflow: 'hidden',
            }}
          >
            <Image
              alt="purchselessonImg"
              src={`/lesson-img/${lesson.img}`}
              placeholder="blur"
              blurDataURL={lesson.img_base64}
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              fill
            />
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            {lesson.name}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            教練 {lesson.nickname}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            時間 {lesson.time} ~ 
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            時長 {lesson.period}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            費用 {lesson.price}
          </Typography>
        </DialogContent>
        <DialogActions sx={{ bgcolor: '#eee' }}>
          <CUIButton btncolor={'#777'} onClick={closeCard}>取消</CUIButton>
          <CUIButton color={'steel_grey'}>加入購物車</CUIButton>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default LessonCard;
