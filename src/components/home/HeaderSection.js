import React from 'react';

import { Box, Stack, Text, Title } from '@mantine/core';

const HeaderSection = ({ introduction }) => {
  return (
    <Box px="xl" py="2rem">
      <Stack spacing="xs">
        <Title
          order={1}
          variant="gradient"
          gradient={{ from: 'grape', to: 'pink', deg: 90 }}
          sx={{
            fontSize: '4rem'
          }}
        >
          Matthew Cross.
        </Title>
        <Title
          order={2}
          variant="gradient"
          gradient={{ from: 'teal', to: 'orange', deg: 90 }}
          sx={{
            fontSize: '2rem'
          }}
        >
          Software Developer.
        </Title>
        <Text
          px="4px"
          size="sm"
          sx={{ maxWidth: '600px', whiteSpace: 'pre-wrap' }}
        >
          {introduction}
        </Text>
      </Stack>
    </Box>
  );
};

export default HeaderSection;
