import Async from "won-common/async-comp.tsx";
export default {
  path: "/swiperdemo",
  component: Async(() =>
    import(/* webpackChunkName: 'SwiperDemo' */ "@/views/swiper-demo/index.tsx")
  )
};
