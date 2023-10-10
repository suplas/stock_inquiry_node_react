import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { fetchStockData } from "../../slice/itemSlice";

type fetchStockType = {
  id: number; // 고유번호
  BAS_DD: number; // 기준날짜
  ISU_NM: string; // 종목명
  MKTCAP: number; // 시가총액
  MKT_NM: string; // 시장명
  TDD_OPNPRC: number; // 현재가
  ACC_TRDVOL: number; //거래량
};

interface Props {
  title: string;
  isMore: boolean;
}

const StockItemListComponent: React.FC<Props> = ({ title, isMore }) => {
  const data = useSelector((state: any) => state.stocks.item);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStockData(1) as any);
  }, [dispatch]);

  const moreBtn = (isMore: boolean) => {
    if (isMore === true) {
      return (
        <li className="flex gap-1 p-2 items-center border-gray-100">
          <div className="w-full text-center p-2">
            <Link to={"/"}>
              더보기 <FontAwesomeIcon icon={faChevronRight} />
            </Link>
          </div>
        </li>
      );
    }
  };
  return (
    <div className="bg-white w-full">
      <div className="h-full mt-2 p-2 w-full border-gray-100">
        <div className="flex w-full p-2">
          <h2>{title}</h2>
        </div>
        <div className="w-full pl-2 pr-2 pb-1 flex gap-1 flex-myFlex">
          <span className="text-sm w-2/5">종목명</span>
          <span className="text-sm w-1/5 text-center">거래량</span>
          <span className="text-sm w-2/5 text-right">시가총액 ・ 현재가 </span>
        </div>
        <div className="line border-b-2 ml-2 mr-2 border-gray-100"></div>
        <ul className="pl-2 pr-2">
          {data.length > 0 ? (
            data.map((item: fetchStockType) => {
              return (
                <li className="flex gap-1 p-2 items-center border-b-2 border-gray-100" key={item.id}>
                  <div className="w-2/5 font-bold text-base">{item.ISU_NM}</div>
                  <div className="w-1/5 font-bold">
                    <div className="w-20 ml-auto mr-auto text-sm bg-blue-600 text-white text-center rounded-md max-w-xs p-2">
                      {item.ACC_TRDVOL}
                    </div>
                  </div>
                  <div className="w-2/5 text-right">
                    <div className="font-bold text-base">{item.MKTCAP}</div>
                    <div className="text-sm font-bold">{item.TDD_OPNPRC}</div>
                  </div>
                </li>
              );
            })
          ) : (
            <li className="flex gap-1 p-2 items-center border-b-2 border-gray-100">
              <div>No Datas</div>
            </li>
          )}
          {moreBtn(isMore)}
        </ul>
      </div>
    </div>
  );
};

export default StockItemListComponent;
