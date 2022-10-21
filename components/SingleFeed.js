import React, { useState, useEffect } from "react";
// import XMLParser from 'react-xml-parser';
import xmltojsondata from "../economist_feed.json";
import { Link } from "react-router-dom";
import axios from "axios";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDuotone,
  faList,
  faColumn,
  faGrip,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import BookmarkAction from "../functions/Bookmark";
// import column from '../client/assets/column.png'
class SingleFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarked: [],
      isList: true,
      isColumn: false,
      selectedFilter: {
        value: "",
        label: null,
        feeds: [],
      },
      errormessage: false,
      filteredData: [],
      currentFeed: this.props.location.state.feed,
      selectedCategory: "",
      categories: [],
      currentCategory: "",
      viewFilter: [
        {
          value: "list_view",
          label: (
            <span>
              <FontAwesomeIcon icon={faList} />
            </span>
          ),
        },
        {
          value: "column_view",
          label: (
            <span>
              <FontAwesomeIcon icon={faGrip} />
            </span>
          ),
        },
      ],
    };
  }
  componentDidMount() {
    const categoriesArr = [{ value: "view all", label: "view all" }];
    let categoryItem;
    // if (this.state.currentFeed.data.channel.item) {
    this.state.currentFeed.data.channel.item.map((e) => {
      if (e.category) {
        e.category.map((i) => {
          categoryItem = i;
          // if the category doesnt exist yet
        });
        if (
          !categoriesArr.includes({
            value: categoryItem.__cdata,
            label: categoryItem.__cdata,
          })
        ) {
          categoriesArr.push({
            value: categoryItem.__cdata,
            label: categoryItem.__cdata,
          });
          // console.log({ value: i.__cdata, label: i.__cdata })
        } else {
          return;
        }

        //   console.log(categoriesArr);

        //   }
        // });

        this.setState({ categories: categoriesArr });
      }
    });

    // }
  }

  QueryData = function (category, data) {
    // let dataArr = [...data];
    if (category === "view all") {
      this.setState({ filteredData: [] });
    }
    const feeddata = this.state.currentFeed.data.channel.item.filter(
      (item) => {
        if (item.category) {
          if (item.category.filter((e) => e.__cdata == category).length > 0) {
            // this.setState({filteredData: item })
            return item;
          } else {
            this.setState({ errormessage: true });
            this.setState({ filteredData: [] });
          }
        }
      }

      // item.category.find(
      //   (innerItem) => innerItem.category.__cdata === category
      // )
    );
    this.setState({ filteredData: feeddata });
  };

  filterSelectedData = function (data) {
    this.state.selectedFilter(data);
  };
  filterSelectedDataCategory = function (data) {
    this.state.selectedCategory(data.value);
  };
  addToFavorite = (id) => {
    const data = this.state.currentFeed.data.channel.item.find(
      (item) => item.id === id
    );
    this.setState({
      bookmarked: [...this.state.bookmarked, data],
    });
    data.bookmarked = true;
  };

  deleteFromFavorite = (id) => {
    this.setState({ bookmarked: hapus });
  };
  render() {
    return (
      <div className="allPosts_container">
        <div className="singleFeed_headerImage">
          <img src={this.state.currentFeed.src} />
          <div className="middle2">
            <h1 className="Single_feed_heading">
              {this.state.currentFeed.title}
            </h1>
          </div>
        </div>
        <div className="back_button">
          <span>
            <Link to="/feeds">
              <button>
                <i className="arrow left"></i> back to Feeds
              </button>
            </Link>
          </span>
        </div>
        <div className="filters">
          <div className="view_filter" style={{ marginRight: "-20px" }}>
            <Select
              options={this.state.viewFilter}
              // dangerouslySetInnerHTML={{
              //   __html: this.state.selectedFilter.label,
              // }}
              onChange={(val) => {
                // this.filterSelectedData(val);
                if (val.value === "column_view") {
                  this.setState({ isList: false });
                  this.setState({ isColumn: !this.state.isColumn });
                } else {
                  this.setState({ isColumn: false });
                  this.setState({ isList: !this.state.isList });
                }

                console.log(val);
              }}
              defaultValue={{
                label: (
                  <span>
                    <FontAwesomeIcon icon={faList} />
                  </span>
                ),
                value: 0,
              }}
            />
          </div>
          <div
            className={
              this.state.categories.length
                ? "category_select"
                : "category_select_inactive"
            }
          >
            {/* <label for="categories">Category</label> */}
            <Select
              defaultValue={{ label: "Select Category", value: 0 }}
              style={{ color: "black" }}
              // value={this.state.selectedCategory}
              options={this.state.categories}
              onChange={(val) => {
                this.setState({ currentCategory: val.value });
                this.QueryData(val.value, this.props.location.state.feed);
              }}
            />
          </div>

          {/* <input className="search" type="search"></input> */}
        </div>
        {!this.state.filteredData.length
          ? this.state.currentFeed.data.channel.item.map((e, index) => {
              if (e.encoded) {
                return (
                  <div
                    className={
                      this.state.isColumn ? "posts_card_isColumn" : "posts_card"
                    }
                    key={index}
                    id={e.title}
                  >
                    <BookmarkAction id={e.id} reading={e} />
                    <Link
                      className="posts_card_inner"
                      style={{ textDecoration: "none" }}
                      key={index}
                      to={{
                        pathname: `/post/${index}`,
                        // search: `?name=${e.title.__cdata}`,
                        state: {
                          feedtitle: this.state.currentFeed.title,
                          posts: e,
                        },
                      }}
                    >
                      {/* <h2 className="h2ost_card_title">{e.title.__cdata ? e.title.__cdata : e.title}</h2> */}
                      <h3>{e.title ? e.title.__cdata : ""}</h3>

                      <div style={{ color: "#454545", fontWeight: "100" }}>
                        {e.pubDate}
                      </div>
                      {e.encoded ? (
                        <div
                          className="posts_card_description"
                          dangerouslySetInnerHTML={{
                            __html: e.encoded.__cdata,
                          }}
                        ></div>
                      ) : (
                        <></>
                      )}
                      <div className="category">
                        {e.category
                          ? e.category.map((f, index) => {
                              return (
                                <p
                                  key={index}
                                  id={`${f}` + "__" + `${index}`}
                                  className={
                                    this.state.currentCategory === f.__cdata
                                      ? "categorySingle active_category"
                                      : "categorySingle"
                                  }
                                >
                                  {f.__cdata}
                                </p>
                              );
                            })
                          : ""}
                      </div>
                      {/* <p>{e.encoded ? e.encoded.__cdata : ''}</p> */}
                    </Link>
                  </div>
                );
              } else {
                <div className="posts_card" key={index} id={e.title}>
                  here
                </div>;
              }
            })
          : this.state.filteredData.map((e, index) => {
              if (e.encoded) {
                return (
                  <div className={
                    this.state.isColumn ? "posts_card_isColumn" : "posts_card"
                  } key={index} id={e.title}>
                    
                    <BookmarkAction id={e.id} reading={e} />
                    <Link
                      className="posts_card_inner"
                      style={{ textDecoration: "none" }}
                      key={index}
                      to={{
                        pathname: `/post/${index}`,
                        // search: `?name=${e.title.__cdata}`,
                        state: {
                          feedtitle: this.state.currentFeed.title,
                          posts: e,
                        },
                      }}
                    >
                      {/* <h2 className="h2ost_card_title">{e.title.__cdata ? e.title.__cdata : e.title}</h2> */}
                      <div style={{ color: "#454545", fontWeight: "100" }}>
                        {e.pubDate}
                      </div>
                      {e.encoded ? (
                        <div
                          className="posts_card_description"
                          dangerouslySetInnerHTML={{
                            __html: e.encoded.__cdata,
                          }}
                        ></div>
                      ) : (
                        <></>
                      )}
                      <div className="category">
                        {e.category
                          ? e.category.map((f, index) => {
                              return (
                                <p
                                  key={index}
                                  id={`${f}` + "__" + `${index}`}
                                  className={
                                    this.state.currentCategory === f.__cdata
                                      ? "categorySingle active_category"
                                      : "categorySingle"
                                  }
                                >
                                  {f.__cdata}
                                </p>
                              );
                            })
                          : ""}
                      </div>
                      {/* <p>{e.encoded ? e.encoded.__cdata : ''}</p> */}
                    </Link>
                  </div>
                );
              }
            })}
      </div>
    );
  }
}
export default SingleFeed;
