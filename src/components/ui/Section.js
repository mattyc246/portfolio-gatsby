import React from 'react';

import { Box, Divider, Title } from '@mantine/core';

const Section = (props) => {
  const { content, title, minHeight, fullWidth } = props;
  return (
    <Box
      component="section"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        minHeight: minHeight || '100vh'
      }}
    >
      {title && (
        <Box
          sx={{
            width: fullWidth ? '100%' : '50%',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Title order={3} variant="h3">
            {title}
          </Title>
          <Divider ml="lg" sx={{ flex: 1 }} color="orange.3" />
        </Box>
      )}
      {content}
    </Box>
  );
};

export default Section;
