import React from "react";
// scss
import Style from "@/asset/sass/won-service/businesscomp/mall-homepage/search/index.module.scss";

const Search = () => {
  return (
    <div className={Style["searchContainer"]}>
      <div className={Style["search__classify"]}>
        <span className="icon-141" />
      </div>
      <div className={Style["search__input"]}>
        <span className="icon-40" />
      </div>
      <div className={Style["search__login"]}>登录</div>
    </div>
  );
};
export default Search;
