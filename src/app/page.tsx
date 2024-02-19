'use client';
import styles from './page.module.css';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Typography,
} from '@mui/material';
import { red } from '@mui/material/colors';
import Link from '@/components/Link';
import { useThemeContext } from '@/context/theme-toggle';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { decrement, increment } from '@/lib/features/counterSlice';

export default function Home() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const { toggleTheme , toggleRtl} = useThemeContext();

  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  console.log('user', user);

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
            <Button variant="contained" onClick={toggleTheme}>
              Toggle Theme
            </Button>
            <Button variant="contained" onClick={toggleRtl}>
              Toggle RTL / LTR
            </Button>
            <Button variant="contained" component={Link} noLinkStyle href="/api/auth/login">
              Login
            </Button>
            <Button variant="contained" component={Link} noLinkStyle href="/api/auth/logout">
              Logout
            </Button>
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

          <Box sx={{ maxWidth: 'sm', display: 'flex', gap: '10px' }}>
            {user ? (
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      {user?.name ? user?.name?.[0] + user?.name?.[1] : '??'}
                    </Avatar>
                  }
                  title={user.nickname || user.name || '??'}
                  subheader={user.sub || '??'}
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={user.picture || ''}
                  alt={user.name || user.nickname || '??'}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {user.email}
                  </Typography>
                </CardContent>
              </Card>
            ) : (
              <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
                You are not logged in
              </Typography>
            )}
          </Box>
        </Box>
      </Container>
    </main>
  );
}
