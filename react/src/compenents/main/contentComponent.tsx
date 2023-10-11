import React from "react";
import BannerComponent from "../public/bannerComponent";
import StockItemListComponent from "../public/stockItemListComponent";
import SwperComponent from "./swiperComponent";

class ContentComponent extends React.Component {
  render(): React.ReactNode {
    const items = {
      data: [
        {
          id: 1,
          BAS_DD: 20231011,
          MKT_NM: "KOSPI",
          ISU_NM: "대유에이텍",
          ACC_TRDVOL: 110140915,
          MKTCAP: 34508579985,
          TDD_OPNPRC: 291,
        },
        {
          id: 2,
          BAS_DD: 20231011,
          MKT_NM: "KOSDAQ",
          ISU_NM: "솔트웨어",
          ACC_TRDVOL: 53214919,
          MKTCAP: 64139920416,
          TDD_OPNPRC: 1496,
        },
        {
          id: 3,
          BAS_DD: 20231011,
          MKT_NM: "KOSDAQ",
          ISU_NM: "모아데이타",
          ACC_TRDVOL: 32187886,
          MKTCAP: 116943650640,
          TDD_OPNPRC: 3415,
        },
        {
          id: 4,
          BAS_DD: 20231011,
          MKT_NM: "KOSDAQ",
          ISU_NM: "폴라리스우노",
          ACC_TRDVOL: 31661149,
          MKTCAP: 53843334090,
          TDD_OPNPRC: 698,
        },
      ],
      totalPage: 1,
      totalData: 4,
    };
    return (
      <div className="mt-3 pl-2 pr-2">
        <BannerComponent />
        <StockItemListComponent
          title={"관심종목"}
          isMore={true}
          moreLink={"/information"}
          item={items}
        />
        <SwperComponent title={"토론방 >"} />
        <StockItemListComponent
          title={"종목정보"}
          isMore={true}
          moreLink={"/"}
          item={items}
        />
      </div>
    );
  }
}

export default ContentComponent;
