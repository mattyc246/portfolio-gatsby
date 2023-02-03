import React from 'react';

import { graphql } from 'gatsby';
import { HelmetDatoCms } from 'gatsby-source-datocms';

import { Divider } from '@mantine/core';

import HeaderSection from '../components/home/HeaderSection';
import ExperienceSection from '../components/home/ExperienceSection';
import LatestPostsSection from '../components/home/LatestPostsSection';
import ProjectsSection from '../components/home/ProjectsSection';

const Index = ({ data }) => {
  const { datoCmsHome, datoCmsWork, allDatoCmsBlog } = data;

  return (
    <>
      <HeaderSection
        introduction={datoCmsHome?.introductionNode?.childMarkdownRemark?.html}
      />
      <Divider size="xs" mx="2rem" />
      <LatestPostsSection posts={allDatoCmsBlog?.edges} />
      <Divider size="xs" mx="2rem" />
      <ProjectsSection projects={datoCmsWork?.projects} />
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
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
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
    datoCmsWork {
      projects {
        coverImage {
          url
        }
        description
        projectName
        siteUrl
        originalId
      }
    }
  }
`;

export const Head = ({ data }) => {
  const { datoCmsHome } = data;
  return <HelmetDatoCms seo={datoCmsHome.seoMetaTags} />;
};
