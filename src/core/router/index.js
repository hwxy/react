import { HashRouter, Route, Switch } from "react-router-dom";
let configRouters = [];
const routers = require.context("./", true, /\.js$/);
routers.keys().forEach(key => {
  if (key === "./index.js") return;
  configRouters = configRouters.concat(routers(key).default);
});
const Router = () => {
  const route = configRouters.map((v, i) => {
    return <Route key={i} exact path={v.path} component={v.component} />;
  });
  return (
    <HashRouter>
      <Switch>{route}</Switch>
    </HashRouter>
  );
};
export default Router;
