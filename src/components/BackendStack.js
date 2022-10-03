import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import TechStack from './ui/TechStack';

const BackendStack = () => {
  return (
    <StaticQuery
      query={graphql`
        query BackendStack {
          datoCmsTechStack(slug: { eq: "backend" }) {
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

export default BackendStack;
