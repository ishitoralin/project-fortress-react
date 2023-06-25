import { Button, Container } from "@mui/material"
import CUICard from "@/components/customUI/CUICard"

const LessionPage = () => {
    return (
        <Container sx={{ padding: 2 }}>
            <CUICard sx={{ margin: 2, width: 100, height: 100, bgcolor: '#E0E3E7' }}>
            </CUICard>
            <CUICard sx={{ margin: 2, width: 100, height: 100, bgcolor: '#B2BAC2' }}>
            </CUICard>
            <CUICard sx={{ margin: 2, width: 100, height: 100, bgcolor: '#6F7E8C' }}>
            </CUICard>
        </Container>
    )
}

export default LessionPage