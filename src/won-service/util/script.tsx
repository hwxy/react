function loadJs(url: any, option = {}, callback: any) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  if (typeof callback != "undefined") {
      script.onload = function() {
        callback();
      };
  }
  script.src = url;
  Object.entries(option).forEach((value: any) => {
    script.setAttribute(value[0], value[1]);
  });

  document.documentElement.insertBefore(script, document.body);
}

export default loadJs;
