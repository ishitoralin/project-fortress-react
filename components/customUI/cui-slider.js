import { useState } from 'react';
import { Box, Slider, Typography } from '@mui/material';

import createColorTheme from '@/libs/CreateColorTheme';
import { MAIN_RED } from '@/assets/color-code';
const RedTheme = createColorTheme(MAIN_RED);

const defaultValue = {
  min: 200,
  max: 2000,
  origin: [500, 1400],
  distance: 50,
};

export default function CUISlider(oriProps) {
  const props = { ...defaultValue, ...oriProps };

  const [max, min, distance, firstThumb, secondThumb] = [
    props.max,
    props.min,
    props.distance,
    ...props.origin,
  ].map((value) => parseInt(value));

  const [value, setValue] = useState([firstThumb, secondThumb]);

  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) return;

    if (newValue[1] - newValue[0] >= distance) {
      return setValue(newValue);
    }

    if (activeThumb === 0) {
      const clamped = Math.min(newValue[0], max - distance);
      return setValue([clamped, clamped + distance]);
    }

    const clamped = Math.max(newValue[1], distance + min);
    return setValue([clamped - distance, clamped]);
  };

  return (
    <RedTheme>
      <Box sx={{ width: '100%', paddingLeft: '1rem', paddingRight: '1rem' }}>
        <Typography
          color={props.color}
          variant="subtitle1"
          align="center"
          mb={4}
        >
          {props.label}
        </Typography>
        <Slider
          max={max}
          min={min}
          step={distance}
          color={props.color}
          name={props.name}
          value={value}
          sx={{
            marginBottom: 3,
            '& .MuiSlider-thumb': {
              '.MuiSlider-valueLabelOpen': {
                userSelect: 'none',
                ':before': {
                  content: 'none',
                },
                transform: 'translateY(145%) translateX(0%) scale(1)',
              },
              ':last-child': {
                '.MuiSlider-valueLabelOpen': {
                  transform: 'translateY(-95%) translateX(0%) scale(1)',
                },
              },
            },
          }}
          onChange={(event, newValue, activeThumb) => {
            handleChange(event, newValue, activeThumb);
            if (props.onChange && typeof props.onChange !== 'function') {
              throw 'CUISlider onChange is not a function';
            }
            props.onChange && props.onChange(event);
          }}
          valueLabelDisplay="on"
          disableSwap
        />
      </Box>
    </RedTheme>
  );
}
