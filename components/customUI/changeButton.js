import { Button } from '@mui/material'
import { useTheme } from '../RedTheme'

const ChangeButton = (props) => {
    const changeTheme = useTheme()
    return (
        <Button variant='contained' onClick={() => changeTheme('#333')}>{props.children}</Button>
    )
}

export default ChangeButton