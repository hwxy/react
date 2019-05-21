import { Grid } from "antd-mobile";

const WonGrid = props => {
  let { data } = props;
  return (
    <div>
      <Grid hasLine={false} data={data} activeStyle={false} />
    </div>
  );
};

export default WonGrid;
