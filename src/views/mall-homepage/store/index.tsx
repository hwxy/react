import { apiGet } from "@/core/network/index.tsx";


interface IBanner{
  icon: string,
}

interface IQuick{
  icon: string,
  text: string
}


// interface IAjaxResults{
//   data: Idata,
// }

class HomePageStore{

  data: any

  init = async (): Promise<void>=> {
    this.data = await apiGet('/_copy/homepage');
  };

  getBanner = (): IBanner[] => {
    return this.data.banner || [];
  }

  getQuick = (): IQuick[] => {
    return this.data.quick || [];
  }

}

export default new HomePageStore();
