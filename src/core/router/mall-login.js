import Async from "won-common/async-comp.tsx";
export default {
  path: "/login",
  component: Async(() =>
    import(/* webpackChunkName: 'Login' */ "@/views/mall-login/index.tsx")
  )
};
