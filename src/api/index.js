// eslint-disable-next-line import/prefer-default-export
export const fetcher = (...args) => fetch(...args).then(res => res.json());
