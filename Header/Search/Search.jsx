import React from "react";
import { MdClose } from "react-icons/md";
import "./Search.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp"


const Search = ({ setShowSearch }) => {
    

  
    return (
        <div className="search-modal">
            <div className="form-field">
                <input
                    autoFocus
                    type="text"
                    placeholder="Search for products"
                   
                />
                <MdClose
                    className="close-btn"
                    onClick={() => setShowSearch(false)}
                />
            </div>
            <div className="search-result-content">
              
                <div className="search-results">
                 
                        <div className="search-result-item">
                            <div className="image-container">
                                <img
                                    src={prod} alt=""
                                />
                            </div>
                            <div className="prod-details">
                                <span className="name">
                                    name
                                </span>
                                <span className="desc">
                                   desc
                                </span>
                            </div>
                        </div>
                  
                </div>
            </div>
        </div>
    );
};

export default Search;