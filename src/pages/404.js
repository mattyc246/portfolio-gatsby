import * as React from 'react';

import { Box, Button, Center, Stack, Text } from '@mantine/core';

import Section from '../components/ui/Section';
import { navigate } from 'gatsby';

const NotFoundPage = () => {
  return (
    <Section
      minHeight="calc(100vh - 180px)"
      content={
        <Center>
          <Stack align="center" spacing="sm">
            <Text
              weight={800}
              size="7rem"
              variant="gradient"
              gradient={{ from: 'orange.7', to: 'orange.2', deg: 45 }}
              mb="-1.5rem"
            >
              404
            </Text>
            <Text
              size="2rem"
              weight={600}
              px="4px"
              sx={{ fontFamily: 'Roboto Mono, Monaco, monospace' }}
            >
              Page Not Found
            </Text>
            <Box>
              <Button
                onClick={() => navigate('/')}
                my="lg"
                variant="gradient"
                gradient={{ from: 'orange.7', to: 'orange.4' }}
              >
                Home
              </Button>
            </Box>
          </Stack>
        </Center>
      }
    />
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
