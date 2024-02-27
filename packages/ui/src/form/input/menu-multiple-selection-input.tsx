import { CheckCircleIcon } from '@heroicons/react/16/solid';

export default function MenuMultipleSelectionInput<T>(props: {
  title: string;
  data: readonly T[];
  values: T[];
  onChange: (newValue: T[]) => void;
  build: (item: T) => { id: string; name: string };
  className?: string;
}) {
  const { title, data, values, onChange, build } = props;

  return (
    <div className="flex flex-col space-y-2">
      <p>{title}</p>
      <div className="grid grid-cols-3 gap-4">
        {data.map((item) => {
          const { id, name } = build(item);
          return (
            <div
              className="border-gray-200 border-2 rounded p-2"
              key={id}
              onClick={() => {
                if (values.includes(item)) {
                  onChange(values.filter((value) => value !== item));
                } else {
                  onChange([...values, item]);
                }
              }}
            >
              <div className="flex items-center justify-center space-x-2">
                {values.includes(item) ? (
                  <CheckCircleIcon className="w-5 h-5" />
                ) : null}
                <p className="text-sm">{name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
