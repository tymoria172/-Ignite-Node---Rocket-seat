export function buildRoutePath(path) {
  ///users/:id
  const routeParametersRegex = /:([a-zA-Z]+)/g;
  const paramsWithParams = path.replaceAll(routeParametersRegex, '(?<$1>[a-z0-9\-_]+)')

  const pathRegex = new RegExp(`^${paramsWithParams}(?<query>\\?(.*))?$`)

  pathRegex.test

  //   const pathRegex = new RegExp(`^${pathWithParams}`);
  return pathRegex
}
