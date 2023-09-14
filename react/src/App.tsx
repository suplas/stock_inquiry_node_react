import React from 'react';
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      컴포넌트 들어갈 자리
    </div>
  </Provider>
  );
}

export default App;
