import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import {
  mainContentStyle,
  flexRowSpaceBetween,
  containerStyle,
  filterStyle,
  showFilterStyle,
} from '@/styles/lesson-style/lesson-index-style';

import { Box, Chip, Container, Typography, IconButton } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

import Banner from '@/components/lesson/banner';
import RightSide from '@/components/lesson/rightside';

import CUISearch from '@/components/customUI/cui-search';
import CUISelect from '@/components/customUI/cui-select';
import CUISlider from '@/components/customUI/cui-slider';
import CUIDatePicker from '@/components/customUI/cui-date-picker';
import CUIFilter from '@/components/customUI/cui-filter';

const filterIconStyle = {
  visibility: 'hidden',
  '@media (max-width: 1000px)': {
    visibility: 'visible',
    transition: '.2s',
    ':hover': {
      transform: 'scale(1.2)',
    },
  },
};

export const getStaticProps = async () => {
  const data = {};
  try {
    const res = await fetch('http://localhost:3001/lesson/tags');
    data.tags = await res.json();
  } catch (ex) {
    data.tags = ['目前沒有標籤可選取'];
  }

  return { props: data };
};

const DEFAULTDISPLAYMODE = 'list';

const LESSON_BASEURL = 'http://localhost:3001/lesson';

const queryDatasCache = new Map();

const LessionPage = (props) => {
  const router = useRouter();
  const [lessons, setLessons] = useState([]);
  const [queryObject, setQueryObject] = useState({});
  const location = queryObject.location;
  const [displayMode, setDisplayMode] = useState(DEFAULTDISPLAYMODE);

  const [tags, setTags] = useState(props.tags);
  const [selectTags, setSelecTags] = useState([]);

  const [filterShow, setFilterShow] = useState(false);

  const setLocation = (newLocation) => {
    setQueryObject((prev) => ({ ...prev, location: newLocation }));
  };

  const showFilter = () => setFilterShow(true);

  const closeFilter = () => setFilterShow(false);

  const queryLessons = async (baseUrl, queryObj) => {
    const response = {};
    const fetchUrl = Object.entries(queryObj).reduce(
      (url, [key, value]) => `${url}${key}=${value}&`,
      `${baseUrl}?`
    );
    try {
      const res = await fetch(fetchUrl);
      const datas = await res.json();

      response.success = true;
      response.datas = datas;
    } catch (error) {
      response.success = false;
      response.error = error;
    }

    return response;
  };

  const pushRouter = (queryObj) => {
    router.push(
      {
        pathname: '',
        query: queryObj,
      },
      undefined,
      { shallow: true }
    );
  };

  useEffect(() => {
    if (Object.keys(queryObject).length === 0) return;
    const cacheLessonDatas = queryDatasCache.get(JSON.stringify(queryObject));
    if (cacheLessonDatas) {
      setLessons(cacheLessonDatas);
      pushRouter(queryObject);
      return;
    }
    (async () => {
      const res = await queryLessons(LESSON_BASEURL, queryObject);
      if (!res.success) throw new Error(res.error);
      setLessons(res.datas);
      queryDatasCache.set(JSON.stringify(queryObject), res.datas);
      pushRouter(queryObject);
    })();
  }, [queryObject]);

  // get query string from search bar and init location with taipei
  useEffect(() => {
    if (!router.isReady) return;
    setQueryObject({
      ...router.query,
      location: router.query.location || 'taipei',
    });
  }, [router.isReady]);

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
              sx={
                filterShow
                  ? { ...filterStyle, ...showFilterStyle }
                  : filterStyle
              }
              filterIcon={
                <IconButton sx={filterIconStyle} onClick={closeFilter}>
                  <CancelIcon />
                </IconButton>
              }
              color={'steel_grey'}
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
                              props.tags.indexOf(t1) - props.tags.indexOf(t2)
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
            {lessons.length && (
              <RightSide
                showFilter={showFilter}
                location={location}
                setLocation={setLocation}
                displayMode={displayMode}
                setDisplayMode={setDisplayMode}
                lessons={lessons}
              />
            )}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default LessionPage;
