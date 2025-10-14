import React from "react";
import Skeleton from "./Skeleton";

const ItemDetailsSkeleton = () => {
  return (
    <>
      <div className="col-md-6 text-center">
        <Skeleton width="100%" height="100%" />
      </div>
      <div className="col-md-6">
        <div className="item_info">
          <Skeleton width={300} height={40} borderRadius={8} />
          <div className="item_info_counts">
            <Skeleton width={60} height={40} />
            <Skeleton width={60} height={40} />
          </div>
          <Skeleton width="100%" height="100%" borderRadius={8} />
          <div className="d-flex flex-row">
            <div className="mr40">
              <h6>Owner</h6>
              <div className="item_author">
                <div className="author_list_pp">
                  <Skeleton width={50} height={50} borderRadius={120} />
                  <i className="fa fa-check"></i>
                </div>
                <div className="author_list_info">
                  <Skeleton width={110} height={20} borderRadius={8} />
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className="de_tab tab_simple">
            <div className="de_tab_content">
              <h6>Creator</h6>
              <div className="item_author">
                <div className="author_list_pp">
                  <Skeleton width={50} height={50} borderRadius={120} />
                  <i className="fa fa-check"></i>
                </div>
                <div className="author_list_info">
                  <Skeleton width={110} height={20} borderRadius={8} />
                </div>
              </div>
            </div>
            <div className="spacer-40"></div>
            <h6>Price</h6>
            <div className="nft-item-price">
              <Skeleton width={80} height={20} borderRadius={8} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetailsSkeleton;
