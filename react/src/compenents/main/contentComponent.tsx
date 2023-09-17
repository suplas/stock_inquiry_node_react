import React from "react";
import BannerComponent from "./bannerComponent";
import InterestComponent from "./interestComponent";
import TalkComponent from "./talkComponent";
import InformationComponent from "./informationComponent";

class ContentComponent extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="mt-3 pl-2 pr-2">
        <BannerComponent />
        <InterestComponent />
        <TalkComponent />
        <InformationComponent />
      </div>
    );
  }
}

export default ContentComponent;
