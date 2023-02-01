import React from 'react';
import { graphql } from 'gatsby';

import { Box, Divider, Grid, Stack, Text, Title } from '@mantine/core';

import ProjectCard from '../components/projects/ProjectCard';

const Projects = ({ data }) => {
  const { datoCmsWork } = data;

  return (
    <Box px="xl" py="2rem">
      <Stack my="4rem" spacing="xs">
        <Title
          order={1}
          variant="gradient"
          gradient={{ from: 'grape', to: 'pink', deg: 90 }}
          sx={{
            fontSize: '4rem'
          }}
        >
          Projects.
        </Title>
        <Text size="md" px="4px">
          Check out some of the projects I have created, they could be personal
          pieces or freelance projects.
        </Text>
      </Stack>
      <Divider size="xs" />
      <Grid my="4rem">
        {datoCmsWork?.projects?.map((project) => {
          return (
            <Grid.Col key={project?.originalId} span={12}>
              <ProjectCard project={project} />
            </Grid.Col>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Projects;

export const pageQuery = graphql`
  query ProjectsQuery {
    datoCmsWork {
      projects {
        coverImage {
          url
        }
        description
        projectName
        siteUrl
        originalId
      }
    }
  }
`;
