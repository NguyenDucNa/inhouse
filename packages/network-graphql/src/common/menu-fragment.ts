import { graphql } from '../graphql/types';

export const MenuFragment = graphql(`
  fragment MenuItem on Menu {
    id
    title
    menuProducts {
      ...MenuProductItem
    }
  }
`);
