import { apiGet } from "@/core/network/index.tsx";
import axios from 'axios';
interface IBanner {
  icon: string;
}

interface IQuick {
  icon: string;
  text: string;
}

// interface IAjaxResults{
//   data: Idata,
// }

class HomePageStore {
  data: any;

  init = async (): Promise<void> => {
    // this.data = await apiGet("/_copy/homepage");
    let { data } = await axios({
      url: 'https://www.easy-mock.com/mock/5e1d59b364a3c20d7f366fc1/_copy_copy/homepage',
      method: 'get',
    })
    this.data = data;    
  };

  getBanner = (): IBanner[] => {
    return this.data.banner || [];
  };

  getQuick = (): IQuick[] => {
    return this.data.quick || [];
  };
}

export default new HomePageStore();
