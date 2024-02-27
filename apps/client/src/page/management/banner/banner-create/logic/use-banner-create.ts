import { graphql } from '@client/graphql/types';
import { useMutation } from '@apollo/client';

const MUTATION = graphql(`
  mutation CreateBanner(
    $input: CreateBannerData!
    $timeRuleInput: CreateBannerTimeRule!
    $contentInput: CreateBannerContent!
  ) {
    createBanner(
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
          type
          text
        }
        ... on OverlayContent {
          type
          image
        }
      }
      timeRule {
        __typename
        ... on RangeTimeRule {
          type
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

export default function useBannerCreate() {
  return useMutation(MUTATION, {});
}
