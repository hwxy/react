import Router from "./router";
// redux
import { Provider } from "react-redux";
// store
import Store from "./redux/index.tsx";

import "@/asset/sass/index.scss";
import "@/asset/sass/tool/index.scss";

const App = () => {
  return (
    <Provider store={Store}>
      <Router />
    </Provider>
  );
};
export default App;
