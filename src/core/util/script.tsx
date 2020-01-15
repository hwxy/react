export const insertAfter = ( newElement: HTMLElement, targetElement: HTMLElement): any => {
  var parent = targetElement.parentNode;
  if ( (parent as HTMLElement).lastChild == targetElement ){
      (parent as HTMLElement).appendChild( newElement );
  } else { 
    (parent as HTMLElement).insertBefore( newElement, targetElement.nextSibling );
  }
}          


const loadJs = (url: any, option = {}, callback: any): any => {
  let script = document.createElement("script");
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
  script.setAttribute('async', 'false');
  setTimeout(()=>{
    insertAfter(script, (document as any).querySelector('#root'));
  }, 2000)
}

export default loadJs;
