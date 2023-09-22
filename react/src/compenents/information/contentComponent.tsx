import React from "react";
import BannerComponent from "../public/bannerComponent";
import StockItemListComponent from "../public/stockItemListComponent";

class ContentComponent extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="mt-3 pl-2 pr-2">
        <BannerComponent />
        <StockItemListComponent title={"관심종목"} isMore={false} />
      </div>
    );
  }
}

export default ContentComponent;
