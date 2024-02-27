import { MenuSection } from '@packages/local-device-order/page/servicing/model/menu-section.ts';

export const MenuSections = (props: { sections: readonly MenuSection[] }) => {
  return (
    <div className="flex flex-wrap space-y-1 items-start">
      {props.sections.map((section) => (
        <div key={section.id}>
          <Section section={section} />
        </div>
      ))}
    </div>
  );
};

const Section = (props: { section: MenuSection }) => {
  const { section } = props;

  const hrefWithoutSpace = '#' + section.id.replace(/\s+/g, '');
  const value = section.name.length > 0 ? section.name : 'Top';

  return (
    <li className="inline-block py-1.5 xl:py-2 2xl:py-3 px-4 xl:px-6 2xl:px-8 text-center w-60 bg-white hover:bg-orange-700 font-semibold text-black hover:text-white rounded-lg mr-4">
      <a
        href={hrefWithoutSpace}
        className="inline-block w-full h-full text-center"
      >
        {value}
      </a>
    </li>
  );
};
