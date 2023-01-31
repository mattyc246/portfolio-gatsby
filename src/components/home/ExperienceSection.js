import React from 'react';

import { Box, Timeline, Text } from '@mantine/core';

import SectionTitle from '../ui/SectionTitle';

const ExperienceSection = () => {
  return (
    <Box px="xl" py="3rem">
      <Box mb="2rem">
        <SectionTitle
          order={3}
          variant="gradient"
          gradient={{ from: 'orange', to: 'grape', deg: 90 }}
        >
          Work Experience
        </SectionTitle>
      </Box>
      <Timeline>
        <Timeline.Item title="Default bullet" bulletSize={16}>
          <Text color="dimmed" size="sm">
            Default bullet without anything
          </Text>
        </Timeline.Item>
        <Timeline.Item title="Default bullet" bulletSize={16}>
          <Text color="dimmed" size="sm">
            Default bullet without anything
          </Text>
        </Timeline.Item>
      </Timeline>
    </Box>
  );
};

export default ExperienceSection;
