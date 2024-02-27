import {
  CreateProductConfigurationType,
  ProductConfigurationType,
} from '@client/graphql/types/graphql.ts';

export function formatProductConfigurationType(
  type: ProductConfigurationType | CreateProductConfigurationType
): string {
  switch (type) {
    case ProductConfigurationType.Base:
      return 'Base';
    case ProductConfigurationType.Selection:
      return 'Selection';
    case ProductConfigurationType.Option:
      return 'Option';
    default:
      return 'Unknown';
  }
}
