import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const Bookmark = ({ id, reading }) => {
  // get local storage on first load
  const [storageItem, setStorageItem] = useState(() =>
    JSON.parse(localStorage.getItem("bookmarkedReadings") || "[]")
  );
  const post = { id, reading };
  // see if reading is already bookmarked
  const isBookmarked = storageItem.some(e => e.id === id);

  // toggle the bookmark action

  const handleToggleBookmark = () => {
      if (!isBookmarked) {
        const newStorageItem = [...storageItem, post];
        setStorageItem(newStorageItem);
        localStorage.setItem("bookmarkedReadings", JSON.stringify(newStorageItem));
      } else {
        const newStorageItem = storageItem.filter((post) => post.id !== id);
        setStorageItem(newStorageItem);
        localStorage.setItem("bookmarkedReadings", JSON.stringify(newStorageItem));
      }
  };

  return (
    <div className="bookmark" onClick={() => handleToggleBookmark()}>
        <FontAwesomeIcon icon={faBookmark} className={isBookmarked ? "bookmark_active" : "bookmark_inactive"} />
    </div>
  );
};

export default Bookmark;
