import { useState } from 'react'
import { Box, Slider, Typography } from '@mui/material'

import createColorTheme from '@/libs/CreateColorTheme'
import { MAIN_RED } from '@/assets/color-code'
const RedTheme = createColorTheme(MAIN_RED)

const defaultValue = {
    min: 200,
    max: 2000,
    origin: [500, 1400],
    distance: 50
}

export default function CUISlider(oriProps) {
    const props = {...defaultValue, ...oriProps}
    const [value, setValue] = useState(props.origin)

    const handleChange = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) return

        if (newValue[1] - newValue[0] >= props.distance) {
            return setValue(newValue)
        }

        if (activeThumb === 0) {
            const clamped = Math.min(newValue[0], props.max - props.distance)
            return setValue([clamped, clamped + props.distance])
        }

        const clamped = Math.max(newValue[1], props.distance + props.min)
        setValue([clamped - props.distance, clamped])
    }

    return (
        <RedTheme>
        <Box sx={{ width: '16rem', padding: '0 1rem' }}>
            <Typography 
                variant='subtitle2' 
                align='center' 
                mb={6} 
            >
                {props.label}
            </Typography>
            <Slider
                max={props.max}
                min={props.min}
                step={props.distance}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="on"
                disableSwap
            />
        </Box>
        </RedTheme>
    )
}
