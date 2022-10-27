import React from "react";
// import XMLParser from 'react-xml-parser';
import economist_feed from "../data/economist_feed.json";
import back_channel_feed from "../data/back_channel_feed.json";
import { Link } from "react-router-dom";
import axios from "axios";
import Select from "react-select";
import npr from "../data/npr.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { fetchFeeds } from "../client/redux/feeds";
import { BoxLoading } from "react-loadingg";
import { AddFeedModal } from "../components/AddFeedModal";
import {
  faDuotone,
  faList,
  faColumn,
  faGrip,
  faBookBookmark,
  faNewspaper,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { parse } from "rss-to-json";
import Feed from "rss-to-json";
class Feeds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFilter: {
        value: "",
        label: null,
      },
      feeds: [
        {
          title: "The Economist",
          data: economist_feed,
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE1fWOhNt-t5XUtE9AhUhxhO3RrEAiswDX1A&usqp=CAU",
        },
        {
          title: "Backchannel",
          data: back_channel_feed,
          src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0de98e26784463.5635a685566c8.jpg",
        },
        {
          title: "NPR Topics: News",
          data: npr,
          src: "data:image/png;base64,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",
        },
      ],
      selectedCategory: "",
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
      bookmarked: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.props.getFeeds().then(() => {
      setTimeout(() => {
        this.setState({ isLoading: true });
      }, "1000")
    })
    this.setState({
      bookmarked: JSON.parse(localStorage.getItem("bookmarkedReadings")),
    });
  }

  // axios
  //   .create({
  //     baseURL: "https://medium.com/feed/backchannel",
  //     withCredentials: false,
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //       "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  //     },
  //   })

  // axios.get("https://medium.com/feed/backchannel", {
  //     'content-Type': "application/xml",
  //   })
  //   .then(function (response) {
  //     // self.setState({ authors: response.data });
  //     console.log(response.data);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  //   }
  filterSelectedData = function (data) {
    this.state.selectedFilter(data);
  };

  render() {
    return (
      <div className="allFeed_container_outer">
        {this.state.isLoading ? (
          <>
            <h2 className="feeds_heading">
              Feeds
              <span className="Add_feed">
                
                {/* <AddFeedModal
                style={{width: '340px',
                  height: '200px'}}
                  onSubmit={(event) => {
                    event.preventDefault(event);
                    console.log(event.target.name.value);
                    console.log(event.target.email.value);
                  }}
                >
                  <FontAwesomeIcon
                  icon={faPlus}
                  style={{ width: 25, height: 25 }}
                />
                </AddFeedModal> */}
              </span>
            </h2>
            {/* <div className="filters"></div> */}
            <div className="allFeed_container">
              {this.props.feeds.map((e, index) => {
                return (
                  <Link
                    key={index}
                    className="feeds_card"
                    to={{
                      pathname: `/feed/${e.title}`,
                      // search: `?name=${e.title.__cdata}`,
                      state: { feed: e },
                    }}
                  >
                    <div className="container">
                      <img
                        className="image"
                        src={e?.image}
                        alt={e?.title}
                        style={{ width: "100%" }}
                      />
                      <div className="middle">
                        <h2 className="text">{e?.title}</h2>
                      </div>
                    </div>
                    {/* <p>{e.encoded ? e.encoded.__cdata : ''}</p> */}
                  </Link>
                );
              })}
            </div>
            <div className="heading2" style={{ marginTop: "50px" }}>
              <h2 className="Bookmarked_Readings_h2 ">
                Bookmarked Readings{" "}
                <FontAwesomeIcon
                  icon={faBookBookmark}
                  className="faBookBookmark_icon"
                />
              </h2>
            </div>
            <div className="bookmarkedList">
              {this.state.bookmarked ? (
                this.state.bookmarked.map((e, index) => {
                  return (
                    <Link
                      style={{ textDecoration: "none" }}
                      key={index}
                      to={{
                        pathname: `/post/${e.id}`,
                        state: {
                          feedtitle: "",
                          posts: e.reading,
                        },
                      }}
                    >
                      <div className="bookmarked_cards">
                        <div className="bookmarked_description">
                          <h4>{e.reading.title}</h4>
                          <p>
                            <strong>{e.reading?.author}</strong>
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })
              ) : (
                // if there are bookmarked items, map and return each item as a card
                <div className="nobookmarks">
                  <p>No bookmarked items</p>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="loading_text">
            <BoxLoading />
          </div>
        )}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    feeds: state.feeds,
  };
};

const mapDispatch = (dispatch, { history }) => ({
  getFeeds: () => dispatch(fetchFeeds()),
  // deleteTheFeed: (feed) => dispatch(deleteTheFeed(feed, history)),
  createNewFeed: (feed) => dispatch(createNewFeed(feed, history)),
});

export default connect(mapState, mapDispatch)(Feeds);
