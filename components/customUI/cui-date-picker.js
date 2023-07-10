import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/zh-tw';
import dayjs from 'dayjs';

// const [value, setValue] = useState(dayjs())
// console.log(dayjs(value).format('YYYY/MM/DD'))
// minDate={dayjs()}

const datePickerStyle = {
  '& .Mui-focused.MuiFormLabel-root, & .MuiFormLabel-filled.MuiFormLabel-root':
    {
      transform: 'translate(0, -1rem) scale(0.75)',
    },
  '& .MuiFormLabel-root': {
    transform: 'translate(0, 3px)',
  },
  '& .MuiOutlinedInput-input': {
    padding: '4px 0',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderWidth: 0,
    borderRadius: 0,
    borderBottomWidth: '2px',
  },
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderWidth: 0,
    borderRadius: 0,
    borderBottomWidth: '2px',
  },
  '&.MuiFormControl-root': {
    marginTop: '1rem',
  },
};

const defaultFormat = 'YYYY/MM/DD';

const CUIDatePicker = (props) => {
  const [value, defaultValue, minDate, maxDate] = [
    props.value,
    props.defaultValue,
    props.minDate,
    props.maxDate,
  ].map((item) => (item ? dayjs(item) : undefined));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="zh-tw">
      <DatePicker
        format={defaultFormat}
        views={['year', 'month', 'day']}
        {...props}
        sx={{ ...datePickerStyle, ...props.sx }}
        value={value}
        minDate={minDate}
        maxDate={maxDate}
        onChange={(timeObj) => {
          const time = dayjs(timeObj).format(props.format || defaultFormat);
          typeof props.onChange === 'function' && props.onChange(time);
        }}
      />
    </LocalizationProvider>
  );
};
export default CUIDatePicker;
