import React from 'react';

import { graphql } from 'gatsby';

import { Divider } from '@mantine/core';

import HeaderSection from '../components/home/HeaderSection';
import ExperienceSection from '../components/home/ExperienceSection';
import LatestPostsSection from '../components/home/LatestPostsSection';

const Index = ({ data }) => {
  const { datoCmsHome, allDatoCmsBlog } = data;

  return (
    <>
      <HeaderSection
        introduction={datoCmsHome?.introductionNode?.childMarkdownRemark?.html}
      />
      <Divider size="xs" mx="2rem" />
      <LatestPostsSection posts={allDatoCmsBlog?.edges} />
      <Divider size="xs" mx="2rem" />
      <ExperienceSection experiences={datoCmsHome?.workExperience} />
      <Divider size="xs" mx="2rem" />
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
    allDatoCmsBlog(limit: 5, sort: { fields: publishedDate, order: DESC }) {
      edges {
        node {
          originalId
          blurb
          publishedDate(formatString: "Do MMMM yyyy")
          title
          slug
          bodyNode {
            childMarkdownRemark {
              fields {
                readingTime {
                  text
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const Head = () => (
  <title>Matthew Cross | Full Stack Web Developer</title>
);
