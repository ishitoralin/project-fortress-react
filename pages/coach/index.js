import CUIDatePicker from '@/components/customUI/cui-date-picker';
import CUISearch from '@/components/customUI/cui-search';

import dayjs from 'dayjs';

const day = dayjs('07-03-2023', 'DD-MM-YYYY');

const CoachPage = () => (
  <div style={{ padding: '5rem' }}>
    <h1>Coach Page</h1>
    <CUISearch label={'search'} />
    <CUIDatePicker
      label={'search'}
      format="MM-DD-YYYY"
      // minDate={'2022/02/04'}
      // maxDate={'2023/08/04'}
    />
    <CUISearch label={'search'} />
  </div>
);

export default CoachPage;
