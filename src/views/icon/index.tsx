import Style from "@/asset/sass/views/icon.module.scss";
import Navigation from "won-bcomp/navigation";
const Icon = (props : any) => {
  let list = new Array(161).fill(0);
  list = list.map((v, i) => {
    return (
      <div key={i} className={Style.container__c}>
        <span className={`icon-${i + 1} fz25`} />
        <p className="mt5">{`icon-${i + 1}`}</p>
      </div>
    );
  });
  return (
    <div className={Style['icon_container']}>
      {list}
      <Navigation {...props} />
    </div>
  );
};
export default Icon;
