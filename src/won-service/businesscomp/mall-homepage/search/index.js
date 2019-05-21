// scss
import "@/asset/sass/won-service/businesscomp/mall-homepage/search/index.module.scss";
import React, { useState, useEffect } from "react";

const Search = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // document.scrollingElement.scrollTop;
    });
    return () => {};
  });
  return (
    <div styleName="search-container">
      <div styleName="search__classify">
        <span className="icon-141" />
      </div>
      <div styleName="search__input">
        <span className="icon-40" />
      </div>
      <div styleName="search__login">登录</div>
    </div>
  );
};
export default Search;
