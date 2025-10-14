import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NftCard from "../UI/NftCard";
import NftCardSkeleton from "../UI/NftCardSkeleton";

const AuthorItems = () => {

  const [authorNftData, setAuthorNftData] = useState([])
  const [authImg, setAuthImg] = useState("")
  const [loading, setLoading] = useState(true)

  const { id } = useParams()

  async function getData() {
    const { data } = await axios.get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${id}`)
    setAuthorNftData(data.nftCollection)
    setAuthImg(data.authorImage)
    setLoading(false)
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <div className="de_tab_content">
      <div className="tab-1">
        <div className="row">

          {loading? 
          new Array(8).fill(0).map((_, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-6 col-sm-6 col-xs-12"
            >
              <NftCardSkeleton skIndex={index}/>
            </div>))
            : authorNftData.map((item) => (
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={item.id}>
              <NftCard data={item} backupImg={authImg}/>
            </div>
          ))}


        </div>
      </div>
    </div>
  );
};

export default AuthorItems;
