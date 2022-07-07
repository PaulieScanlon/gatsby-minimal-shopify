import React from 'react';
import { graphql } from 'gatsby';

const Page = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>;

export const query = graphql`
  {
    allShopifyProduct {
      nodes {
        title
        description
      }
    }
  }
`;

export default Page;
