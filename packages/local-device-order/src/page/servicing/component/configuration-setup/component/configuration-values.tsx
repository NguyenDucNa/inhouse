import {
  MenuProductConfigurationItemFragment,
  ProductConfigurationType,
} from '@packages/local-device-order/graphql/types/graphql.ts';
import ConfigurationBaseValues from '@packages/local-device-order/page/servicing/component/configuration-setup/component/configuration-base-values.tsx';
import ConfigurationOptionsValues from '@packages/local-device-order/page/servicing/component/configuration-setup/component/configration-option.values.tsx';
import ConfigurationSelectionValues from '@packages/local-device-order/page/servicing/component/configuration-setup/component/configuration-selection-values.tsx';

const ConfigurationValues = (props: {
  productConfiguration: MenuProductConfigurationItemFragment;
}) => {
  switch (props.productConfiguration.type) {
    case ProductConfigurationType.Base: {
      return (
        <ConfigurationBaseValues
          productConfiguration={props.productConfiguration}
        />
      );
    }
    case ProductConfigurationType.Option: {
      return (
        <ConfigurationOptionsValues
          productConfiguration={props.productConfiguration}
        />
      );
    }
    case ProductConfigurationType.Selection: {
      return (
        <ConfigurationSelectionValues
          productConfiguration={props.productConfiguration}
        />
      );
    }
  }
};

export default ConfigurationValues;
