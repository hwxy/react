class QueryString {
  get = (name: string) => {
    var prefix = '';
    name = prefix + name;
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var result = window.location.search.substr(1).match(reg);
  
    if (result != null) {
      return decodeURIComponent(result[2]);
    }
    return null;
  };
}
export default new QueryString()