import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'

const MyCard = styled(Paper)(() => ({
    display: 'inline-block',
}))

export default function CUICard(props) {
    return <MyCard elevation={4}>{props.children}</MyCard>;
}