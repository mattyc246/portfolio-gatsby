import React from 'react';

import { Box, Divider, Stack, Text, Title } from '@mantine/core';

const Contact = () => {
  return (
    <Box px="xl" py="2rem">
      <Stack my="4rem" spacing="xs">
        <Title
          order={1}
          variant="gradient"
          gradient={{ from: 'orange', to: 'grape', deg: 45 }}
          sx={{
            fontSize: '4rem'
          }}
        >
          Contact.
        </Title>
        <Text size="md" px="4px">
          Find your ideal way to get in touch with me, or, just simply leave me
          a message and I'll get back to you.
        </Text>
      </Stack>
      <Divider size="xs" />
    </Box>
  );
};

export default Contact;
