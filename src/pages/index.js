import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import {
  IconBrowser,
  IconServer,
  IconDatabase,
  IconBrandOpenSource
} from '@tabler/icons';

import {
  Box,
  Button,
  Card,
  Center,
  Container,
  Grid,
  Stack,
  Tabs,
  Text,
  Title
} from '@mantine/core';

import BackendStack from '../components/BackendStack';
import DangerousHtml from '../components/ui/DangerousHtml';
import DatabaseStack from '../components/DatabaseStack';
import FrontendStack from '../components/FrontendStack';
import Section from '../components/ui/Section';
import ServicesStack from '../components/ServicesStack';

import { useMediaQuery } from '@mantine/hooks';

const IndexPage = ({ data }) => {
  const { datoCmsHome } = data;
  const aboutImage = getImage(datoCmsHome.aboutMeImage);
  const matches = useMediaQuery('(min-width: 980px)');
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
        fullWidth
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
        minHeight="100vh"
        title="Tech Stacks"
        fullWidth
        content={
          <Card my="lg" shadow="lg">
            <Tabs
              orientation={matches ? 'vertical' : 'horizontal'}
              defaultValue="frontend"
              color="orange"
            >
              <Tabs.List>
                <Tabs.Tab value="frontend" icon={<IconBrowser size={16} />}>
                  Frontend
                </Tabs.Tab>
                <Tabs.Tab value="backend" icon={<IconServer size={16} />}>
                  Backend
                </Tabs.Tab>
                <Tabs.Tab value="database" icon={<IconDatabase size={16} />}>
                  Database
                </Tabs.Tab>
                <Tabs.Tab
                  value="services"
                  icon={<IconBrandOpenSource size={16} />}
                >
                  Services
                </Tabs.Tab>
              </Tabs.List>
              <Tabs.Panel value="frontend" p="lg">
                <FrontendStack />
              </Tabs.Panel>
              <Tabs.Panel value="backend" p="lg">
                <BackendStack />
              </Tabs.Panel>
              <Tabs.Panel value="database" p="lg">
                <DatabaseStack />
              </Tabs.Panel>
              <Tabs.Panel value="services" p="lg">
                <ServicesStack />
              </Tabs.Panel>
            </Tabs>
          </Card>
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
