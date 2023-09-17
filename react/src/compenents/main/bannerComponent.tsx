import React from "react";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class BannerComponent extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="flex gap-2">
        <div className="bg-white w-full ml-auto mr-auto flex p-4">
          <div className="w-full">
            <div className="font-bold text-base">코스피</div>
            <div className="text-red-600 font-bold text-base">2,601,28</div>
            <div className="text-xs text-gray-400">09.15 기준</div>
          </div>
          <div className="ml-auto w-full text-right pt-7">
            <div className="text-red-600 text-xs leading-5">
              <span className="mr-2">
                <FontAwesomeIcon icon={faCaretUp} />
              </span>
              1.10%
            </div>
            <div className="text-red-600 text-xs">28.39</div>
          </div>
        </div>
        <div className="bg-white w-full ml-auto mr-auto flex p-4">
          <div className="w-full">
            <div className="font-bold">코스닥</div>
            <div className="text-blue-600 font-bold">899.03</div>
            <div className="text-xs text-gray-400">09.15 기준</div>
          </div>
          <div className="ml-auto w-full text-right pt-7 leading-5">
            <div className="text-blue-600 text-xs">
              <span className="mr-2">
                <FontAwesomeIcon icon={faCaretDown} />
              </span>
              0.05%
            </div>
            <div className="text-blue-600 text-xs">0.44</div>
          </div>
        </div>
      </div>
    );
  }
}

export default BannerComponent;
