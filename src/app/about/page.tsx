'use client';
import { Box, Button, Container, Typography } from '@mui/material';
import Link from '@/components/Link';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { decrement, increment } from '@/lib/features/counterSlice';

export default function Home() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
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
        <Button variant="contained" component={Link} noLinkStyle href="/">
          Go to the home page
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
    </Container>
  );
}
