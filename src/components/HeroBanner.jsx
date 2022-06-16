
import { Box, Stack, Typography, Button } from '@mui/material'

import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
    return (
      <Box sx={{
        mt: { lg: '212px', xs: '70px' },
        ml: { sm: '50px' }
      }} position='relative' p='20px'>
        <Typography 
          color='#FF2625'
          fontSize='26px'
          fontWeight='600'
        >
          Fitness Club
        </Typography>
        <Typography 
          fontWeight={700}
          sx={{fontSize: { lg: '44px', xs: '40px' }}}
          mb='23px' mt='30px'
        >
          Sweat, Smile <br /> And Repeat
        </Typography>
        <Typography 
          fontSize='22px'
          lineHeight='35px'
          marginBottom={4}
        >
          Check out the most efective excercises
        </Typography>
        <Button
          variant="contained"
          color='error'
          href='#excercises'
          sx={{backgroundColor: '#FF2625', padding: '10px'}}
        >Explore Excercises</Button>

        <Typography 
          fontWeight={600}
          color='#FF2625'
          sx={{
            opacity: 0.1,
            display: {lg: 'block', xs: 'none'}
          }}
          fontSize='200px'
        >
          Excercise
        </Typography>

        <img src={HeroBannerImage} alt="Hero Image" className='hero-banner-img' />
      </Box>
    )
}

export default HeroBanner