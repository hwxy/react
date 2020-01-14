import { createBrowserHistory as createHistory } from "history";

const history = createHistory();
class Page {
  constructor() {}
  history = history;
  jumpHistory(path: string) {
    this.history.push(path);
  }
  jumpLocation(path: string) {
    location.href = path;
  }
}

const page: Page = new Page();

export default page;
