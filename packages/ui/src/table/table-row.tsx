import classNames from 'classnames';

export default function TableRow(props: {
  className?: string;
  compact?: boolean;
  selected?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <tr
      className={classNames(
        props.compact ? 'h-8' : 'h-14',
        props.className,
        props.selected ? 'bg-indigo-50' : undefined
      )}
    >
      {props.children}
    </tr>
  );
}
