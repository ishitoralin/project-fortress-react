import { Container, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import CUISearch from '@/components/customUI/cui-search';
import SUICard from '@/components/seanUI/sui-card';

const Section = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  // justifyContent: 'center',
  alignItems: 'center',
}));

const ExercisePage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item lg={3} sm={2}>
          <Section>
            {' '}
            <SUICard>Section 1 </SUICard>
          </Section>
        </Grid>
        <Grid item lg={5} sm={4}>
          <Section>
            <h1>asd</h1>
            <CUISearch
              sx={{ width: '100%' }}
              label="搜尋運動類型"
              placeholder="請輸入關鍵字"
            />
          </Section>
        </Grid>
        <Grid item lg={4} sm={4}>
          <Section>Section 3</Section>
        </Grid>
      </Grid>
    </div>
  );
};

export default ExercisePage;
