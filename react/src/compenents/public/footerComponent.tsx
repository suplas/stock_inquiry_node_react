import React from "react";
import { Link } from "react-router-dom";
import {
  faHouse,
  faCommentDots,
  faStar,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class FooterComponent extends React.Component {
  render(): React.ReactNode {
    return (
      <footer>
        <div className="flex pt-3 pb-3 pl-5 pr-5">
          <div className="ml-auto mr-auto text-center text-gray-400 w-11">
            <Link to={"/"}>
              <FontAwesomeIcon icon={faHouse} size={"lg"} />
              <div className="text-xs">홈</div>
            </Link>
          </div>
          <div className="ml-auto mr-auto text-center text-gray-400 w-11">
            <Link to={"/information"}>
              <FontAwesomeIcon icon={faChartSimple} size={"lg"} />
              <div className="text-xs">종목정보</div>
            </Link>
          </div>
          <div className="ml-auto mr-auto text-center text-gray-400  w-11">
            <Link to={"/interest"}>
              <FontAwesomeIcon icon={faStar} size={"lg"} />
              <div className="text-xs text-center">관심종목</div>
            </Link>
          </div>
          <div className="ml-auto mr-auto text-center text-gray-400 w-11">
            <Link to={"/talk"}>
              <FontAwesomeIcon icon={faCommentDots} size={"lg"} />
              <div className="text-xs text-center">토론방</div>
            </Link>
          </div>
        </div>
      </footer>
    );
  }
}

export default FooterComponent;
