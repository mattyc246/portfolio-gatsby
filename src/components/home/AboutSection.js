import React from 'react';

import { GatsbyImage } from 'gatsby-plugin-image';

import { Grid, Center, Card } from '@mantine/core';

import DangerousHtml from '../ui/DangerousHtml';
import Section from '../ui/Section';

import { colors } from '../../styles/colors';

const AboutSection = ({ html, aboutImage }) => {
  return (
    <Section
      minHeight="100vh"
      title="About Me"
      fullWidth
      gradientFrom={colors.purple}
      gradientTo={colors.pink}
      content={
        <Grid gutter="lg">
          <Grid.Col xs={12} md={7}>
            <Center sx={{ height: '100%' }}>
              <DangerousHtml
                dangerouslySetInnerHTML={{
                  __html: html
                }}
              />
            </Center>
          </Grid.Col>
          <Grid.Col xs={12} md={5}>
            <Center p="lg">
              <Card shadow="lg">
                <GatsbyImage image={aboutImage} alt="me" />
              </Card>
            </Center>
          </Grid.Col>
        </Grid>
      }
    />
  );
};

export default AboutSection;
