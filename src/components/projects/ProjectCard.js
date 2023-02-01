import React from 'react';

import { Card, BackgroundImage, Box, Title, Text } from '@mantine/core';

const ProjectCard = ({ project }) => {
  return (
    <Card
      {...(project?.siteUrl
        ? { component: 'a', href: project?.siteUrl, target: '_blank' }
        : null)}
      p="2px"
      sx={(theme) => ({
        transition: 'transform 0.5s ease',
        background: theme.fn.gradient({
          from: 'orange',
          to: 'grape',
          deg: 90
        }),
        ':hover': {
          transform: 'scale(1.02)'
        }
      })}
    >
      <BackgroundImage
        src={project?.coverImage?.url}
        radius="sm"
        pos="relative"
        sx={{ minHeight: '250px' }}
      >
        <Card
          h="100%"
          w="100%"
          pos="absolute"
          top="0"
          left="0"
          opacity={0.9}
          sx={{ zIndex: 0 }}
        ></Card>
        <Box p="lg" pos="relative" sx={{ zIndex: 1 }}>
          <Title order={4}>{project?.projectName}</Title>
          <Text mt="lg" size="sm" sx={{ whiteSpace: 'pre-wrap' }}>
            {project?.description}
          </Text>
        </Box>
      </BackgroundImage>
    </Card>
  );
};

export default ProjectCard;
