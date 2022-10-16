import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import TechStack from './ui/TechStack';

const ServicesStack = () => {
  return (
    <StaticQuery
      query={graphql`
        query ServiceStack {
          datoCmsTechStack(slug: { eq: "services" }) {
            software {
              id
              title
              image {
                alt
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
      `}
      render={({ datoCmsTechStack }) => {
        return <TechStack software={datoCmsTechStack?.software} />;
      }}
    />
  );
};

export default ServicesStack;
