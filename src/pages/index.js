import React from 'react';

import { graphql } from 'gatsby';

import { Divider } from '@mantine/core';

import HeaderSection from '../components/home/HeaderSection';
import ExperienceSection from '../components/home/ExperienceSection';

const Index = ({ data }) => {
  const { datoCmsHome } = data;

  return (
    <>
      <HeaderSection introduction={datoCmsHome?.introduction} />
      <Divider size="sm" />
      <ExperienceSection />
      <Divider size="sm" />
    </>
  );
};

export default Index;

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
