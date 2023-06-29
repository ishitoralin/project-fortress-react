import { FormControl, InputLabel, Input, InputAdornment } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';

const MySearch = styled(FormControl)(() => ({
  width: '100%',
}));

export default function CUISearch(props) {
  return (
    <MySearch variant="standard" sx={props.sx}>
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
    </MySearch>
  );
}
