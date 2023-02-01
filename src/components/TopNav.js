import React from 'react';
import {
  ActionIcon,
  Box,
  Group,
  Header,
  MediaQuery,
  useMantineColorScheme
} from '@mantine/core';

import NavLink from './ui/NavLink';
import MobileMenu from './MobileMenu';

import { IconSun, IconMoon } from '@tabler/icons';

const TopNav = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Header py="xl" px="xl" withBorder={false}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <MobileMenu />
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Group mr="lg" spacing="2rem">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            {/* <NavLink to="/projects">Projects</NavLink> */}
          </Group>
        </MediaQuery>
        <ActionIcon onClick={() => toggleColorScheme()}>
          {colorScheme === 'dark' ? (
            <IconSun size={18} />
          ) : (
            <IconMoon size={18} />
          )}
        </ActionIcon>
      </Box>
    </Header>
  );
};

export default TopNav;
