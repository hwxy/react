import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Suspense, lazy } from "react";
let configRouters: any = [];
const routers = require.context("./", true, /\.(js|tsx)$/);
routers.keys().forEach(key => {
  if (key === "./index.tsx") return;
  configRouters = configRouters.concat(routers(key).default);
});
const Router = () => {
  const route = configRouters.map((v: any, i: any) => {
    const Comp = lazy(v.component);
    return (
      <Route
        key={i}
        exact
        path={v.path}
        component={(props: any) => <Comp {...props} />}
      />
    );
  });
  let regUrl = /.*\/spa/.exec(window.location.pathname) || [];
  let baseUrl = regUrl[0] || "/";
  return (
    <BrowserRouter basename={baseUrl}>
      <Switch>
        <Suspense fallback={<div></div>}>{route}</Suspense>
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
