import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Suspense, lazy } from "react";
let configRouters = [];
const routers = require.context("./", true, /\.js$/);
routers.keys().forEach(key => {
  if (key === "./index.js") return;
  configRouters = configRouters.concat(routers(key).default);
});
const Router = () => {
  const route = configRouters.map((v, i) => {
    const Comp = lazy(v.component);
    return (
      <Route
        key={i}
        exact
        path={v.path}
        component={props => <Comp {...props} />}
      />
    );
  });
  return (
    <BrowserRouter>
      <Switch>
        <Suspense fallback={<div></div>}>{route}</Suspense>
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
