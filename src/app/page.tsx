'use client';
import styles from './page.module.css';
import {
  Box,
  Button,
  Container,
  Typography,
} from '@mui/material';
import { red } from '@mui/material/colors';
import Link from '@/components/Link';
import { useThemeContext } from '@/context/theme-toggle';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { decrement, increment } from '@/lib/features/counterSlice';
import AuthButton from '@/components/AuthButton';

export default function Home() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const { toggleTheme , toggleRtl} = useThemeContext();

  // const { user, error, isLoading } = useUser();

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>{error.message}</div>;
 
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
