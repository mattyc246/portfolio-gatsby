import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import {
  Box,
  Button,
  Center,
  Container,
  Grid,
  Stack,
  Text,
  Title
} from '@mantine/core';

import Section from '../components/ui/Section';
import DangerousHtml from '../components/ui/DangerousHtml';

const IndexPage = ({ data }) => {
  const { datoCmsHome } = data;
  const aboutImage = getImage(datoCmsHome.aboutMeImage);
  return (
    <Container>
      <Section
        minHeight="90vh"
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
            <Title order={1} color="orange.5" sx={{ fontSize: '4rem' }}>
              Matthew Cross.
            </Title>
            <Title order={2} color="orange.3" sx={{ fontSize: '4rem' }}>
              Full Stack Software Developer.
            </Title>
            <Text
              px="4px"
              size="md"
              sx={{ maxWidth: '600px', whiteSpace: 'pre-wrap' }}
            >
              {datoCmsHome?.introduction}
            </Text>
            <Box>
              <Button
                my="lg"
                variant="gradient"
                gradient={{ from: 'orange.7', to: 'orange.3' }}
              >
                See what tech I use
              </Button>
            </Box>
          </Stack>
        }
      />
      <Section
        minHeight="100vh"
        title="About Me"
        content={
          <Grid gutter="lg">
            <Grid.Col xs={12} md={6}>
              <DangerousHtml
                dangerouslySetInnerHTML={{
                  __html: datoCmsHome?.aboutMeNode?.childMarkdownRemark?.html
                }}
              />
            </Grid.Col>
            <Grid.Col xs={12} md={6}>
              <Center p="lg">
                <GatsbyImage image={aboutImage} alt="me" />
              </Center>
            </Grid.Col>
          </Grid>
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
    }
  }
`;

export const Head = () => <title>Home Page</title>;
