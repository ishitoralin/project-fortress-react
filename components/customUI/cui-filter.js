import { Divider, Typography, Stack, Paper } from '@mui/material'
import CUICard from './cui-card'
import { styled } from '@mui/material/styles'

const Item = styled(Paper)(() => ({
    padding: '1.5rem',
    borderRadius: 0
}))

const Filter = ({ items, label = "Filter Label" }) => {
    return (
        <CUICard>
            <Item>
                <Typography variant="h5">{label}</Typography>
            </Item>
            <Divider sx={{borderBottom: "3px solid lightgrey"}}/>
            <Stack>
            {items.map((item, index ) => 
                <Item sx={{borderBottom: "1px solid lightgrey"}}
                     elevation={0} 
                     key={index}
                >{item}</Item>
            )}
            </Stack>
        </CUICard>
    )
}

export default Filter