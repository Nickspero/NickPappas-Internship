import React, { useEffect, useState } from "react";
import AuthorItems from "../components/author/AuthorItems";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Skeleton from "../components/UI/Skeleton";

const Author = () => {

  const [authData, setAuthData]= useState([])
  const [followClick, setFollowClick] = useState(false)
  const [loading, setLoading] = useState(true)

  const { id }= useParams()

  async function getData() {
    const { data } = await axios.get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${id}`)
    setAuthData(data)
    setLoading(false)
  }

  useEffect(()=>{
    window.scrollTo(0, 0);
    getData()
  },[])


  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section
          id="profile_banner"
          aria-label="section"
          className="text-light"
          data-bgimage="url(images/author_banner.jpg) top"
          style={{ background: `url(${authData.authorImage || <Skeleton width="100%" height="100%"/>}) top` }}
        ></section>

        <section aria-label="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12" data-aos="fade" data-aos-duration="1000">
                <div className="d_profile de-flex">
                  <div className="de-flex-col">

                    {loading? 
                    <div className="profile_avatar">
                      <Skeleton width={80} height={80} borderRadius="50%"/>
                      <div className="profile_name">
                        <h4>
                          <Skeleton width={160} height={20} borderRadius={12}/>
                          <span className="profile_username"><Skeleton width={80} height={20} borderRadius={12}/></span>
                          <span id="wallet" className="profile_wallet">
                            <Skeleton width={100} height={20} borderRadius={12}/>
                          </span>
                        </h4>
                      </div>
                    </div>
                    :
                    <div className="profile_avatar">
                      <img src={authData.authorImage} alt="" />
                      <i className="fa fa-check"></i>
                      <div className="profile_name">
                        <h4>
                          {authData.authorName}
                          <span className="profile_username">@{authData.tag}</span>
                          <span id="wallet" className="profile_wallet">
                            {authData.address}
                          </span>
                          <button id="btn_copy" title="Copy Text">
                            Copy
                          </button>
                        </h4>
                      </div>
                    </div>}

                  </div>
                  <div className="profile_follow de-flex">
                    <div className="de-flex-col">
                      {loading? 
                      <div className="profile_follower"><Skeleton width={80} height={20} borderRadius={8}/></div>
                    : <div className="profile_follower">{followClick? authData.followers + 1 : authData.followers} followers</div>}
                      
                      <Link to="#" className="btn-main" onClick={()=>setFollowClick(!followClick)}>
                      {followClick? "Unfollow" : "Follow" }
                      </Link>
                    </div>
                  </div>
                </div>

              </div>

              <div className="col-md-12">
                <div className="de_tab tab_simple">
                  <AuthorItems />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Author;
