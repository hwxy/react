import Router from "./router";
import "@/asset/sass/index.scss";
// redux
import { Provider } from "react-redux";
// store
import Store from "./redux/index.tsx";
const App = () => {
  return (
    <Provider store={Store}>
      <Router />
    </Provider>
  );
};
export default App;
