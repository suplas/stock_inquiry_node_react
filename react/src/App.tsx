import React from "react";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="table w-full h-full table-fixed bg-gray-100">
        <div className="table-row border-b-2 bg-white">
          <div className="h-24">
            <div className="text-cente fixed top-0 w-full">
              헤더 컴포넌트 들어갈 공간
            </div>
          </div>
        </div>
        <div className="p-2 w-full table-row">
          <div className="max-w-screen-md ml-auto mr-auto h-full">
            컨텐츠 컴포넌트 들어갈 공간
          </div>
          <div className="max-w-screen-md ml-auto mr-auto h-full">
            카피라이트 컴포넌트 들어갈 공간
          </div>
        </div>
        <div className="bg-white fixed w-full bottom-0 border-2 border-gray-200 rounded-t-3xl">
          푸터 컴포넌트 들어갈 공간
        </div>
      </div>
    </Provider>
  );
}

export default App;
