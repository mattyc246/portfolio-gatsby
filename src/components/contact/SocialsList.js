import React from 'react';

import { NavLink, Stack } from '@mantine/core';
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconMail
} from '@tabler/icons';

const SocialsList = () => {
  return (
    <Stack spacing="sm">
      <NavLink
        component="a"
        href="mailto:mattjcrossdev@gmail.com"
        target="_blank"
        label="Email"
        description="Email me"
        icon={<IconMail />}
      />
      <NavLink
        component="a"
        href="https://www.github.com/mattyc246"
        target="_blank"
        label="Github"
        description="Code Repositories"
        icon={<IconBrandGithub />}
      />
      <NavLink
        component="a"
        href="https://linkedin.com/in/matthew-cross"
        target="_blank"
        label="LinkedIn"
        description="Personal LinkedIn profile"
        icon={<IconBrandLinkedin />}
      />
      <NavLink
        component="a"
        href="https://instagram.com/mattyc246"
        target="_blank"
        label="Instagram"
        description="Personal Instagram profile"
        icon={<IconBrandInstagram />}
      />
      <NavLink
        component="a"
        href="https://www.facebook.com/mattyc246/"
        target="_blank"
        label="Facebook"
        description="Personal Facebook profile"
        icon={<IconBrandFacebook />}
      />
    </Stack>
  );
};

export default SocialsList;
