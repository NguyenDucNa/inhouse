import { graphql } from '@packages/local-device-order/graphql/types';

export const LocalDeviceStateFragment = graphql(`
  fragment LocalDeviceStateItem on LocalDeviceOrder {
    id
    state
    menu {
      ...MenuItem
    }
    data {
      guests {
        id
        name
      }
    }
    createdAt
    updatedAt
    orderTasks {
      id
      state
      createdAt
      updatedAt
      data {
        guestID
      }
      products {
        id
        title
        quantity
        menuProductId
        configurations {
          id
          title
          type
          value
          price
          menuProductConfigurationValueId
        }
      }
    }
  }
`);
