import React from "react";
import { Link } from "react-router-dom";
import {
  faChevronRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { pageIncrement } from "../../slice/itemSlice";
import { Comma, BasdConversion, DigitConversion } from "../../assets/util";

interface stockDataProps {
  id: number;
  BAS_DD: number;
  ISU_NM: string;
  MKTCAP: number;
  MKT_NM: string;
  TDD_OPNPRC: number;
  ACC_TRDVOL: number;
}
interface itemProps {
  data: stockDataProps[];
  totalPage: number;
  totalData: number;
}

interface Props {
  title: string;
  isMore: boolean;
  moreLink: string;
  item: itemProps;
}

const StockItemListComponent: React.FC<Props> = ({
  title,
  isMore,
  moreLink,
  item,
}) => {
  const dispatch = useDispatch();
  const data = item.data;
  const totalData = item.totalData;

  const moreBtn = (isMore: boolean) => {
    if (isMore === true) {
      return (
        <li className="flex gap-1 p-2 items-center border-gray-100">
          <div className="w-full text-center p-2">
            <Link to={moreLink}>
              더보기 <FontAwesomeIcon icon={faChevronRight} />
            </Link>
          </div>
        </li>
      );
    } else {
      return (
        <li className="flex gap-1 p-2 items-center border-gray-100">
          <div className="w-full text-center p-2">
            <Link to={moreLink} onClick={() => dispatch(pageIncrement())}>
              더보기 <FontAwesomeIcon icon={faChevronDown} />
              <div className="text-sm">
                {Comma(data.length)} / {Comma(totalData)}
              </div>
            </Link>
          </div>
        </li>
      );
    }
  };
  return (
    <div className="bg-white w-full">
      <div className="h-full mt-2 p-2 w-full border-gray-100">
        <div className="flex w-full p-2 items-center">
          <h2>{title}</h2>
          <div className="text-xs ml-auto">{BasdConversion(data[0].BAS_DD.toString())} 기준</div>
        </div>
        <div className="w-full pl-2 pr-2 pb-1 flex gap-1 flex-myFlex">
          <span className="text-sm w-2/5">종목명</span>
          <span className="text-sm w-1/5 text-center">거래량</span>
          <span className="text-sm w-2/5 text-right">거래량(만) ・ 시가총액(억원)</span>
        </div>
        <div className="line border-b-2 ml-2 mr-2 border-gray-100"></div>
        <ul className="pl-2 pr-2">
          {data.length > 0 ? (
            data.map((item: stockDataProps) => {
              return (
                <li
                  className="flex gap-1 p-2 items-center border-b-2 border-gray-100"
                  key={item.id}
                >
                  <div className="w-2/5 font-bold text-sm">{item.ISU_NM}</div>
                  <div className="w-1/5 font-bold">
                    <div className="w-20 ml-auto mr-auto text-sm bg-blue-600 text-white text-center rounded-md max-w-xs p-2">
                      {Comma(item.ACC_TRDVOL)}
                    </div>
                  </div>
                  <div className="w-2/5 text-right">
                    <div className="font-bold text-sm">
                      {DigitConversion(item.MKTCAP,1e8)}
                    </div>
                    <div className="text-sm font-bold">
                      {DigitConversion(item.ACC_TRDVOL,1e4)}
                    </div>
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
