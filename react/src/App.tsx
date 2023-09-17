import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./store";
import RootComponent from "./compenents/main";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RootComponent />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
