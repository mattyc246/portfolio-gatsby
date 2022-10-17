import React from 'react';
import { Link } from 'gatsby';

import { Card, Title, Text } from '@mantine/core';

const BlogCard = (props) => {
  const { title, publishedDate, slug, blurb, readingTime } = props;

  return (
    <Card shadow="lg">
      <Link to={`/blog/${slug}`} style={{ textDecoration: 'none' }}>
        <Title order={2} color="orange.3" sx={{ fontSize: '2rem' }}>
          {title}
        </Title>
      </Link>
      <Text
        size="sm"
        my="sm"
        sx={{ fontFamily: 'Roboto Mono, Monaco, monospace' }}
      >
        {publishedDate}{' '}
        <Text component="span" sx={{ padding: '0 0.25rem' }}>
          &bull;
        </Text>{' '}
        {readingTime}
      </Text>
      <Text size="lg">{blurb}</Text>
    </Card>
  );
};

export default BlogCard;
