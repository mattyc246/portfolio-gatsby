import React from 'react';
import { Link } from 'gatsby';

import { Box, Card, Divider, Group, Stack, Text, Title } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';

import MovingGradientButton from '../ui/MovingGradientButton';
import SectionTitle from '../ui/SectionTitle';

const LatestPostsSection = ({ posts }) => {
  const matches = useMediaQuery('(min-width: 638px)');

  return (
    <Box px="xl" py="3rem">
      <Group mb="3rem" position="apart">
        <SectionTitle
          order={4}
          variant="gradient"
          gradient={{ from: 'orange', to: 'grape', deg: 90 }}
        >
          Recent Posts
        </SectionTitle>
        <MovingGradientButton component={Link} to="/blog" size="md" compact>
          See all
        </MovingGradientButton>
      </Group>
      <Carousel
        slideSize={matches ? '50%' : '75%'}
        height={325}
        slideGap="lg"
        align="start"
        withControls={false}
      >
        {posts?.map(({ node: post }) => {
          return (
            <Carousel.Slide key={post?.originalId}>
              <Card
                h="100%"
                p="2px"
                sx={(theme) => ({
                  background: theme.fn.gradient({
                    from: 'orange',
                    to: 'grape',
                    deg: 90
                  })
                })}
              >
                <Card h="100%">
                  <Stack h="100%" justify="space-between">
                    <Box>
                      <Title order={3}>{post?.title}</Title>
                      <Divider my="sm" />
                      <Group>
                        <Text size="sm">
                          {
                            post?.bodyNode?.childMarkdownRemark?.fields
                              ?.readingTime?.text
                          }
                        </Text>
                        <Text component="span">&bull;</Text>
                        <Text size="sm">{post?.publishedDate}</Text>
                      </Group>
                      <Text mt="md">{post?.blurb}</Text>
                    </Box>
                    <Box>
                      <MovingGradientButton
                        component={Link}
                        to={`/blog/${post?.slug}`}
                        size="md"
                        mt="md"
                        compact
                      >
                        Read Post
                      </MovingGradientButton>
                    </Box>
                  </Stack>
                </Card>
              </Card>
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </Box>
  );
};

export default LatestPostsSection;
