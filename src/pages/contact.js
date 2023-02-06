import React from 'react';
import { graphql } from 'gatsby';

import { Box, Divider, Stack, Text, Title } from '@mantine/core';

import ContactForm from '../components/contact/ContactForm';
import SocialsList from '../components/contact/SocialsList';
import SectionTitle from '../components/ui/SectionTitle';

import { HelmetDatoCms } from 'gatsby-source-datocms';

const Contact = () => {
  return (
    <Box px="xl" py="2rem">
      <Stack my="4rem" spacing="xs">
        <Title
          order={1}
          variant="gradient"
          gradient={{ from: 'orange', to: 'grape', deg: 45 }}
          sx={{
            fontSize: '4rem'
          }}
        >
          Contact.
        </Title>
        <Text size="md" px="4px">
          Find your ideal way to get in touch with me, or, just simply leave me
          a message and I'll get back to you.
        </Text>
      </Stack>
      <Divider size="xs" />
      <Box my="2rem" mt="4rem">
        <SocialsList />
      </Box>
      <Divider size="xs" label="or" labelPosition="center" />
      <Box my="2rem">
        <Box mb="2rem">
          <SectionTitle
            order={5}
            variant="gradient"
            gradient={{ from: 'orange', to: 'grape', deg: 90 }}
          >
            Drop me a message
          </SectionTitle>
          <Text size="sm" mt="1rem">
            I will aim to respond all messages within 48 hours, but do allow up
            to 72 hours before following up.
          </Text>
        </Box>
        <ContactForm />
      </Box>
    </Box>
  );
};

export default Contact;

export const pageQuery = graphql`
  query ContactQuery {
    datoCmsContact {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;

export const Head = ({ data }) => {
  const { datoCmsContact } = data;
  return <HelmetDatoCms seo={datoCmsContact.seoMetaTags} />;
};
