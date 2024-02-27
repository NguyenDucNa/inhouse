import { graphql } from '@client/graphql/types';
import { useMutation } from '@apollo/client';

const MUTATION = graphql(`
  mutation UpdateBanner(
    $bannerId: String!
    $input: UpdateBannerData!
    $timeRuleInput: UpdateBannerTimeRule!
    $contentInput: UpdateBannerContent!
  ) {
    updateBanner(
      bannerId: $bannerId
      input: $input
      timeRuleInput: $timeRuleInput
      contentInput: $contentInput
    ) {
      title
      viewCount
      clickCount
      enabled
      content {
        __typename
        ... on TopContent {
          text
        }
        ... on OverlayContent {
          image
        }
      }
      timeRule {
        __typename
        ... on RangeTimeRule {
          start
          end
        }
        ... on AlwaysTimeRule {
          type
        }
      }
    }
  }
`);

export default function useBannerUpdate() {
  return useMutation(MUTATION, {});
}
