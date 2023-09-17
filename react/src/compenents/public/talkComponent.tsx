import React from "react";

interface Props {
    title:string
}

class TalkComponent extends React.Component<Props> {
  render(): React.ReactNode {
    const { title } = this.props;
    return (
      <div className="bg-white w-full flex h-40 mt-2">
        <div className="h-full mt-2 p-2 w-full border-b-2 border-gray-100">
          <div className="flex w-full p-2">
            <h2>{title}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default TalkComponent;
