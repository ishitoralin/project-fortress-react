import { TextField, MenuItem } from '@mui/material'

import { styled } from '@mui/material/styles'

const MySelect = styled(TextField)(() => ({
    width: '16rem',
}))

export default function CUISelect(props) {
    return (
    <MySelect variant="standard" sx={props.sx}
        select
        id={props.id}
        label={props.label}
        defaultValue={props.defaultValue || ''}
        helperText={props.helperText}
    >
        {props.options?.map(option => 
            <MenuItem 
                key={option.key || option.value || option} 
                value={option.value || option}
            >
                {option.label || option}
            </MenuItem>
        )}
    </MySelect>
    ) 
}