import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
export default function CUIRadioButtons(props) {
  const ContainerFormStyle = props.ContainerFormStyle || {};
  const ButtonFormStyle = props.ButtonFormStyle || {};
  return (
    <>
      <FormControl sx={{ ...ContainerFormStyle }}>
        <FormLabel sx={{ marginBottom: '30px' }}>
          {props.RadioButtonTitle}
        </FormLabel>
        <RadioGroup
          row
          name="row-radio-buttons-group"
          sx={{ ...ButtonFormStyle }}
        >
          {props.RadioButtonArray.map((v, i) => {
            return (
              <>
                <Box
                  sx={{
                    width: `${100 / props.RadioButtonArray.length}` + '%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderLeft: `${i === 0 ? 'none' : '1px solid #D9D9D9'}`,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <FormControlLabel
                      // sx={{ position: 'absolute' }}
                      key={i}
                      value={v.value}
                      control={<Radio />}
                      label={v.label}
                    />
                    {v.src === '' ? (
                      v.Icon
                    ) : (
                      <img src={v.src} alt={v.alt} width={v.width}></img>
                    )}
                  </div>
                </Box>
              </>
            );
          })}
        </RadioGroup>
      </FormControl>
    </>
  );
}
