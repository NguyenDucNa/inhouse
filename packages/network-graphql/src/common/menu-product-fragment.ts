import { graphql } from '../graphql/types';

export const MenuProductFragment = graphql(`
  fragment MenuProductItem on MenuProduct {
    id
    title
    description
    images
    enabled
    ingredients
    section {
      ...MenuSectionItem
    }
    configurations {
      ...MenuProductConfigurationItem
    }

    menuId
    sectionId
  }
`);
