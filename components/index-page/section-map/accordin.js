import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './section-map.module.css';
export default function Accordin({ locations, setLocation, location }) {
  const handleChange = (panel) => () => {
    setLocation(locations.find((el) => el.name === panel));
  };
  return (
    <div className={`${styles['accordin-container']}`}>
      {locations.map((el, i) => (
        <Accordion
          key={i}
          expanded={location.name === el.name}
          onChange={handleChange(el.name)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            id={`panel${i}-header`}
          >
            <Typography className={`${styles.title}`}>{el.name}館</Typography>
          </AccordionSummary>
          <AccordionDetails className={`${styles.detail}`}>
            {el?.transportation &&
              el?.transportation
                .split(',')
                .map((el2, i2) => (
                  <Typography key={i2 + 'transportation'}>{el2}</Typography>
                ))}
            <Typography>{el.tel}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
