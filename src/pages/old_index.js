import React, { useRef } from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { Box, Card, Center, Grid, Stack, Title } from '@mantine/core';

import DangerousHtml from '../components/ui/DangerousHtml';
import HeaderSection from '../components/home/HeaderSection';
import MovingGradientButton from '../components/ui/MovingGradientButton';
import Section from '../components/ui/Section';

import { colors } from '../styles/colors';
import AboutSection from '../components/home/AboutSection';

const IndexPage = ({ data }) => {
  const { datoCmsHome } = data;
  const contactRef = useRef(null);
  const aboutImage = getImage(datoCmsHome.aboutMeImage);

  const scrollIntoView = (ref) => {
    ref?.current?.scrollIntoView({ behaviour: 'smooth' });
  };

  return (
    <>
      <HeaderSection
        introduction={datoCmsHome?.introduction}
        scrollTo={() => scrollIntoView(contactRef)}
      />
      <AboutSection
        aboutImage={aboutImage}
        html={datoCmsHome?.aboutMeNode?.childMarkdownRemark?.html}
      />
      <Section
        ref={contactRef}
        minHeight="100vh"
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
    </>
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
