import React from 'react';

import { Box, Stack, Title } from '@mantine/core';

import DangerousHtml from '../ui/DangerousHtml';

const HeaderSection = ({ introduction }) => {
  return (
    <Box px="xl" py="2rem">
      <Stack spacing="xs">
        <Title
          order={1}
          variant="gradient"
          gradient={{ from: 'orange', to: 'grape', deg: 90 }}
          sx={{
            fontSize: '4rem'
          }}
        >
          Matthew Cross.
        </Title>
        <Title
          order={2}
          variant="gradient"
          gradient={{ from: 'lime', to: 'grape', deg: 125 }}
          sx={{
            fontSize: '2rem'
          }}
        >
          Software Developer.
        </Title>
        <DangerousHtml
          dangerouslySetInnerHTML={{
            __html: introduction
          }}
        />
      </Stack>
    </Box>
  );
};

export default HeaderSection;
