import CUIDatePicker from '@/components/customUI/cui-date-picker';
import CUISearch from '@/components/customUI/cui-search';
import CUISelect from '@/components/customUI/cui-select';
import dayjs from 'dayjs';

const day = dayjs('07-03-2023', 'DD-MM-YYYY');

const CoachPage = () => (
  <div style={{ padding: '5rem' }}>
    <h1>Coach Page</h1>
    <CUISearch label={'search'}/>
    <CUIDatePicker label={'label'} />
    <CUISearch label={'search'}/>
    <CUIDatePicker label={'label'} />
  </div>
);

export default CoachPage;
