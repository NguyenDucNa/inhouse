import MenuSelectionInput from '@packages/ui/form/input/menu-selection-input.tsx';
import { useMenuSections } from '@client/page/management/menu/menu-section/menu-section-selection-input/use-menu-sections.ts';
import { getFragmentData } from '@client/graphql/types';
import AlertError from '@packages/ui/alert/alert-error.tsx';
import { MenuSectionFragment } from '@packages/network-graphql/common/menu-section-fragment.ts';

export default function MenuSectionSelection(props: {
  menuId: string;
  value: string | null;
  onChange: (sectionId: string) => void;
}) {
  const { data, loading, error } = useMenuSections(props.menuId);
  const sections = getFragmentData(
    MenuSectionFragment,
    data?.menuSections ?? []
  );

  if (loading) {
    return <div />;
  }

  return (
    <div>
      <MenuSelectionInput
        title={'Menu section'}
        data={sections}
        value={sections.find((s) => s.id === props.value) ?? null}
        onChange={(section) => {
          props.onChange(section.id);
        }}
        build={(item) => {
          return { id: item.id, name: item.name };
        }}
      />
      {error && <AlertError title={error.name} message={error.message} />}
    </div>
  );
}
