import { Provider } from "react-redux";
import store from "./store";
import RootComponent from "./compenents/main";

function App() {
  return (
    <Provider store={store}>
      <RootComponent />
    </Provider>
  );
}

export default App;
