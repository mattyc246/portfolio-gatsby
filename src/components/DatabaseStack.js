import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import TechStack from './ui/TechStack';

const DatabaseStack = () => {
  return (
    <StaticQuery
      query={graphql`
        query DatabaseStack {
          datoCmsTechStack(slug: { eq: "database" }) {
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

export default DatabaseStack;
