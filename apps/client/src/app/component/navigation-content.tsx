import { Link, useMatches } from 'react-router-dom';
import classNames from 'classnames';
import {
  ChartPieIcon,
  Cog6ToothIcon,
  HomeIcon,
  Square3Stack3DIcon,
  UsersIcon,
  BuildingStorefrontIcon,
  RectangleStackIcon,
  PencilIcon,
  NewspaperIcon,
  FilmIcon
} from '@heroicons/react/24/outline';

const navigation = [
  { title: 'Dashboard', href: '/', icon: HomeIcon },
  { title: 'Users', href: '/users', icon: UsersIcon },
  { title: 'Reports', href: '/reports', icon: ChartPieIcon },
  { title: 'Menu', href: '/menu', icon: Square3Stack3DIcon },
  { title: 'Table', href: '/table-groups', icon: RectangleStackIcon },
  { title: 'Branches', href: '/branches', icon: BuildingStorefrontIcon },
  { title: 'Order', href: '/orders', icon: PencilIcon },
  { title: 'Invoice', href: '/invoices', icon: NewspaperIcon },
  { title: 'Banner', href: '/banners', icon: FilmIcon },
];

function NavigationContent(props: { closeSidebar?: () => void }) {
  const matches = useMatches();

  const currentLocation = (path: string): boolean => {
    for (const match of matches.slice(3, 4)) {
      if (match.pathname === path) {
        return true;
      }
    }
    return false;
  };

  return (
    <ul role="list" className="flex flex-1 flex-col gap-y-7">
      <li>
        <ul role="list" className="-mx-2 space-y-1">
          {navigation.map((item) => (
            <li key={item.title}>
              <Link
                to={item.href}
                onClick={() => {
                  props.closeSidebar && props.closeSidebar();
                }}
                className={classNames(
                  currentLocation(item.href)
                    ? 'bg-gray-50 text-indigo-600'
                    : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                  'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                )}
              >
                <item.icon
                  className={classNames(
                    currentLocation(item.href)
                      ? 'text-indigo-600'
                      : 'text-gray-400 group-hover:text-indigo-600',
                    'h-6 w-6 shrink-0'
                  )}
                  aria-hidden="true"
                />
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </li>
      {/*
      <li>
        <div className="text-xs font-semibold leading-6 text-gray-400">
          Your branches
        </div>
        <ul role="list" className="-mx-2 mt-2 space-y-1">
          {branches.map((team) => (
            <li key={team.title}>
              <a
                href={team.href}
                className={classNames(
                  team.current
                    ? "bg-gray-50 text-indigo-600"
                    : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                  "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                )}
              >
                <span
                  className={classNames(
                    team.current
                      ? "text-indigo-600 border-indigo-600"
                      : "text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600",
                    "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white"
                  )}
                >
                  {team.initial}
                </span>
                <span className="truncate">{team.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </li>
      */}
      <li className="mt-auto">
        <Link
          to="/settings"
          className={classNames(
            'group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
            {
              'bg-gray-50 text-indigo-600': currentLocation('/settings'),
            }
          )}
        >
          <Cog6ToothIcon
            className={classNames(
              'h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600',
              {
                'text-indigo-600': currentLocation('/settings'),
              }
            )}
            aria-hidden="true"
          />
          Settings
        </Link>
      </li>
    </ul>
  );
}

export default NavigationContent;
