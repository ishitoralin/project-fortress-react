import { TextField, MenuItem } from '@mui/material';

export default function CUISelect(props) {
  return (
    <TextField
      variant="standard"
      sx={{ width: '100%', ...props.sx }}
      select
      id={props.id}
      label={props.label}
      defaultValue={props.defaultValue || ''}
      helperText={props.helperText}
    >
      {props.options?.map((option) => (
        <MenuItem
          key={option.key || option.value || option}
          value={option.value || option}
        >
          {option.label || option}
        </MenuItem>
      ))}
    </TextField>
  );
}
