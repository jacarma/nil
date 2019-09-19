export const nil = (value: any) => !value && value !== 0 && value !== false;

export const noNil = (value: any) =>  value === 0 || value === false || !!value;

export function coalesce<T>(...args: T[]) {
  for (let arg of args) {
    if (!nil(arg)) return arg;
  }
  return null;
};
