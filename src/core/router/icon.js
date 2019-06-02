import Async from "won-common/async-comp.tsx";
export default {
  path: "/icon",
  component: Async(() =>
    import(/* webpackChunkName: 'Icon' */ "@/views/icon/index.tsx")
  )
};
