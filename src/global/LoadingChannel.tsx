// ** Import React
import React from "react";

type Props = {
  count: number;
  widthTitle: string;
  widthSubtitle: string;
  widthImage: string;
  heightImage: string;
};

const LoadingChannel = (props: Props) => {
  const { count, widthTitle, widthSubtitle, widthImage, heightImage } = props;

  const skeleton = Array(count)
    .fill(0)
    .map((_, i) => {
      return (
        <div className="animate-pulse flex gap-2 items-center" key={i}>
          <div
            className={`${widthImage} ${heightImage} bg-gray-500 rounded-full`}
          ></div>

          <div className="space-y-2">
            <div className={`${widthTitle} bg-gray-500 rounded-2xl py-1`}></div>

            <div
              className={`${widthSubtitle} bg-gray-500 rounded-2xl py-1`}
            ></div>
          </div>
        </div>
      );
    });

  return <React.Fragment>{skeleton}</React.Fragment>;
};

export default LoadingChannel;
