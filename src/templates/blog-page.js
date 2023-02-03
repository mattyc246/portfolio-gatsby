import React from 'react';

import { Link, graphql } from 'gatsby';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import { Box, Divider, Stack, Text, Title } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons';

import BlogDangerousHtml from '../components/ui/BlogDangerousHtml';
import MovingGradientButton from '../components/ui/MovingGradientButton';

const BlogPage = ({ data }) => {
  const { datoCmsBlog } = data;

  return (
    <Box px="xl" py="2rem">
      <MovingGradientButton
        component={Link}
        to="/blog"
        leftIcon={<IconArrowLeft />}
        compact
      >
        Back
      </MovingGradientButton>
      <Stack mt="2rem" spacing="xs">
        <Title order={1} color="orange.5" sx={{ fontSize: '2.5rem' }}>
          {datoCmsBlog?.title}
        </Title>
        <Text>{datoCmsBlog?.blurb}</Text>
        <Text size="sm">
          {datoCmsBlog?.publishedDate}{' '}
          <Text component="span" sx={{ padding: '0 0.25rem' }}>
            &bull;
          </Text>{' '}
          {
            datoCmsBlog?.bodyNode?.childMarkdownRemark?.fields?.readingTime
              ?.text
          }
        </Text>
        <Text>Tags:</Text>
      </Stack>
      <Divider my="2rem" />
      <Box>
        <BlogDangerousHtml
          dangerouslySetInnerHTML={{
            __html: datoCmsBlog?.bodyNode?.childMarkdownRemark?.html
          }}
        />
      </Box>
    </Box>
  );
};

export const pageQuery = graphql`
  query blogQuery($originalPageId: String) {
    datoCmsBlog(originalId: { eq: $originalPageId }) {
      blurb
      publishedDate(formatString: "Do MMMM yyyy")
      title
      bodyNode {
        childMarkdownRemark {
          fields {
            readingTime {
              text
            }
          }
          html
        }
      }
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;

export default BlogPage;

export const Head = ({ data }) => {
  const { datoCmsBlog } = data;
  return <HelmetDatoCms seo={datoCmsBlog.seoMetaTags} />;
};
