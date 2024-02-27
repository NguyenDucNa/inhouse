import { useNavigate, useParams } from 'react-router-dom';
import Card from '@packages/ui/card/card.tsx';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import CardHeader from '@packages/ui/card/card-header.tsx';
import SecondaryButton from '@packages/ui/button/secondary-button.tsx';
import PrimaryButton from '@packages/ui/button/primary-button.tsx';
import AlertError from '@packages/ui/alert/alert-error.tsx';
import MenuProductTable from '@client/page/management/menu/menu-detail/component/menu-product-table.tsx';
import Loading from '@packages/ui/loading.tsx';
import MenuDetailDeleteButton from '@client/page/management/menu/menu-detail/component/menu-detail-delete-button.tsx';
import CardContent from '@packages/ui/card/card-content.tsx';
import CardSection from '@packages/ui/card/card-section.tsx';
import { useGetMenu } from './logic/use-get-menu';

function MenuDetail() {
  const menuId = useParams().menuId ?? '';
  const navigate = useNavigate();

  const { data, loading, refetch, error } = useGetMenu(menuId);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <AlertError title={error.name} message={error.message} />;
  }

  if (!data) {
    return <Card>No data</Card>;
  }

  return (
    <div className="flex-col space-y-4">
      <Card>
        <CardHeader title={data.menu.title} withBackButton={true}>
          <SecondaryButton
            onClick={() => {
              navigate(`sections/create`);
            }}
          >
            Add section
          </SecondaryButton>

          <PrimaryButton
            onClick={() => {
              navigate('products/create');
            }}
          >
            Add product
          </PrimaryButton>

          <SecondaryButton
            onClick={() => {
              refetch().catch((e) => void e);
            }}
          >
            <ArrowPathIcon className="w-4" />
          </SecondaryButton>
        </CardHeader>

        <CardContent ignoreContentSpacing={true}>
          <MenuProductTable
            products={data.menu.menuProducts}
            sections={data.menu.sections}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader title="Extra actions" />
        <CardContent>
          <div className="flex flex-col space-y-8">
            <CardSection
              title="Edit"
              descriptions="This action will be update a menu information."
            >
              <SecondaryButton
                onClick={() => {
                  navigate(`edit`);
                }}
              >
                Edit menu
              </SecondaryButton>
            </CardSection>

            <MenuDetailDeleteButton menuId={menuId} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default MenuDetail;
