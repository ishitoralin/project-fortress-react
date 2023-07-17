import Pagination from '@mui/material/Pagination';
import { Stack } from '@mui/material';
import styles from './member.module.css';

export default function MemberPagenation({ data }) {
  return (
    <>
      {parseInt(data?.totalPages) === 0 ? undefined : (
        <Stack
          justifyContent="center"
          alignItems="center"
          className={`${styles['pagination-container']}`}
        >
          <Pagination count={data?.totalPages || 0} siblingCount={0} />
        </Stack>
      )}
    </>
  );
}
