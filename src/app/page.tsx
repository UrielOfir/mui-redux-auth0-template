'use client';
import styles from './page.module.css';
import {
  Box,
  Button,
  Container,
  Typography,
} from '@mui/material';
import Link from '@/components/Link';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { decrement, increment } from '@/lib/features/counterSlice';

export default function Home() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
 
  return (
    <main className={styles.main}>
      <Container maxWidth="lg">
        <Box
          sx={{
            my: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
            Material UI - Next.js example in TypeScript
          </Typography>
          <Box sx={{ maxWidth: 'sm', display: 'flex', gap: '10px' }}>

            <Button variant="contained" component={Link} noLinkStyle href="/about">
              Go to the about page
            </Button>
          </Box>

          <Box
            sx={{
              my: 4,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
              Count: {count}
            </Typography>
            <Box sx={{ maxWidth: 'sm', display: 'flex', gap: '10px' }}>
              <Button variant="contained" onClick={() => dispatch(increment())}>
                Add to count
              </Button>
              <Button variant="contained" onClick={() => dispatch(decrement())}>
                Reduce from count
              </Button>
            </Box>
          </Box>

        </Box>
      </Container>
    </main>
  );
}
