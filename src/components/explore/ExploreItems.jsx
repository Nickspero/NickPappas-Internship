import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NftCard from "../UI/NftCard"
import NftCardSkeleton from "../UI/NftCardSkeleton"

const ExploreItems = () => {
  const [exploreData, setExploreData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sliceEnd, setSliceEnd] = useState(8)
  const [filterVal, setFilterVal] = useState("")

  async function getData() {
    const { data } = await axios.get(
      `https://us-central1-nft-cloud-functions.cloudfunctions.net/explore?filter=${filterVal}`
    );
    setExploreData(data);
    setLoading(false)
  }

  useEffect(() => {
    getData();
  }, [filterVal]);

  console.log(filterVal)

  return (
    <>
      <div>
        <select id="filter-items" defaultValue="" onChange={(e)=>{setFilterVal(e.target.value)}}>
          <option value="">Filter</option>
          <option value="price_low_to_high">Price, Low to High</option>
          <option value="price_high_to_low">Price, High to Low</option>
          <option value="likes_high_to_low">Most liked</option>
        </select>
      </div>

      {loading
        ? new Array(8).fill(0).map((_, index) => (
            <div
              key={index}
              className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
              style={{ display: "block", backgroundSize: "cover" }}
            >
              <NftCardSkeleton skIndex={index}/>
            </div>
          ))
        : exploreData.slice(0,sliceEnd).map((item) => (
            <div
              key={item.id}
              className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
              style={{ display: "block", backgroundSize: "cover" }}
            >
              <NftCard data={item}/>
            </div>
          ))}
          {sliceEnd < 16 && <div className="col-md-12 text-center">
        <Link to="" id="loadmore" className="btn-main lead" 
        onClick={()=>{setSliceEnd(sliceEnd+4)}}>
          Load more
        </Link>
      </div>}
      
    </>
  );
};

export default ExploreItems;
