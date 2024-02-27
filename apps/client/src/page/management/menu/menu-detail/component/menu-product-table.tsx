import { Link } from 'react-router-dom';
import { useCompanyCurrency } from '@packages/core/company/company-context.ts';
import { formatCurrency } from '@packages/core/utils/currency-formatter.ts';
import Table from '@packages/ui/table/table.tsx';
import TableRowColumn from '@packages/ui/table/table-row-cell.tsx';
import { FragmentType, getFragmentData } from '@client/graphql/types';
import {
  groupMenuProductItemsBySection,
  ProductMenuBySection,
} from '@client/page/management/menu/menu-detail/logic/group-menu-product-item-by-section.ts';
import { TableSection } from '@packages/ui/table/table-section.tsx';
import TableHeaderColumn from '@packages/ui/table/table-header-column.tsx';
import classNames from 'classnames';
import TableRow from '@packages/ui/table/table-row.tsx';
import { TableCellAlignment } from '@packages/ui/table/table-type.ts';
import { MenuProductFragment } from '@packages/network-graphql/common/menu-product-fragment.ts';
import { MenuSectionFragment } from '@packages/network-graphql/common/menu-section-fragment.ts';
import { MenuProductConfigurationFragment } from '@packages/network-graphql/common/menu-product-configuration-fragment.ts';
import { MenuProductConfigurationValueFragment } from '@packages/network-graphql/common/menu-product-configuration-value-fragment.ts';

export default function MenuProductTable(props: {
  products: FragmentType<typeof MenuProductFragment>[];
  sections: FragmentType<typeof MenuSectionFragment>[];
}) {
  const data = getFragmentData(MenuProductFragment, props.products);
  const sections = getFragmentData(MenuSectionFragment, props.sections);
  const productMenuBySections = groupMenuProductItemsBySection(data, sections);

  return (
    <Table
      data={productMenuBySections}
      build={(group) => (
        <Group key={group.section?.id ?? 'no-section'} group={group} />
      )}
    >
      <TableHeaderColumn className="w-6" />
      <TableHeaderColumn>Product</TableHeaderColumn>
      <TableHeaderColumn alignment={TableCellAlignment.Right}>
        Price
      </TableHeaderColumn>
    </Table>
  );
}

const productEnabled: Record<string, string> = {
  false: 'text-gray-400 bg-gray-400/10 ring-gray-400/20',
  true: 'text-green-400 bg-indigo-400/10 ring-indigo-400/30',
};

function Group(props: { group: ProductMenuBySection }) {
  const { group } = props;
  const currency = useCompanyCurrency();

  return (
    <>
      <TableSection key={group.section?.id} colSpan={4}>
        <p className="flex justify-center">
          {group.section !== null ? (
            <Link to={`sections/${group.section?.id}/edit`}>
              {(group.section?.name.length ?? 0) > 0
                ? group.section?.name
                : 'No name'}
            </Link>
          ) : (
            'Unassigned'
          )}
        </p>
      </TableSection>

      {group.items.map((prop) => (
        <TableRow key={prop.id}>
          <TableRowColumn>
            <div
              className={classNames(
                productEnabled[prop.enabled.toString()],
                'flex-none rounded-full p-1'
              )}
            >
              <div className="h-2 w-2 rounded-full bg-current" />
            </div>
          </TableRowColumn>

          <TableRowColumn>
            <Link to={`products/${prop.id}/edit`}>
              <p className="font-semibold">{prop.title}</p>
            </Link>
          </TableRowColumn>

          <TableRowColumn alignment={TableCellAlignment.Right}>
            <Link to={`products/${prop.id}/configurations`}>
              <div className="flex space-x-2 justify-end items-end">
                {prop.configurations.some(
                  (config) =>
                    getFragmentData(MenuProductConfigurationFragment, config)
                      .values.length > 1
                ) && <p className="text-gray-400">Start at</p>}
                <p className="text-gray-500">
                  {formatCurrency(
                    getFragmentData(
                      MenuProductConfigurationFragment,
                      prop.configurations
                    )
                      .find((config) => config.type.includes('BASE'))
                      ?.values.map((configValue) =>
                        getFragmentData(
                          MenuProductConfigurationValueFragment,
                          configValue
                        )
                      )
                      .at(0)?.price ?? 0,
                    currency
                  )}
                </p>
              </div>
            </Link>
          </TableRowColumn>
        </TableRow>
      ))}
    </>
  );
}
