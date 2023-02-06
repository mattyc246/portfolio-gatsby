import React from 'react';
import { graphql } from 'gatsby';

import { Box, Divider, Grid, Stack, Text, Title } from '@mantine/core';

import ProjectCard from '../components/projects/ProjectCard';
import { HelmetDatoCms } from 'gatsby-source-datocms';

const Projects = ({ data }) => {
  const { datoCmsWork } = data;

  return (
    <Box px="xl" py="2rem">
      <Stack my="4rem" spacing="xs">
        <Title
          order={1}
          variant="gradient"
          gradient={{ from: 'orange', to: 'grape', deg: 45 }}
          sx={{
            fontSize: '4rem'
          }}
        >
          Projects.
        </Title>
        <Text size="md" px="4px">
          Here is a collection of some of the projects that I have worked on,
          they can range from personal projects to freelance work.
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
        languages
      }
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;

export const Head = ({ data }) => {
  const { datoCmsWork } = data;
  return <HelmetDatoCms seo={datoCmsWork.seoMetaTags} />;
};
