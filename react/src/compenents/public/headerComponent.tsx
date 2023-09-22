import React from "react";
import { Link } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class HeaderComponent extends React.Component {
  render(): React.ReactNode {
    return (
      <header className="border-b-[1px]">
        <div className="flex items-center pt-3 pb-3 pl-5 pr-5 whitespace-nowrap max-w-6xl m-auto">
          <div>로고</div>
          <div className="ml-auto">
            <Link to={"/"}>
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

export default HeaderComponent;
