import Async from "won-common/async-comp.tsx";
export default {
  path: "/shopping",
  component: Async(() =>
    import(/* webpackChunkName: 'Shopping' */ "@/views/mall-shopping/index.tsx")
  )
};
