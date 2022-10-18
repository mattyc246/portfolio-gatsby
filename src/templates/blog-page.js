import React from 'react';
import { Link, graphql } from 'gatsby';

import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Text,
  Title
} from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons';

import Section from '../components/ui/Section';
import BlogDangerousHtml from '../components/ui/BlogDangerousHtml';

const BlogPage = ({ data }) => {
  const { datoCmsBlog } = data;

  return (
    <Container size={800}>
      <Section
        minHeight="30vh"
        content={
          <Box>
            <Button
              component={Link}
              to="/blog"
              variant="subtle"
              color="orange"
              leftIcon={<IconArrowLeft />}
              compact
            >
              Back
            </Button>
            <Stack mb="2rem" spacing="xs">
              <Title order={1} color="orange.5" sx={{ fontSize: '2.5rem' }}>
                {datoCmsBlog?.title}
              </Title>
              <Text>{datoCmsBlog?.blurb}</Text>
              <Text
                size="sm"
                my="sm"
                sx={{ fontFamily: 'Roboto Mono, Monaco, monospace' }}
              >
                {datoCmsBlog?.publishedDate}{' '}
                <Text component="span" sx={{ padding: '0 0.25rem' }}>
                  &bull;
                </Text>{' '}
                {
                  datoCmsBlog?.bodyNode?.childMarkdownRemark?.fields
                    ?.readingTime?.text
                }
              </Text>
              <Text>Tags:</Text>
            </Stack>
            <Divider />
            <Box mt="2rem" mb="4rem">
              <BlogDangerousHtml
                dangerouslySetInnerHTML={{
                  __html: datoCmsBlog?.bodyNode?.childMarkdownRemark?.html
                }}
              />
            </Box>
          </Box>
        }
      />
    </Container>
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
    }
  }
`;

export default BlogPage;
