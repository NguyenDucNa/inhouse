import { useQuery } from '@apollo/client';
import { graphql } from '@client/graphql/types';

const QUERY = graphql(`
    query Banners($offset: Int!, $limit: Int!, $filter: BannerStatusFilter){
        banners(offset: $offset, limit: $limit, filter: $filter){
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

export default function useBanners(
  offset: number,
  limit: number,
  enabled: boolean
) {
  return useQuery(QUERY, {
    variables: {
      offset: offset,
      limit: limit,
      filter: {
        enabled: enabled,
      },
    },
  });
}
