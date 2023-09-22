import React from "react";
import HeaderComponent from "../public/headerComponent";
import ContentComponent from "./contentComponent";
import FooterComponent from "../public/footerComponent";

class InformationComponent extends React.Component {
  render() {
    return (
      <div className="table w-full h-full table-fixed bg-gray-100">
        <div className="table-row bg-white">
          <div className="h-12">
            <div className="text-cente fixed top-0 left-0 right-0 w-full bg-white">
              <HeaderComponent />
            </div>
          </div>
        </div>
        <div className="p-2 w-full table-row">
          <div className="max-w-screen-md ml-auto mr-auto h-full">
            <ContentComponent />
          </div>
        </div>
        <div className="h-14"></div>
        <div className="bg-white fixed w-full bottom-0 border-t-[1px] border-gray-200">
          <div className="h-16">
            <FooterComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default InformationComponent;
