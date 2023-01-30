import React, { useRef } from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import {
  Box,
  Card,
  Center,
  Container,
  Grid,
  Stack,
  Text,
  Title
} from '@mantine/core';

import DangerousHtml from '../components/ui/DangerousHtml';
import MovingGradientButton from '../components/ui/MovingGradientButton';
import Section from '../components/ui/Section';

import { colors } from '../styles/colors';

const IndexPage = ({ data }) => {
  const { datoCmsHome } = data;
  const contactRef = useRef(null);
  const aboutImage = getImage(datoCmsHome.aboutMeImage);

  const scrollIntoView = (ref) => {
    ref?.current?.scrollIntoView({ behaviour: 'smooth' });
  };

  return (
    <Container>
      <Section
        minHeight="100vh"
        content={
          <Stack my="4rem" spacing="xs">
            <Text
              size="md"
              color="indigo.2"
              px="4px"
              sx={{ fontFamily: 'Roboto Mono, Monaco, monospace' }}
            >
              Hello, my name is
            </Text>
            <Title
              order={1}
              variant="gradient"
              gradient={{ from: colors.purple, to: colors.pink, deg: 90 }}
              sx={{ fontSize: '6rem' }}
            >
              Matthew Cross.
            </Title>
            <Title
              order={2}
              variant="gradient"
              gradient={{ from: colors.teal, to: colors.orange, deg: 90 }}
              sx={{ fontSize: '4rem' }}
            >
              Software Developer.
            </Title>
            <Text
              px="4px"
              size="md"
              sx={{ maxWidth: '600px', whiteSpace: 'pre-wrap' }}
            >
              {datoCmsHome?.introduction}
            </Text>
            <Box>
              <MovingGradientButton
                onClick={() => scrollIntoView(contactRef)}
                my="lg"
                size="lg"
              >
                Get in touch
              </MovingGradientButton>
            </Box>
          </Stack>
        }
      />
      <Section
        minHeight="100vh"
        title="About Me"
        fullWidth
        gradientFrom={colors.purple}
        gradientTo={colors.pink}
        content={
          <Grid gutter="lg">
            <Grid.Col xs={12} md={6}>
              <Center sx={{ height: '100%' }}>
                <DangerousHtml
                  dangerouslySetInnerHTML={{
                    __html: datoCmsHome?.aboutMeNode?.childMarkdownRemark?.html
                  }}
                />
              </Center>
            </Grid.Col>
            <Grid.Col xs={12} md={6}>
              <Center p="lg">
                <Card shadow="lg">
                  <GatsbyImage image={aboutImage} alt="me" />
                </Card>
              </Center>
            </Grid.Col>
          </Grid>
        }
      />
      <Section
        ref={contactRef}
        minHeight="80vh"
        fullWidth
        content={
          <Center>
            <Stack align="center">
              <Title order={3} color="orange.5" sx={{ fontSize: '3rem' }}>
                Get In Touch.
              </Title>
              <Box sx={{ maxWidth: '500px', textAlign: 'center' }}>
                <DangerousHtml
                  dangerouslySetInnerHTML={{
                    __html:
                      datoCmsHome?.contactMessageNode?.childMarkdownRemark?.html
                  }}
                />
              </Box>
              <Box>
                <MovingGradientButton
                  component="a"
                  href="mailto:mattjcrossdev@gmail.com"
                  my="lg"
                  size="lg"
                >
                  Message Me
                </MovingGradientButton>
              </Box>
            </Stack>
          </Center>
        }
      />
    </Container>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query HomeQuery {
    datoCmsHome {
      introduction
      aboutMeNode {
        childMarkdownRemark {
          html
        }
      }
      aboutMeImage {
        gatsbyImageData(width: 500, height: 500, placeholder: BLURRED)
      }
      contactMessageNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

export const Head = () => (
  <title>Matthew Cross | Full Stack Web Developer</title>
);
