import React from 'react';
import { Link } from 'gatsby';

import { Card, Title, Text } from '@mantine/core';

const BlogCard = (props) => {
  const { title, publishedDate, slug, blurb, readingTime } = props;

  return (
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
      <Link to={`/blog/${slug}`} style={{ textDecoration: 'none' }}>
        <Card shadow="lg">
          <Title order={3}>{title}</Title>
          <Text size="sm" my="sm">
            {publishedDate}{' '}
            <Text component="span" sx={{ padding: '0 0.25rem' }}>
              &bull;
            </Text>{' '}
            {readingTime}
          </Text>
          <Text size="sm">{blurb}</Text>
        </Card>
      </Link>
    </Card>
  );
};

export default BlogCard;
