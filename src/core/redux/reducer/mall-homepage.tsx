interface ImallHomePage{
  mallHomePage: ( state: object, action: object) => any
}

let page: ImallHomePage = {
  mallHomePage(state, action){
    return {
      a:1 
    }
  }
} 
export default page
