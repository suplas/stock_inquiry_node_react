import React from "react";
import { Link } from "react-router-dom";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class InterestComponent extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="bg-white w-full">
        <div className="h-full mt-2 p-2 w-full border-b-2 border-gray-100">
          <div className="flex w-full p-2">
            <h2>관심종목</h2>
          </div>
          <div className="w-full pl-2 pr-2 pb-1 flex gap-1 flex-myFlex">
            <span className="text-sm w-2/5">종목명</span>
            <span className="text-sm w-1/5 text-right">등락률</span>
            <span className="text-sm w-2/5 text-right">거래량 ・ 현재가 </span>
          </div>
          <div className="line border-b-2 ml-2 mr-2 border-gray-100"></div>
          <ul className="pl-2 pr-2">
            <li className="flex gap-1 p-2 items-center border-b-2 border-gray-100">
              <div className="w-2/5 font-bold text-base">신성델타테크</div>
              <div className="w-1/5 font-bold">
                <div className="w-20 ml-auto text-sm bg-blue-600 text-white text-center rounded-md max-w-xs p-2">
                  -3.37%
                </div>
              </div>
              <div className="w-2/5 text-right">
                <div className="font-bold text-base text-blue-600">
                  -1,471,745
                </div>
                <div className="text-sm font-bold">47,360</div>
              </div>
            </li>
            <li className="flex gap-1 p-2 items-center border-b-2 border-gray-100">
              <div className="w-2/5 font-bold text-base">포스코스틸리온</div>
              <div className="w-1/5 font-bold">
                <div className="w-20 ml-auto text-sm bg-red-600 text-white text-center rounded-md max-w-xs p-2">
                  29.98%
                </div>
              </div>
              <div className="w-2/5 text-right">
                <div className="font-bold text-base text-red-600">
                  2,007,410
                </div>
                <div className="text-sm font-bold">69,800</div>
              </div>
            </li>
            <li className="flex gap-1 p-2 items-center border-b-2 border-gray-100">
              <div className="w-2/5 font-bold text-base">포스코스틸리온</div>
              <div className="w-1/5 font-bold">
                <div className="w-20 ml-auto text-sm bg-red-600 text-white text-center rounded-md max-w-xs p-2">
                  29.98%
                </div>
              </div>
              <div className="w-2/5 text-right">
                <div className="font-bold text-base text-red-600">
                  2,007,410
                </div>
                <div className="text-sm font-bold">69,800</div>
              </div>
            </li>
            <li className="flex gap-1 p-2 items-center border-b-2 border-gray-100">
              <div className="w-2/5 font-bold text-base">포스코스틸리온</div>
              <div className="w-1/5 font-bold">
                <div className="w-20 ml-auto text-sm bg-red-600 text-white text-center rounded-md max-w-xs p-2">
                  29.98%
                </div>
              </div>
              <div className="w-2/5 text-right">
                <div className="font-bold text-base text-red-600">
                  2,007,410
                </div>
                <div className="text-sm font-bold">69,800</div>
              </div>
            </li>
            <li className="flex gap-1 p-2 items-center border-gray-100">
              <div className="w-full text-center p-2">
                <Link to={"/"}>
                  더보기 <FontAwesomeIcon icon={faChevronRight} />
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default InterestComponent;
