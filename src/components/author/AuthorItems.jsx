import React from "react";
import { Link } from "react-router-dom"; 
import SkeletonCard from "../SkeletonCard";

const AuthorItems = ({ nftCollection, authorImage }) => {
    if (!nftCollection) {
      return (
        <div className="row">
          {new Array(8).fill(0).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      );
    }

  return (
    <div className="de_tab_content">
      <div className="tab-1">
        <div className="row">
           {nftCollection.map((item, index) => (
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
              <div className="nft__item">
                <div className="author_list_pp">
                  <Link to={`/author/${item.authorId}`}>
                  {authorImage && (
                    <img className="lazy" src={authorImage} alt='Author' />
                  )}
                    <i className="fa fa-check"></i>
                  </Link>
                </div>

                <div className="nft__item_wrap">
                  <div className="nft__item_extra">
                    <div className="nft__item_buttons">
                      <button>Buy Now</button>
                      <div className="nft__item_share">
                        <h4>Share</h4>
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                          <i className="fa fa-facebook fa-lg"></i>
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                          <i className="fa fa-twitter fa-lg"></i>
                        </a>
                        <a href="#">
                          <i className="fa fa-envelope fa-lg"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <Link to={`/item-details/${item.nftId}`}>
                  {item.nftImage && (
                    <img
                    src={item.nftImage}
                    className="lazy nft__item_preview"
                    alt={item.title}
                    />
                  )}
                  </Link>
                </div>
                <div className="nft__item_info">
                  <Link to={`/item-details/${item.nftId}`}>
                    <h4>{item.title}</h4>
                  </Link>
                  <div className="nft__item_price">{item.price} ETH</div>
                  <div className="nft__item_like">
                    <i className="fa fa-heart"></i>
                    <span>{item.likes}</span>
                  </div>
                </div>
              </div>
            </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorItems;
