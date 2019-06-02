import { Grid } from "antd-mobile";

const WonGrid = (props: any) => {
  let { data } = props;
  return (
    <div>
      <Grid hasLine={false} data={data} />
    </div>
  );
};

export default WonGrid;
