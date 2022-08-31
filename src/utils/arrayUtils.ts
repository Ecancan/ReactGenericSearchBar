export const flatten = (obj: any) => {
  const root = {};

  (function tree(obj, index) {
    const suffix = toString.call(obj) === '[object Array]' ? ']' : '';

    for (const key in obj) {
      if (!obj.hasOwnProperty(key)) {
        continue;
      }
      root[index + key + suffix] = obj[key];
      if (toString.call(obj[key]) === '[object Array]') {
        tree(obj[key], index + key + suffix + '[');
      }
      if (toString.call(obj[key]) === '[object Object]') {
        tree(obj[key], index + key + suffix + '.');
      }
    }
  })(obj, '');

  return root;
};

export const slugConverter = ({ value }: { value: string | undefined }) =>
  value &&
  value
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
