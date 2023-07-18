import { useEffect, useState } from 'react';

import {
  mainContentStyle,
  flexRowSpaceBetween,
  containerStyle,
  filterStyle,
} from '@/styles/lesson-style/lesson-index';

import { Box, Chip, Container, Typography } from '@mui/material';
import Banner from '@/components/lesson/banner';
import RightSide from '@/components/lesson/rightside';

import CUISearch from '@/components/customUI/cui-search';
import CUISelect from '@/components/customUI/cui-select';
import CUISlider from '@/components/customUI/cui-slider';
import CUIDatePicker from '@/components/customUI/cui-date-picker';
import CUIFilter from '@/components/customUI/cui-filter';

const LessionPage = () => {
  const [tags, setTags] = useState([]);
  const [tagsMap, setTagsMap] = useState();
  const [selectTags, setSelecTags] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3001/lesson/tags');
      const datas = await res.json();
      setTagsMap(datas);
      setTags(datas);
    })();
  }, []);

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
              sx={filterStyle}
              label="篩選器"
              items={[
                <CUISearch
                  key={'search'}
                  color={'steel_grey'}
                  label="課程關鍵字"
                  placeholder="請輸入關鍵字"
                />,
                <>
                  <CUISelect
                    key={'select'}
                    color={'steel_grey'}
                    label="課程標籤"
                    options={tags}
                    onChange={(event) => {
                      const newSelect = [...selectTags, event.target.value];
                      const newTags = tags.filter(
                        (tag) => tag !== event.target.value
                      );
                      setTags(newTags);
                      setSelecTags(newSelect);
                    }}
                  />
                  <Box key={'tag-box'}>
                    {selectTags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        sx={{ margin: '1rem .2rem -0.5rem 0' }}
                        onDelete={() => {
                          const newState = selectTags.filter(
                            (item) => item !== tag
                          );
                          const newTags = [...tags, tag];
                          newTags.sort(
                            (t1, t2) =>
                              tagsMap.indexOf(t1) - tagsMap.indexOf(t2)
                          );
                          setTags(newTags);
                          setSelecTags(newState);
                        }}
                      />
                    ))}
                  </Box>
                </>,
                <CUIDatePicker
                  key={'date-picker'}
                  label="課程日期"
                  color={'steel_grey'}
                />,
                <CUISlider key={'slider'} label="價格範圍" />,
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
