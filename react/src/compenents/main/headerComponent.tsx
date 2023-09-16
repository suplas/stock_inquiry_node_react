import React from "react";

class HeaderComponent extends React.Component {
  render(): React.ReactNode {
    return (
      <header>
        <div className="flex items-center pt-3 pb-3 pl-5 pr-5 whitespace-nowrap">
          <div>로고</div>
          <div className="ml-auto">MY</div>
        </div>
      </header>
    );
  }
}

export default HeaderComponent;
