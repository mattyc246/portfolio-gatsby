import React from 'react';

import {
  Card,
  BackgroundImage,
  Box,
  Title,
  Text,
  Stack,
  Flex,
  Group,
  ActionIcon
} from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons';

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
          <Stack justify="space-between">
            <Group position="apart">
              <Title order={4}>{project?.projectName}</Title>
              {project?.sourceUrl && (
                <ActionIcon
                  component="a"
                  href={project?.sourceUrl}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                  size="sm"
                  variant="outline"
                >
                  <IconBrandGithub size="16" />
                </ActionIcon>
              )}
            </Group>
            <Text size="sm" sx={{ whiteSpace: 'pre-wrap' }}>
              {project?.description}
            </Text>
            <Flex align="center">
              {project?.languages?.split(',').map((language, index) => {
                return (
                  <>
                    <Text
                      key={language}
                      size="xs"
                      weight="bold"
                      align="center"
                      sx={{ fontFamily: 'Roboto Mono' }}
                    >
                      {language}
                    </Text>
                    {index !== project?.languages?.split(',').length - 1 && (
                      <Text px="xs">&bull;</Text>
                    )}
                  </>
                );
              })}
            </Flex>
          </Stack>
        </Box>
      </BackgroundImage>
    </Card>
  );
};

export default ProjectCard;
