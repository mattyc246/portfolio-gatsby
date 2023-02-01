import React, { useState } from 'react';

import {
  Burger,
  Center,
  Drawer,
  MediaQuery,
  Group,
  Stack
} from '@mantine/core';

import NavLink from './ui/NavLink';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
        <Group mr="lg" spacing="xl">
          <Burger onClick={() => setIsOpen(true)} size="sm" color="orange" />
        </Group>
      </MediaQuery>
      <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
        <Drawer
          padding="lg"
          opened={isOpen}
          onClose={() => setIsOpen(false)}
          position="right"
          transition="slide-left"
          transitionDuration={300}
          transitionTimingFunction="ease-in-out"
        >
          <Stack spacing="xl">
            <Center>
              <NavLink onClick={() => setIsOpen(false)} to="/">
                Home
              </NavLink>
            </Center>
            <Center>
              <NavLink onClick={() => setIsOpen(false)} to="/blog">
                Blog
              </NavLink>
            </Center>
            <Center>
              <NavLink onClick={() => setIsOpen(false)} to="/projects">
                Projects
              </NavLink>
            </Center>
          </Stack>
        </Drawer>
      </MediaQuery>
    </>
  );
};

export default MobileMenu;
