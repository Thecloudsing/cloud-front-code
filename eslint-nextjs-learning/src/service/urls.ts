const apiPrefix =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_API_PREFIX
    : "";
export default {
  user: `${apiPrefix}/user`,
  test: `${apiPrefix}/test`,
  error: `${apiPrefix}/error`,
  redirect: `${apiPrefix}/redirect`,
};
