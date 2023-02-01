import React from 'react';

import { Box, Timeline, Text, ThemeIcon } from '@mantine/core';
import { IconCheck } from '@tabler/icons';

import SectionTitle from '../ui/SectionTitle';

const ExperienceSection = ({ experiences }) => {
  return (
    <Box px="xl" py="3rem">
      <Box mb="3rem">
        <SectionTitle
          order={4}
          variant="gradient"
          gradient={{ from: 'orange', to: 'grape', deg: 90 }}
        >
          Work Experience
        </SectionTitle>
      </Box>
      <Timeline active={0} radius="xs">
        {experiences?.map((experience, index) => {
          return (
            <Timeline.Item
              title={experience?.company}
              bulletSize={16}
              bullet={
                index === 0 ? (
                  <ThemeIcon
                    size={22}
                    variant="gradient"
                    gradient={{ from: 'orange', to: 'grape', deg: 90 }}
                    radius="xl"
                  >
                    <IconCheck size={14} />
                  </ThemeIcon>
                ) : null
              }
            >
              <Text size="sm">{experience?.jobPosition}</Text>
              <Text color="dimmed" size="sm">
                {experience?.startDate} → {experience?.endDate || 'Present'}
              </Text>
            </Timeline.Item>
          );
        })}
      </Timeline>
    </Box>
  );
};

export default ExperienceSection;
