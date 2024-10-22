import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Card,
  CardContent,
  IconButton,
  Fade,
  Grid,
} from '@mui/material';
import { styled } from '@mui/system';
import EventIcon from '@mui/icons-material/Event';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Events from '../assets/events.svg';

const StyledAppBar = styled(AppBar)({
  background: 'transparent',
  boxShadow: 'none',
  transition: 'all 0.3s ease',
});

const HeroSection = styled(Box)({
  minHeight: '90vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#333',
  textAlign: 'left',
  position: 'relative',
});

const HeroContent = styled(Box)({
  zIndex: 1,
  position: 'relative',
  maxWidth: '1200px',
  width: '100%',
  padding: '0 20px',
});

const FeatureCard = styled(Card)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s ease-in-out',
  borderRadius: '15px',
  overflow: 'hidden',
  boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
  },
});

const TestimonialCard = styled(Card)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s ease-in-out',
  borderRadius: '15px',
  overflow: 'hidden',
  boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
  },
});

const Footer = styled(Box)({
  padding: '40px 0',
  background: '#f0f0f0',
  color: '#333',
  textAlign: 'center',
  position: 'relative',
  zIndex: 1,
});

const FacebookIconStyled = styled(FacebookIcon)({
  color: '#3b5998',
});

const TwitterIconStyled = styled(TwitterIcon)({
  color: '#1da1f2',
});

const InstagramIconStyled = styled(InstagramIcon)({
  color: '#e1306c',
});

const YouTubeIconStyled = styled(YouTubeIcon)({
  color: '#ff0000',
});

const WhatsAppIconStyled = styled(WhatsAppIcon)({
  color: '#25D366',
});

const LandingPage = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignUpClick = () => {
    navigate('/login');
  };

  return (
    <Box>
      <StyledAppBar position="fixed" color={isScrolled ? 'default' : 'transparent'} elevation={isScrolled ? 4 : 0}>
        <Container>
          <Toolbar disableGutters>
            <Typography
              variant="h5"
              sx={{
                flexGrow: 1,
                fontWeight: 'bold',
                color: '#333',
                textAlign: 'left',
                fontSize: '1.5rem',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img
                src="/images/logo.png"
                alt="EventMaster Logo"
                style={{ width: '40px', height: '40px', marginRight: '8px' }}
              />
              EventMaster
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button
                variant="outlined"
                onClick={handleSignUpClick}
                sx={{
                  borderColor: '#1a237e',
                  color: '#1a237e',
                  '&:hover': {
                    backgroundColor: '#1a237e',
                    borderColor: '#fff',
                    color: '#fff',
                  },
                }}
              >
                Sign In
              </Button>
            </Box>
            <IconButton
              sx={{ display: { xs: 'flex', md: 'none' }, color: '#333' }}
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </StyledAppBar>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '64px',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
          transition: 'all 0.3s ease-in-out',
          zIndex: 1099,
        }}
      />

      <HeroSection alignItems="center" sx={{ mt: -1, ml: { xs: 0, md: 4 } }}>
        <HeroContent>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Fade in={true} timeout={1000}>
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: '350',
                    mb: 1,
                    mr: 22,
                    fontSize: { xs: '2.5rem', md: '4.5rem' },
                    color: '#1a237e',
                    '&:hover': {
                      animation: 'dance 0.5s ease-in-out infinite alternate',
                    },
                  }}
                >
                  Elevate Your Events with EventMaster
                </Typography>
              </Fade>
              <Fade in={true} timeout={1500}>
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 300, color: '#333' }}>
                  Seamless planning, unforgettable experiences. From concept to execution, we&apos;ve got you covered.
                </Typography>
              </Fade>
              <Fade in={true} timeout={2000}>
                <Button
                  variant="contained"
                  onClick={handleSignUpClick}
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    mt: 1,
                    backgroundColor: '#1a237e',
                    color: 'white',
                    padding: '10px 25px',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    borderRadius: '25px',
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: '#3f51b5',
                      transform: 'scale(1.05)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Start Planning Now
                </Button>
              </Fade>
            </Grid>
            <Grid item xs={12} md={5}>
              <Fade in={true} timeout={2500}>
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={Events}
                    alt="Event planning hero image"
                    style={{
                      width: '100%',
                      height: '100%',
                      maxWidth: '350px',
                      maxHeight: '350px',
                      objectFit: 'contain',
                    }}
                  />
                </Box>
              </Fade>
            </Grid>
          </Grid>
        </HeroContent>
      </HeroSection>

      <Container sx={{ py: 8, mt: -4 }} id="features">
        <Typography variant="h2" sx={{ textAlign: 'center', mb: 6, fontWeight: 'bold', color: '#1a237e' }}>
          Why Choose Us
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard>
              <CardContent sx={{ textAlign: 'center' }}>
                <EventIcon sx={{ fontSize: '60px', color: '#1a237e' }} />
                <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', mt: 2 }}>
                  Easy Event Creation
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  Create and manage events with just a few clicks. Our intuitive interface makes planning a breeze.
                </Typography>
              </CardContent>
            </FeatureCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard>
              <CardContent sx={{ textAlign: 'center' }}>
                <ConfirmationNumberIcon sx={{ fontSize: '60px', color: '#1a237e' }} />
                <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', mt: 2 }}>
                  Ticket Management
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  Sell tickets effortlessly and manage attendees with our integrated ticketing system.
                </Typography>
              </CardContent>
            </FeatureCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard>
              <CardContent sx={{ textAlign: 'center' }}>
                <NotificationsActiveIcon sx={{ fontSize: '60px', color: '#1a237e' }} />
                <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', mt: 2 }}>
                  Real-time Notifications
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  Stay updated with real-time notifications about event changes and updates.
                </Typography>
              </CardContent>
            </FeatureCard>
          </Grid>
        </Grid>
      </Container>

      <Container sx={{ py: 8, mt: 4 }} id="testimonials">
        <Typography variant="h2" sx={{ textAlign: 'center', mb: 6, fontWeight: 'bold', color: '#1a237e' }}>
          What Our Users Say
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <TestimonialCard>
              <CardContent>
                <FormatQuoteIcon sx={{ fontSize: '40px', color: '#1a237e', mb: 2 }} />
                <Typography variant="body1" sx={{ mb: 2 }}>
                  "EventMaster transformed our event planning experience. It was seamless and stress-free!"
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  - Alex Johnson
                </Typography>
              </CardContent>
            </TestimonialCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TestimonialCard>
              <CardContent>
                <FormatQuoteIcon sx={{ fontSize: '40px', color: '#1a237e', mb: 2 }} />
                <Typography variant="body1" sx={{ mb: 2 }}>
                  "The ticketing system is fantastic! It made managing attendees a breeze."
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  - Maria Smith
                </Typography>
              </CardContent>
            </TestimonialCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TestimonialCard>
              <CardContent>
                <FormatQuoteIcon sx={{ fontSize: '40px', color: '#1a237e', mb: 2 }} />
                <Typography variant="body1" sx={{ mb: 2 }}>
                  "I love the real-time notifications! I always know what's happening with my events."
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  - Sarah Lee
                </Typography>
              </CardContent>
            </TestimonialCard>
          </Grid>
        </Grid>
      </Container>

      <Footer>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Follow Us
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <IconButton>
            <FacebookIconStyled />
          </IconButton>
          <IconButton>
            <TwitterIconStyled />
          </IconButton>
          <IconButton>
            <InstagramIconStyled />
          </IconButton>
          <IconButton>
            <YouTubeIconStyled />
          </IconButton>
          <IconButton>
            <WhatsAppIconStyled />
          </IconButton>
        </Box>
        <Typography variant="body1" sx={{ mb: 1 }}>
          &copy; {new Date().getFullYear()} EventMaster. All rights reserved.
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Contact: <MailOutlineIcon sx={{ verticalAlign: 'middle' }} /> support@eventmaster.com
        </Typography>
        <Typography variant="body2" color="textSecondary">
          WhatsApp: <WhatsAppIcon sx={{ verticalAlign: 'middle' }} /> +123 456 7890
        </Typography>
      </Footer>
    </Box>
  );
};

export default LandingPage;
