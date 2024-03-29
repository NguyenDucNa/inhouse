import classNames from 'classnames';

const projects = [
  {
    title: 'Self-order',
    initials: 'SO',
    href: '#',
    bgColor: 'bg-pink-600',
  },
  {
    title: 'Local device',
    initials: 'LD',
    href: 'pos/local-device',
    bgColor: 'bg-purple-600',
  },
  {
    title: 'Waiter',
    initials: 'W',
    href: '#',
    bgColor: 'bg-yellow-500',
  },
];

export default function DashboardQuickAction() {
  return (
    <div>
      <h2 className="text-sm font-medium text-gray-500">Quick action</h2>
      <ul
        role="list"
        className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <li
            key={project.title}
            className="col-span-1 flex rounded-md shadow-sm h-14"
          >
            <div
              className={classNames(
                project.bgColor,
                'flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white'
              )}
            >
              {project.initials}
            </div>
            <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
              <div className="flex-1 truncate px-4 py-2 text-sm">
                <a
                  href={project.href}
                  className="font-medium text-gray-900 hover:text-gray-600"
                >
                  {project.title}
                </a>
                {/*<p className="text-gray-500">{project.members} Members</p>*/}
              </div>
              {/*<div className="flex-shrink-0 pr-2">*/}
              {/*  <button*/}
              {/*    type="button"*/}
              {/*    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"*/}
              {/*  >*/}
              {/*    <span className="sr-only">Open options</span>*/}
              {/*    <EllipsisVerticalIcon*/}
              {/*      className="h-5 w-5"*/}
              {/*      aria-hidden="true"*/}
              {/*    />*/}
              {/*  </button>*/}
              {/*</div>*/}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
