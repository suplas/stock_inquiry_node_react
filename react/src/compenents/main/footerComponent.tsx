import React from "react";

class FooterComponent extends React.Component {
  render(): React.ReactNode {
    return (
      <footer>
        <div className="flex pt-3 pb-3 pl-5 pr-5">
          <div className="ml-auto mr-auto text-center text-gray-400">
            <svg
              className="w-6 h-6 dark:text-white ml-auto mr-auto"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <span className="text-xs text-center">관심종목</span>
          </div>
          <div className="ml-auto mr-auto text-center text-gray-400">
            <svg
              className="w-6 h-6 dark:text-white ml-auto mr-auto"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9"
              />
            </svg>
            <span className="text-xs">홈</span>
          </div>
          <div className="ml-auto mr-auto text-center text-gray-400">
            <svg
              className="w-6 h-6 dark:text-white ml-auto mr-auto"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 5h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-2v3l-4-3H8m4-13H2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2v3l4-3h4a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
              />
            </svg>
            <span className="text-xs text-center">토론방</span>
          </div>
        </div>
      </footer>
    );
  }
}

export default FooterComponent;
