import { Skeleton } from '@mui/material';
import CUICard from '@/components/customUI/cui-card';

const LessonCardSkeleton = () => (
  <CUICard
    sx={{
      marginInline: 'auto',
      marginBlock: 3,
      bgcolor: 'rgba(120,120,120,.9)',
      width: '90%',
      height: '230px',
    }}
  >
    <Skeleton
      sx={{ width: '100%', height: '100%', transform: 'none' }}
    ></Skeleton>
  </CUICard>
);

export default LessonCardSkeleton;
