import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/zh-tw';
import dayjs from 'dayjs';

// const [value, setValue] = useState(dayjs())
// console.log(dayjs(value).format('YYYY/MM/DD'))
// minDate={dayjs()}
// minDate={new Date()}

// translate(0, -1.5px) scale(0.75)

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
    borderBottomWidth: '1px',
  },
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderWidth: 0,
    borderRadius: 0,
    borderBottomWidth: '1px',
  },
  '&.MuiFormControl-root': {
    marginTop: '1rem',
  },
};

const CUIDatePicker = (props) => (
  <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="zh-tw">
    <DatePicker
      format="YYYY/MM/DD"
      {...props}
      sx={{ ...datePickerStyle, ...props.sx }}
    />
  </LocalizationProvider>
);

export default CUIDatePicker;
