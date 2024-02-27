import { useQuery } from '@apollo/client';
import { graphql } from '@client/graphql/types';

const QUERY = graphql(`
    query Banner($id: ID!){
        banner(id: $id){
          bannerId
          title
          viewCount
          clickCount
          enabled
          content{
            __typename
            ...on TopContent{
              type
              text
            }
            ...on OverlayContent{
              type
              image
            }
          }
          timeRule{
           __typename
            ...on RangeTimeRule{
              type
              start
              end
            }
            ...on AlwaysTimeRule{
              type
            }
          }
        }
    }
`);

export default function useBanner(
  id: string
) {
  return useQuery(QUERY, {
    variables: {
      id: id
    },
  });
}
