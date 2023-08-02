import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import styles from '@/styles/product.module.css';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from '@mui/material';

export default function BasicAccordion() {
  return (
    <div>
      <Accordion
        className={`${styles['Accordion']}`}
        sx={{ backgroundColor: 'none', border: 'none', boxShadow: 'none' }}
      >
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          sx={{ backgroundColor: 'none', border: 'none', boxShadow: 'none' }}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Link href="1" style={{ textDecoration: 'none', color: 'black' }}>
            <Typography className={`${styles['Accordion']}`}>
              運動衣物
            </Typography>
          </Link>
        </AccordionSummary>
        <AccordionDetails
          sx={{ backgroundColor: 'none', border: 'none', boxShadow: 'none' }}
        >
          <Typography>上衣類</Typography>
        </AccordionDetails>
        <AccordionDetails
          sx={{ backgroundColor: 'none', border: 'none', boxShadow: 'none' }}
        >
          <Typography>褲子類</Typography>
        </AccordionDetails>
        <AccordionDetails
          sx={{ backgroundColor: 'none', border: 'none', boxShadow: 'none' }}
        >
          <Typography>鞋子類</Typography>
        </AccordionDetails>
        <AccordionDetails
          sx={{ backgroundColor: 'none', border: 'none', boxShadow: 'none' }}
        >
          <Typography>襪子類</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        className={`${styles['Accordion']}`}
        sx={{ backgroundColor: 'none', border: 'none', boxShadow: 'none' }}
      >
        <AccordionSummary
          className={`${styles['Accordion']}`}
          // expandIcon={<ExpandMoreIcon />}
          sx={{ backgroundColor: 'none', border: 'none', boxShadow: 'none' }}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={`${styles['Accordion']}`}>健身食品</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{ backgroundColor: 'none', border: 'none', boxShadow: 'none' }}
        >
          <Typography>蛋白粉</Typography>
        </AccordionDetails>
        <AccordionDetails
          sx={{ backgroundColor: 'none', border: 'none', boxShadow: 'none' }}
        >
          <Typography>能量補給</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className={`${styles['Accordion']}`}
        sx={{ backgroundColor: 'none', border: 'none', boxShadow: 'none' }}
      >
        <AccordionSummary
          className={`${styles['Accordion']}`}
          // expandIcon={<ExpandMoreIcon />}
          sx={{ backgroundColor: 'none', border: 'none', boxShadow: 'none' }}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>健身器材</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}