import { FormControl, InputLabel, Input, InputAdornment } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';

export default function CUISearch(props) {
  return (
    <FormControl variant="standard" sx={{ width: '100%', ...props.sx }}>
      <InputLabel>{props.label}</InputLabel>
      <Input
        type="text"
        onClick={props.onClick}
        onChange={props.onChange}
        placeholder={props.placeholder}
        endAdornment={
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        }
      />
    </FormControl>
  );
}