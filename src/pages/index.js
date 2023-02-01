import React from 'react';

import { graphql } from 'gatsby';

import { Divider } from '@mantine/core';

import HeaderSection from '../components/home/HeaderSection';
import ExperienceSection from '../components/home/ExperienceSection';

const Index = ({ data }) => {
  const { datoCmsHome } = data;

  return (
    <>
      <HeaderSection
        introduction={datoCmsHome?.introductionNode?.childMarkdownRemark?.html}
      />
      <Divider size="sm" />
      <ExperienceSection experiences={datoCmsHome?.workExperience} />
      <Divider size="sm" />
    </>
  );
};

export default Index;

export const pageQuery = graphql`
  query HomeQuery {
    datoCmsHome {
      introductionNode {
        childMarkdownRemark {
          html
        }
      }
      workExperience {
        company
        endDate(formatString: "Do MMM YYYY")
        startDate(formatString: "Do MMM YYYY")
        jobPosition
        id
      }
    }
  }
`;

export const Head = () => (
  <title>Matthew Cross | Full Stack Web Developer</title>
);
