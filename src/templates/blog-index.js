import React from 'react';
import styled from '@emotion/styled';

import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons';

import {
  Anchor,
  Button,
  Box,
  Container,
  Divider,
  Group,
  Stack,
  Text,
  Title
} from '@mantine/core';

import BlogCard from '../components/blog/BlogCard';
import Section from '../components/ui/Section';

const StyledAnchor = styled(Anchor)`
  color: ${({ theme }) => theme.colors.orange[5]};
  font-weight: 600;
  text-decoration: none;

  :hover {
    color: ${({ theme }) => theme.colors.orange[7]};
  }
`;
const Avatar = styled(GatsbyImage)`
  width: 75px;
  height: 75px;
  border-radius: 50%;
`;

const Blog = ({ data, pageContext }) => {
  const { datoCmsBlogpage, allDatoCmsBlog } = data;

  const avatarImage = getImage(datoCmsBlogpage?.avatar?.gatsbyImageData);

  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage =
    currentPage - 1 === 1
      ? '/blog'
      : `/blog/page-${(currentPage - 1).toString()}`;
  const nextPage = `/blog/page-${(currentPage + 1).toString()}`;

  return (
    <Container>
      <Section
        minHeight="30vh"
        content={
          <>
            <Stack my="4rem" spacing="xs">
              <Title order={1} color="orange.5" sx={{ fontSize: '4rem' }}>
                Blog.
              </Title>
              <Group noWrap>
                <Avatar image={avatarImage} />
                <Box style={{ flex: 1 }}>
                  <Text size="lg" px="4px">
                    Personal blog by{' '}
                    <StyledAnchor
                      href="https://www.github.com/mattyc246"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Matthew Cross
                    </StyledAnchor>
                  </Text>
                  <Text size="md" px="4px">
                    A place for my thoughts, the occasional tutorial and some
                    unpopular opinions.
                  </Text>
                </Box>
              </Group>
            </Stack>
            <Divider color="orange.5" />
            <Stack my="4rem" spacing="3rem">
              {allDatoCmsBlog?.edges?.map(({ node: page }) => {
                return (
                  <BlogCard
                    key={page?.originalId}
                    slug={page?.slug}
                    publishedDate={page?.publishedDate}
                    readingTime={
                      page?.bodyNode?.childMarkdownRemark?.fields?.readingTime
                        ?.text
                    }
                    blurb={page?.blurb}
                    title={page?.title}
                  />
                );
              })}
            </Stack>
            <Group mb="4rem" position="apart">
              {!isFirst ? (
                <Button
                  component={Link}
                  to={prevPage}
                  leftIcon={<IconArrowLeft />}
                  variant="subtle"
                  color="orange.5"
                  size="md"
                >
                  Previous Page
                </Button>
              ) : (
                <Box />
              )}
              {!isLast ? (
                <Button
                  component={Link}
                  to={nextPage}
                  rightIcon={<IconArrowRight />}
                  variant="subtle"
                  color="orange.5"
                  size="md"
                >
                  Next Page
                </Button>
              ) : (
                <Box />
              )}
            </Group>
          </>
        }
      />
    </Container>
  );
};

export default Blog;

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    datoCmsBlogpage {
      avatar {
        alt
        gatsbyImageData(height: 150, width: 150, placeholder: BLURRED)
      }
    }
    allDatoCmsBlog(
      sort: { fields: publishedDate, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          originalId
          slug
          publishedDate(formatString: "Do MMMM yyyy")
          title
          blurb
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

export const Head = () => <title>Blog | Matthew Cross</title>;
