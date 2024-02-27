import Card from '@packages/ui/card/card.tsx';
import CardHeader from '@packages/ui/card/card-header.tsx';
import { useProductConfigurations } from '@client/page/management/menu/menu-product-configuration-list/logic/use-product-configuration.ts';
import { useNavigate, useParams } from 'react-router-dom';
import Table from '@packages/ui/table/table.tsx';
import TableHeaderColumn from '@packages/ui/table/table-header-column.tsx';
import { MenuProductConfigurationItemFragment } from '@client/graphql/types/graphql.ts';
import { TableSection } from '@packages/ui/table/table-section.tsx';
import TableRowColumn from '@packages/ui/table/table-row-cell.tsx';
import { useCompanyCurrency } from '@packages/core/company/company-context.ts';
import SecondaryButton from '@packages/ui/button/secondary-button.tsx';
import CardContent from '@packages/ui/card/card-content.tsx';
import PrimaryButton from '@packages/ui/button/primary-button.tsx';
import { formatProductConfigurationType } from '@client/page/management/menu/menu-product-configuration-edit/logic/format-product-configuration-type.ts';
import TableRow from '@packages/ui/table/table-row.tsx';
import { TableCellAlignment } from '@packages/ui/table/table-type.ts';
import { formatCurrency } from '@packages/core/utils/currency-formatter.ts';
import { getFragmentData } from '@client/graphql/types';
import { MenuProductConfigurationValueFragment } from '@packages/network-graphql/common/menu-product-configuration-value-fragment.ts';

export default function MenuProductConfigurationList() {
  const menuId = useParams().productId ?? '';
  const navigate = useNavigate();

  const { data, loading, error } = useProductConfigurations(menuId);

  return (
    <Card>
      <CardHeader title="Price matrix configuration" withBackButton={true}>
        <SecondaryButton
          onClick={() => {
            navigate('create');
          }}
        >
          Add configuration
        </SecondaryButton>
      </CardHeader>

      <CardContent ignoreContentSpacing={true}>
        <Table
          data={data?.menuProductConfigurations ?? []}
          build={(item) => (
            <ConfigurationBuilder key={item.id} configuration={item} />
          )}
          loading={loading}
          error={error?.message}
        >
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn alignment={TableCellAlignment.Right}>
            Price
          </TableHeaderColumn>
          <TableHeaderColumn alignment={TableCellAlignment.Right}>
            Actions
          </TableHeaderColumn>
        </Table>
      </CardContent>
    </Card>
  );
}

function ConfigurationBuilder(props: {
  configuration: MenuProductConfigurationItemFragment;
}) {
  const navigate = useNavigate();
  const currency = useCompanyCurrency();
  const { configuration } = props;

  return (
    <>
      <TableSection colSpan={4}>
        <div className="flex items-center space-x-1">
          <p>
            {configuration.title.length > 0 ? configuration.title : 'No name'}
          </p>
          <p>({formatProductConfigurationType(configuration.type)})</p>
          <div className="flex-grow" />
          <div className="flex space-x-2">
            <SecondaryButton
              onClick={() => {
                navigate(`${configuration.id}/value/create`);
              }}
            >
              Add price
            </SecondaryButton>
            <SecondaryButton
              onClick={() => {
                navigate(`${configuration.id}/edit`);
              }}
            >
              Edit
            </SecondaryButton>
          </div>
        </div>
      </TableSection>

      {configuration.values
        .map((e) => getFragmentData(MenuProductConfigurationValueFragment, e))
        .map((value) => {
          return (
            <TableRow key={value.id}>
              <TableRowColumn>
                {value.name.length > 0 ? value.name : 'No name'}
              </TableRowColumn>
              <TableRowColumn alignment={TableCellAlignment.Right}>
                {formatCurrency(value.price, currency)}
              </TableRowColumn>
              <TableRowColumn alignment={TableCellAlignment.Right}>
                <div className="space-x-4">
                  <PrimaryButton
                    onClick={() => {
                      navigate(`${configuration.id}/value/${value.id}`);
                    }}
                  >
                    Edit
                  </PrimaryButton>
                </div>
              </TableRowColumn>
            </TableRow>
          );
        })}
    </>
  );
}
