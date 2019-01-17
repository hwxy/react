import "@/asset/sass/views/icon.module.scss";
// import { Link } from "react-router-dom";
import HomepageNav from "won-common/homepage-nav";
const Icon = () => {
  let list = new Array(159).fill(0);
  list = list.map((v, i) => {
    return (
      <div key={i} styleName="container__c">
        <span className={`icon-${i + 1} fz25`} />
        <p className="mt5">{`icon-${i + 1}`}</p>
      </div>
    );
  });
  return (
    <div styleName="icon-container">
      {list}
      <HomepageNav />
    </div>
  );
};
export default Icon;
