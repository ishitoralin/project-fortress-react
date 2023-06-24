import { FormControl, 
         InputLabel,
         Input,
         InputAdornment } from '@mui/material'

import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles'

const MySearch = styled(FormControl)(() => ({
    width: '16rem',
}))

export default function CUISearch(props) {
    return (
    <MySearch variant="standard" sx={props.sx} >
        <InputLabel htmlFor={props.id}>{props.label}</InputLabel>
        <Input id={props.id} text
            onClick={props.onClick}
            onChange={props.onChange}
            placeholder={props.placeholder}
            endAdornment={
            <InputAdornment position="end">
                <SearchIcon />
            </InputAdornment>
        }/>
    </MySearch>
    ) 
}