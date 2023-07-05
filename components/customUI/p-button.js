import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function PButton() {
  return (
    <>
      <Stack spacing={2} direction="row">
        <div>
          <Button variant="contained">運動衣物</Button>
        </div>
        <div>
          <Button variant="contained">健身器材</Button>
        </div>
        <div>
          <Button variant="contained">健身食品</Button>
        </div>
      </Stack>
    </>
  );
}
