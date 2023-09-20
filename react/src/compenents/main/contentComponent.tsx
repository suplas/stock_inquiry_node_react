import React from "react";
import BannerComponent from "../public/bannerComponent";
import StockItemListComponent from "../public/stockItemListComponent";
import TalkComponent from "../public/talkComponent";
import RollingBannerComponent from "../public/rollingBannerComponent";

class ContentComponent extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="mt-3 pl-2 pr-2">
        <BannerComponent />
        <StockItemListComponent title={"관심종목"} />
        <RollingBannerComponent title={"토론방 >"}/>
        {/* <TalkComponent title={"토론방 >"} /> */}
        <StockItemListComponent title={"종목정보"} />
      </div>
    );
  }
}

export default ContentComponent;
