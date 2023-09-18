import React from "react";

interface Props {
  title: string;
}

class RollingBannerComponent extends React.Component<Props> {
  render(): React.ReactNode {
    const { title } = this.props;
    return (
      <div className="bg-white w-full flex h-10 mt-2 pl-4 pr-4 pb-2 pt-2 items-center gap-1 relative">
        <div className="font-bold">{title}</div>
        <div className="relative w-auto h-full box-border overflow-hidden">
          <ul className="list-none animate-slider">
            <li className="flex gap-2 items-center absolute left-0 bottom-6">
              <div>
                <div className="font-bold">12분전</div>
                <div className="font-bold">신성델타테크는 별로네</div>
                <div className="font-bold">test</div>
              </div>
            </li>
            <li className="flex gap-2 items-center">
            <div>
              <div className="font-bold">1일전</div>
              <div className="font-bold">포스코스 가즈아!!</div>
              <div className="font-bold">test2</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default RollingBannerComponent;
