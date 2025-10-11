import React from "react";
import Skeleton from "./Skeleton";

const NftCardSkeleton = ({skIndex}) => {
  return (
    <div className="item" key={skIndex}>
      <div className="nft__item">
                <div className="author_list_pp">
                  <Skeleton
                    width={50}
                    height={50}
                    borderRadius="50%"
                  ></Skeleton>
                  <i className="fa fa-check"></i>
                </div>

                <div className="nft__item_wrap">
                  <Skeleton
                    width="100%"
                    height="65%"
                    borderRadius={8}
                  ></Skeleton>
                </div>
                <div className="nft__item_info">
                  <Skeleton width={120} height={20} borderRadius={8}></Skeleton>
                  <Skeleton width={60} height={20} borderRadius={8}></Skeleton>
                </div>
              </div>
    </div>
  );
};

export default NftCardSkeleton;
