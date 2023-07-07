import { Box, Container, Typography } from '@mui/material';
import Banner from '@/components/lesson/banner';
import RightSide from '@/components/lesson/rightside';

import CUISearch from '@/components/customUI/cui-search';
import CUISelect from '@/components/customUI/cui-select';
import CUISlider from '@/components/customUI/cui-slider';
import CUIFilter from '@/components/customUI/cui-filter';

const tagsData = ['有氧', '健力', '腿部肌力', '瑜珈'];

const mainContentStyle = {
  width: '100%',
  backdropFilter: 'blur(50px)',
  color: 'white',
  bgcolor: 'rgba(85, 85, 85, .8)',
  boxShadow: '0 -5px 15px #333',
  position: 'relative',
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
  return (
    <Box>
      <Banner />
      <Box sx={mainContentStyle}>
        <Container sx={containerStyle}>
          <Typography
            id="findYourLesson"
            variant="h4"
            sx={{ textAlign: 'center', py: 4, mb: '2rem' }}
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
                  label="課程關鍵字"
                  placeholder="請輸入關鍵字"
                />,
                <CUISelect key={2} label="課程標籤" options={tagsData} />,
                <CUISlider key={3} label="價格範圍" />,
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
