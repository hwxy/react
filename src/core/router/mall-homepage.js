import Async from "won-common/async-comp.tsx";
export default {
  path: "/",
  component: Async(() =>
    import(/* webpackChunkName: 'homePage' */ "@/views/mall-homepage/index.tsx")
  )
};
