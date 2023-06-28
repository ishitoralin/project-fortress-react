import { Container } from '@mui/material';
import CUISearch from '@/components/customUI/cui-search';
import CUISelect from '@/components/customUI/cui-select';
import CUISlider from '@/components/customUI/cui-slider';
import CUIFilter from '@/components/customUI/cui-filter';

const tagsData = ['有氧', '健力', '腿部肌力', '瑜珈'];

const LessionPage = () => {
  return (
    <Container>
      <Container sx={{ minHeight: '50vh', bgcolor: 'pink' }}>
        next element
      </Container>
      <CUIFilter
        label="篩選器"
        items={[
          <CUISearch label="課程關鍵字" placeholder="請輸入關鍵字" />,
          <CUISelect label="課程標籤" options={tagsData} />,
          <CUISlider label="價格範圍" />,
        ]}
      />
      <Container sx={{ minHeight: '50vh', bgcolor: 'lightskyblue' }}>
        next element
      </Container>
    </Container>
  );
};

export default LessionPage;
