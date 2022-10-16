import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import TechStack from './ui/TechStack';

const FrontendStack = () => {
  return (
    <StaticQuery
      query={graphql`
        query FrontendStack {
          datoCmsTechStack(slug: { eq: "frontend" }) {
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

export default FrontendStack;
