import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import axios from "axios";
import Skeleton from "../UI/Skeleton";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const HotCollections = () => {
  const [fetchData, setFetchData] = useState([]);
  const [loading, setLoading] = useState(true);

  const settings = {
    items: 4,
    margin: 10,
    loop: true,
    nav: true,
    dots: false,
    autoplay: false,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  };

  async function getData() {
    const { data } = await axios.get(
      "https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections"
    );
    setFetchData(data);
    setLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>

          {loading? (
            <>
              <OwlCarousel {...settings}>
                {new Array(4).fill(0).map((item, index) => (
                  <div className="item" key={index}>
                    <div className="nft_coll">
                      <div className="nft_wrap">
                        <Skeleton width="100%" height="100%" borderRadius={8} />
                      </div>
                      <div className="nft_coll_pp">
                        <Skeleton width={60} height={60} borderRadius={120} />
                        <i className="fa fa-check"></i>
                      </div>
                      <div className="nft_coll_info">
                        <h4>
                          <Skeleton width={120} height={20} borderRadius={8} />
                        </h4>
                        <span>
                          <Skeleton width={60} height={15} borderRadius={8} />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </OwlCarousel>
            </>
          ) : (
            <>
              <OwlCarousel {...settings}>
                {fetchData.map((item) => (
                  <div className="item" key={item.id}>
                    <div className="nft_coll">
                      <div className="nft_wrap">
                        <Link to="/item-details">
                          <img
                            src={item.nftImage}
                            className="lazy img-fluid"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="nft_coll_pp">
                        <Link to="/author">
                          <img
                            className="lazy pp-coll"
                            src={item.authorImage}
                            alt=""
                          />
                        </Link>
                        <i className="fa fa-check"></i>
                      </div>
                      <div className="nft_coll_info">
                        <Link to="/explore">
                          <h4>{item.title}</h4>
                        </Link>
                        <span>ERC-{item.code}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </OwlCarousel>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default HotCollections;
