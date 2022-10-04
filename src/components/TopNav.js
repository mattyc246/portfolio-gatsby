import React from 'react';
import { Link } from 'gatsby';
import { Anchor, Box, Group, Header, Image, MediaQuery } from '@mantine/core';

import Logo from '../images/logo.svg';
import NavLink from './ui/NavLink';

const TopNav = () => {
  return (
    <Header py="xl" px="xl" withBorder={false}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Anchor component={Link} to="/">
          <Image src={Logo} width="40px" alt="logo" />
        </Anchor>
        <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
          <Group mr="lg" spacing="xl">
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/blog">Blog</NavLink>
          </Group>
        </MediaQuery>
      </Box>
    </Header>
  );
};

export default TopNav;
