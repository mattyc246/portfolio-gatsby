import React from 'react';
import { Footer, Center, Group, Text, ActionIcon, Stack } from '@mantine/core';

import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin
} from '@tabler/icons';

const BottomFooter = () => {
  return (
    <Footer pb="md" withBorder={false}>
      <Center>
        <Stack align="center">
          <Text size="xs" sx={{ fontFamily: 'Roboto Mono, Monaco, monospace' }}>
            Design & Code by Matthew Cross
          </Text>
          <Group>
            <ActionIcon
              component="a"
              href="https://github.com/mattyc246"
              target="_blank"
              color="orange.3"
              radius="md"
              variant="outline"
            >
              <IconBrandGithub size={16} />
            </ActionIcon>
            <ActionIcon
              component="a"
              href="https://instagram.com/mattyc246"
              target="_blank"
              color="orange.3"
              radius="md"
              variant="outline"
            >
              <IconBrandInstagram size={16} />
            </ActionIcon>
            <ActionIcon
              component="a"
              href="https://linkedin.com/in/matthew-cross"
              target="_blank"
              color="orange.3"
              radius="md"
              variant="outline"
            >
              <IconBrandLinkedin size={16} />
            </ActionIcon>
          </Group>
        </Stack>
      </Center>
    </Footer>
  );
};

export default BottomFooter;
