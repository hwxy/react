import "@/asset/sass/views/icon.module.scss";
import Navigation from "won-common/navigation";
const Icon = props => {
  let list = new Array(161).fill(0);
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
      <Navigation {...props} />
    </div>
  );
};
export default Icon;
