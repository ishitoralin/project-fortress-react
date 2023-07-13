import { useState } from 'react';

import { Box, Container, Typography } from '@mui/material';
import Banner from '@/components/lesson/banner';
import RightSide from '@/components/lesson/rightside';

import CUISearch from '@/components/customUI/cui-search';
import CUISelect from '@/components/customUI/cui-select';
import CUISlider from '@/components/customUI/cui-slider';
import CUIDatePicker from '@/components/customUI/cui-date-picker';
import CUIFilter from '@/components/customUI/cui-filter';

const tagsData = [
  'HIIT',
  '有氧',
  '心肺',
  '拳擊',
  '格鬥',
  '瑜珈',
  '壺鈴',
  '健力',
  '健美',
  '健體',
  '核心',
  '體能',
  '體態雕塑',
  '增肌',
  '減脂',
  '皮拉提斯',
  '藥球',
  '肌力',
  '耐力',
  '上肢力量',
  '下肢力量',
  '功能性訓練',
  '全身性訓練',
  '專項訓練',
  '傷害預防',
  '伸展',
  '專業建議',
];

const mainContentStyle = {
  width: '100%',
  backdropFilter: 'blur(50px)',
  color: 'white',
  bgcolor: 'rgba(85, 85, 85, .8)',
  boxShadow: '0 -5px 15px #333',
  backgroundImage: `url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='30' height='30' patternTransform='scale(4) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(25, 0%, 100%, 0)'/><path d='M0 22.5h30v15H0zm15-15h30v15H15m-30-15h30v15h-30zm15-15h30v15H0z'  stroke-width='1.5' stroke='hsla(38, 0%, 40%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,-14)' fill='url(%23a)'/></svg>")`,
  backgroundAttachment: 'fixed',
};

const flexRowSpaceBetween = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
};

const containerStyle = {
  p: '2rem',
};

const LessionPage = () => {
  const [selectTags, setSelecTags] = useState([]);
  return (
    <Box>
      <Banner />
      <Box sx={mainContentStyle}>
        <Container sx={containerStyle}>
          <Typography
            id="findYourLesson"
            variant="h4"
            sx={{ textAlign: 'center', py: 8, mb: '2rem' }}
          >
            尋找您喜愛的課程
          </Typography>
          <Box sx={flexRowSpaceBetween}>
            <CUIFilter
              sx={{
                width: '27%',
                position: 'sticky',
                top: '2rem',
                bgcolor: '#eee',
              }}
              label="篩選器"
              items={[
                <CUISearch
                  key={1}
                  color={'steel_grey'}
                  label="課程關鍵字"
                  placeholder="請輸入關鍵字"
                />,
                <CUISelect
                  key={2}
                  color={'steel_grey'}
                  label="課程標籤"
                  options={tagsData}
                  onChange={(event) => console.log(event)}
                />,

                <Box key={'selected_tags_box'}>test</Box>,
                <CUIDatePicker key={3} label="課程日期" color={'steel_grey'} />,
                <CUISlider key={4} label="價格範圍" />,
              ]}
            />
            <RightSide />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default LessionPage;
