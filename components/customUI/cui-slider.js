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

  const [firstThumb, secondThunb, max, min, distance] = [
    ...props.origin,
    props.max,
    props.min,
    props.distance,
  ].map((value) => parseInt(value));

  const onChange =
    typeof props.onChange === 'function' ? props.onChange : () => {};

  const [value, setValue] = useState([firstThumb, secondThunb]);

  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) return onChange(event);

    if (newValue[1] - newValue[0] >= distance) {
      setValue(newValue);
      return onChange(event);
    }

    if (activeThumb === 0) {
      const clamped = Math.min(newValue[0], max - distance);
      setValue([clamped, clamped + distance]);
      return onChange(event);
    }

    const clamped = Math.max(newValue[1], distance + min);
    setValue([clamped - distance, clamped]);
    return onChange(event);
  };

  return (
    <RedTheme>
      <Box sx={{ width: '100%', padding: '0 1rem' }}>
        <Typography variant="subtitle2" align="center" mb={6}>
          {props.label}
        </Typography>
        <Slider
          max={max}
          min={min}
          step={distance}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="on"
          disableSwap
        />
      </Box>
    </RedTheme>
  );
}
