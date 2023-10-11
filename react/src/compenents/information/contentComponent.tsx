import React, { useEffect } from "react";
import BannerComponent from "../public/bannerComponent";
import StockItemListComponent from "../public/stockItemListComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchStockData, pageIncrement } from "../../slice/itemSlice";

type fetchStockType = {
  id: number; // 고유번호
  BAS_DD: number; // 기준날짜
  ISU_NM: string; // 종목명
  MKTCAP: number; // 시가총액
  MKT_NM: string; // 시장명
  TDD_OPNPRC: number; // 현재가
  ACC_TRDVOL: number; //거래량
};

const ContentComponent = () => {

  const item = useSelector((state: any) => state.stocks.item);
  const dispatch = useDispatch();
  const page: number = useSelector((state: any) => state.stocks.page);
  const limit:number = 30;

  useEffect(() => {
    dispatch(fetchStockData({ page, limit }) as any);
  }, [dispatch, page]);

  return (
    <div className="mt-3 pl-2 pr-2">
      <BannerComponent />
      <StockItemListComponent title={"관심종목"} isMore={false} moreLink={""} item={item}/>
    </div>
  );
};

export default ContentComponent;
