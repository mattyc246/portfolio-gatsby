import React from 'react';
import styled from '@emotion/styled';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { Card, Grid, Text } from '@mantine/core';

const StyledCard = styled(Card)`
  position: relative;
  background-color: ${({ theme }) => theme.colors.dark[5]};
`;
const HoverCard = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  background-color: ${({ theme }) => theme.colors.orange[4]};
  color: ${({ theme }) => theme.black};

  :hover {
    opacity: 1;
  }
`;

const TechStack = (props) => {
  const { software } = props;
  return (
    <Grid gutter="lg">
      {software?.map((sw) => {
        const image = getImage(sw?.image);
        return (
          <Grid.Col key={sw?.id} span={4} xs={3} md={2}>
            <StyledCard radius="xl" shadow="md">
              <GatsbyImage image={image} alt={sw?.image?.alt} />
              <HoverCard>
                <Text
                  sx={{
                    cursor: 'default',
                    fontFamily: 'Roboto Mono, Monaco, monospace'
                  }}
                >
                  {sw?.title}
                </Text>
              </HoverCard>
            </StyledCard>
          </Grid.Col>
        );
      })}
    </Grid>
  );
};

export default TechStack;
