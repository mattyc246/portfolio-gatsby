import React from 'react';

import { Link } from 'gatsby';
import { Box, Center, Text } from '@mantine/core';

import SectionTitle from '../ui/SectionTitle';
import MovingGradientButton from '../ui/MovingGradientButton';

const ContactSection = () => {
  return (
    <Box px="xl" py="6rem">
      <Center mb="2rem">
        <SectionTitle
          order={4}
          variant="gradient"
          gradient={{ from: 'orange', to: 'grape', deg: 90 }}
        >
          Get In Touch
        </SectionTitle>
      </Center>
      <Center mb="2rem">
        <Text align="center" sx={{ maxWidth: 500 }}>
          Although I'm not currently looking for any new opportunities, you can
          always drop me an email and spark my interest. If you have any
          questions, or just want to say hi. My inbox is always open.
        </Text>
      </Center>
      <Center>
        <MovingGradientButton component={Link} to="/contact" size="md">
          Contact Me
        </MovingGradientButton>
      </Center>
    </Box>
  );
};

export default ContactSection;
