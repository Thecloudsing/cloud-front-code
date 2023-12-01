const apiPrefix = "http://localhost:8080/weyun/api";
  // process.env.NODE_ENV === "development"
  //   ? process.env.NEXT_PUBLIC_API_PREFIX
  //   : "";
export default {
  school: `${apiPrefix}/school`,
  user: `${apiPrefix}/user`,
  test: `${apiPrefix}/test`,
  error: `${apiPrefix}/error`,
  redirect: `${apiPrefix}/redirect`,
};
