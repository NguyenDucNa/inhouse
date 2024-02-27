type ObjectSortByKey = <T>(
  extract: (item: T) => string
) => (a: T, b: T) => number;

export const objectSortByString: ObjectSortByKey = (extract) => (a, b) => {
  const aStr = extract(a);
  const bStr = extract(b);

  return aStr.length - bStr.length || aStr.localeCompare(bStr);
};
