import React from 'react';
import { Link } from 'gatsby';

import { Box, Grid, Group } from '@mantine/core';

import SectionTitle from '../ui/SectionTitle';
import MovingGradientButton from '../ui/MovingGradientButton';
import ProjectCard from '../projects/ProjectCard';

const ProjectsSection = ({ projects }) => {
  return (
    <Box px="xl" py="3rem">
      <Group mb="3rem" position="apart">
        <SectionTitle
          order={4}
          variant="gradient"
          gradient={{ from: 'orange', to: 'grape', deg: 90 }}
        >
          Projects
        </SectionTitle>
        <MovingGradientButton component={Link} to="/projects" size="md" compact>
          See all
        </MovingGradientButton>
      </Group>
      <Grid>
        {projects?.slice(0, 4)?.map((project) => {
          return (
            <Grid.Col key={project?.originalId} span={12} md={6}>
              <ProjectCard project={project} />
            </Grid.Col>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ProjectsSection;
